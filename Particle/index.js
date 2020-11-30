window.onload = function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/2020/Particle/sw.js')
			.then(function (registration) { 
				//console.log("Service Worker Registered"); 
				getHtmlElements("#updateAppController").onclick = function(){

					window.parent.caches.delete("call").then(function(){
						registration.unregister();
						location.reload();
					})
				}
			});
	}
}
