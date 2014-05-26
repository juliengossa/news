/**
 * ownCloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */
app.config(function ($routeProvider, $provide, $httpProvider) {
    'use strict';

    const feedType = {
        FEED: 0,
        FOLDER: 1,
        STARRED: 2,
        SUBSCRIPTIONS: 3,
        SHARED: 4
    };

    // constants
    $provide.constant('REFRESH_RATE', 60);  // seconds
    $provide.constant('ITEM_BATCH_SIZE', 50);  // how many items to autopage by
    $provide.constant('BASE_URL', OC.generateUrl('/apps/news'));
    $provide.constant('FEED_TYPE', feedType);

    // make sure that the CSRF header is only sent to the ownCloud domain
    $provide.factory('CSRFInterceptor', ($q, BASE_URL) => {
        return {
            request: (config) => {
                if (config.url.indexOf(BASE_URL) === 0) {
                    config.headers.requesttoken = csrfToken;
                }

                return config || $q.when(config);
            }
        };
    });
    $httpProvider.interceptors.push('CSRFInterceptor');

    // routing
    const getResolve = (type) => {
        return {
            // request to items also returns feeds
            data: [
                '$http',
                '$route',
                '$q',
                'BASE_URL',
                'ITEM_BATCH_SIZE',
                ($http, $route, $q, BASE_URL, ITEM_BATCH_SIZE) => {

                    const parameters = {
                        type: type,
                        limit: ITEM_BATCH_SIZE
                    };

                    if ($route.current.params.id !== undefined) {
                        parameters.id = $route.current.params.id;
                    }

                    let deferred = $q.defer();

                    $http({
                        url:  `${BASE_URL}/items`,
                        method: 'GET',
                        params: parameters
                    }).success((data) => {
                        deferred.resolve(data);
                    });

                    return deferred.promise;
                }
            ]
        };
    };

    $routeProvider
        .when('/items', {
            controller: 'ContentController as Content',
            templateUrl: 'content.html',
            resolve: getResolve(feedType.SUBSCRIPTIONS)
        })
        .when('/items/starred', {
            controller: 'ContentController as Content',
            templateUrl: 'content.html',
            resolve: getResolve(feedType.STARRED)
        })
        .when('/items/feeds/:id', {
            controller: 'ContentController as Content',
            templateUrl: 'content.html',
            resolve: getResolve(feedType.FEED)
        })
        .when('/items/folders/:id', {
            controller: 'ContentController as Content',
            templateUrl: 'content.html',
            resolve: getResolve(feedType.FOLDER)
        })
        .otherwise({
            redirectTo: '/items'
        });

});

