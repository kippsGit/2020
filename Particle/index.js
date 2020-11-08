window.onload = function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/2020/Particle/sw.js')
			.then(function () { console.log("Service Worker Registered"); });
	}
}
