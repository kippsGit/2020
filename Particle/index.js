window.onload = function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/2020/Particle/sw.js')
			.then(function (registration) { 
				//console.log("Service Worker Registered"); 
				getHtmlElements("#updateAppController").onclick = function(){

					caches.open('Particle').then(function(cache) {
					  cache.delete('Particle').then(function(response) {
						registration.unregister();
						location.reload();
					  });
					})

				}
			});
	}
}
