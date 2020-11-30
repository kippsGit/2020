window.onload = function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/2020/Particle/sw.js')
			.then(function (registration) { 
				//console.log("Service Worker Registered"); 
				getHtmlElements("#updateAppController").onclick = function(){

					self.caches.keys().then(keys => {
						keys.forEach( key => console.log(key));
					    registration.unregister();
						location.reload();
					});

				}
			});
	}
}
