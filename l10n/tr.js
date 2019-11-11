OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "İstek karşılanamadı. Ağ bağlantısı kullanılamıyor!",
    "Request unauthorized. Are you logged in?" : "İstek için yeterli izin yok. Oturumunuz açık mı?",
    "Request forbidden. Are you an admin?" : "İstek reddedildi. Bir yönetici misiniz?",
    "Token expired or app not enabled! Reload the page!" : "Kodun süresi dolmuş ya da uygulama etkin değil! Sayfayı yenileyin!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Sunucu sorunu! Lütfen ayrıntılı bilgi almak için data/nextcloud.log dosyasına bakın!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "İstek karşılanamadı. Nextcloud şu anda bakım kipinde!",
    "Can not add feed: Exists already" : "Akış eklenemedi: Zaten var",
    "Articles without feed" : "Akışı olmayan makaleler",
    "Can not add folder: Exists already" : "Klasör eklenemedi: Zaten var",
    "News" : "Haberler",
    "An RSS/Atom feed reader" : "Bu uygulama RSS/Atom akışlarının okunmasını sağlar",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "Haberler uygulaması Nextcloud için çeşitli mobil aygıtlar ile eşitlenebilen bir RSS/Atom akış okuyucusudur. Kullanılabilecek tüm istemcilerin listesi ve gereksinimler [README dosyasında](https://github.com/nextcloud/news) görülebilir.\n\nYeni bir sürüme güncellemeden önce sürprizlerle karşılaşmamak için [değişiklik günlüğüne bakın](https://github.com/nextcloud/news/blob/master/CHANGELOG.md).\n\n**Önemli**: Akış güncellemelerini alabilmek için bir [Nextcloud sistem zamanlanmış görevi](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) ya da iç güncelleme API uygulamasını kullanan ve zamanlanmış görev güncellemelerini devre dışı bırakan [bir güncelleyici](https://github.com/nextcloud/news-updater) kullanmalısınız. Ayrıntılı bilgi almak için [README dosyasına](https://github.com/nextcloud/news) bakabilirsiniz.",
    "Use system cron for updates" : "Güncellemeler için sistem zamanlanmış görevi kullanılsın",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Uygulamayanın içnde bulunan Python güncelleyicisi gibi bir özel güncelleyici çalıştırıyorsanız bu seçeneği devre dışı bırakın",
    "Purge interval" : "Temizleme Aralığı",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Silinen akış ve klasörlerin, veritabanından kaldırılacağı en kısa süre; 60 saniye altındaki süreler yok sayılır",
    "Maximum read count per feed" : "Bir akış için en fazla okuma sayısı",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Temizleme görevi tarafından silinmeyecek, bir akış için okunabilecek en fazla makale sayısını belirtir. Eski makaleler okunduktan sonra yeniden görüntüleniyorsa bu değeri arttırın. -1 gibi negatif değerler bu özelliği kapatır",
    "Maximum redirects" : "En fazla yönlendirme",
    "How many redirects the feed fetcher should follow" : "Akış getiricinin izleyeceği yönlendirme sayısı",
    "Maximum feed page size" : "En büyük akış sayfa boyutu",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Bayt cinsinden en büyük akış boyutu. RSS/Atom sayfası bu değerden daha büyükse, güncellemeden vazgeçilir",
    "Feed fetcher timeout" : "Akış alma zaman aşımı",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Bir RSS ya da Atom akışının yüklenmesi için beklenecek en fazla süre. İşlem bu süre içinde tamamlanmaz ise güncellemeden vazgeçilir",
    "Explore Service URL" : "Keşfetme Hizmeti Adresi",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Varsa, keşfetme bölümünde akışların görüntülenmesini sağlayacak hizmet adresi. İç keşfetme hizmeti için bu alanı boş bırakın",
    "For more information check the wiki" : "Ayrıntılı bilgi almak için wiki sayfasına bakın",
    "Saved" : "Kaydedildi",
    "Download" : "İndir",
    "Close" : "Kapat",
    "filter" : "süzgeç",
    "Language" : "Dil",
    "Subscribe" : "Abone ol",
    "Got more awesome feeds? Share them with us!" : "Harika akışlarınız mı var? Bizimle de paylaşın!",
    "No articles available" : "Henüz bir makale yok",
    "No unread articles available" : "Okunmamış bir makale yok",
    "Open website" : "Web sitesini aç",
    "Star article" : "Makaleye yıldız koy",
    "Unstar article" : "Makalenin yıldızını kaldır",
    "Keep article unread" : "Makaleyi okunmamış olarak bırak",
    "Remove keep article unread" : "Makaleyi okunmamış olarak bırakma",
    "by" : "yazar",
    "from" : "kaynak",
    "Play audio" : "Sesi oynat",
    "Download audio" : "Sesi indir",
    "Download video" : "Görüntüyü indir",
    "Keyboard shortcut" : "Tuş takımı kısayolu",
    "Description" : "Açıklama",
    "right" : "sağ",
    "Jump to next article" : "Sonraki makaleye geç",
    "left" : "sol",
    "Jump to previous article" : "Önceki makaleye geç",
    "Toggle star article" : "Makale yıldızını değiştir",
    "Star article and jump to next one" : "Makaleyi yıldızla ve sonrakine geç",
    "Toggle keep current article unread" : "Geçerli makalenin okunmamış olarak işaretle/kaldır",
    "Open article in new tab" : "Makaleyi yeni sekmede aç",
    "Toggle expand article in compact view" : "Sıkışık görünümde makaleyi genişlet/daralt",
    "Refresh" : "Yenile",
    "Load next feed" : "Sonraki akışı yükle",
    "Load previous feed" : "Önceki akışı yükle",
    "Load next folder" : "Sonraki klasörü yükle",
    "Load previous folder" : "Önceki klasörü yükle",
    "Scroll to active navigation entry" : "Gezinti girişini etkinleştirmek için kaydırın",
    "Focus search field" : "Arama alanına odaklan",
    "Mark current article's feed/folder read" : "Geçerli makale akışını/klasörünü okunmuş olarak işaretle",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Ajax ya da Web zamanlanmış görev kipi algılandı! Akışlarınız güncellenmeyecek!",
    "How to set up the operating system cron" : "İşletim sistemi zamanlanmış görevi nasıl ayarlanır",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Haberler uygulamasının güncelleme API yazılımını kullanan daha hızlı bir paralel güncelleyici kurun ve ayarlayın",
    "Web address" : "Web adresi",
    "Feed exists already!" : "Akış zaten var!",
    "Folder" : "Klasör",
    "No folder" : "Klasör yok",
    "New folder" : "Yeni klasör",
    "Folder name" : "Klasör adı",
    "Go back" : "Geri dön",
    "Folder exists already!" : "Klasör zaten var!",
    "Credentials" : "Kimlik Doğrulama Bilgileri",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP Basic Auth kimlik doğrulama bilgilerinin şifrelenmemiş olarak depolanması gerektiğinden, sunucu ya da veritabanına erişimi olan herkes bu bilgilere erişebilir!",
    "Username" : "Kullanıcı adı",
    "Password" : "Parola",
    "New Folder" : "Yeni Klasör",
    "Create" : "Ekle",
    "Explore" : "Keşfet",
    "Update failed more than 50 times" : "Güncelleme 50 defadan fazla yapılamadı",
    "Deleted feed" : "Akış silindi",
    "Undo delete feed" : "Akışı geri al",
    "Rename" : "Yeniden adlandır",
    "Menu" : "Menü",
    "Mark read" : "Okunmuş olarak işaretle",
    "Unpin from top" : "Üstten Kaldır",
    "Pin to top" : "Üste Sabitle",
    "Newest first" : "Yeniden Eskiye",
    "Oldest first" : "Eskiden Yeniye",
    "Default order" : "Varsayılan Sıralama",
    "Enable full text" : "Tam metin kullanılsın",
    "Disable full text" : "Tam metin kullanılmasın",
    "Unread updated" : "Okunmamış güncellendi",
    "Ignore updated" : "Güncellemeleri yoksay",
    "Open feed URL" : "Akış adresini aç",
    "Delete" : "Sil",
    "Dismiss" : "İptal et",
    "Collapse" : "Daralt",
    "Deleted folder" : "Klasör silindi",
    "Undo delete folder" : "Klasör silmeyi geri al",
    "Starred" : "Yıldızlı",
    "Unread articles" : "Okunmamış makaleler",
    "All articles" : "Tüm makaleler",
    "Settings" : "Ayarlar",
    "Disable mark read through scrolling" : "Kaydırma sırasında okunmuş olarak işaretlenmesin",
    "Compact view" : "Sıkışık görünüm",
    "Expand articles on key navigation" : "Tuşla gezinme sırasında makaleler genişletilsin",
    "Show all articles" : "Tüm makaleleri görüntüle",
    "Reverse ordering (oldest on top)" : "Sıralamayı tersine çevir (Eskiden Yeniye)",
    "Subscriptions (OPML)" : "Abonelikler (OPML)",
    "Import" : "İçe aktar",
    "Export" : "Dışa Aktar",
    "Error when importing: File does not contain valid OPML" : "Dosya içe aktarılırken sorun çıktı: Dosyada geçerli bir OPML yok",
    "Error when importing: OPML is does neither contain feeds nor folders" : "İçe aktarma sırasında sorun çıktı: OPML içinde bir akış ya da dizin yok",
    "Unread/Starred Articles" : "Okunmamış/Yıldızlı Makaleler",
    "Error when importing: file does not contain valid JSON" : "İçe aktarma sırasında sorun çıktı: Dosyada geçerli JSON yok",
    "Help" : "Yardım",
    "Keyboard shortcuts" : "Tuş takımı kısayolları",
    "Documentation" : "Belgeler",
    "Report a bug" : "Hata bildirin"
},
"nplurals=2; plural=(n > 1);");
