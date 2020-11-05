navigator.serviceWorker.getRegistrations().then(function(registrations) {
 for(let registration of registrations) {
  registration.unregister()
} })

window.onload = function(){
	if('serviceWorker' in navigator) {
	  navigator.serviceWorker
	           .register('/2020/Particle/sw.js')
	           .then(function() { console.log("Service Worker Registered"); });
	}
}
