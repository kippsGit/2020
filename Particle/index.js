window.onload = function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/2020/Particle/sw.js')
			.then(function (registration) { 
				console.log("Service Worker Registered"); 
				getHtmlElements("#updateAppController").onclick = function(){
					document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
					registration.unregister();
					location.reload();
				}
			});
	}
}
