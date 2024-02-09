
self.addEventListener("fetch", function (event) {
  const offlineResponse = fetch("pages/Offline.html")
 
  
    const resp = fetch(event.request);
    event.respondWith(resp.catch(() => offlineResponse));
  
    event.respondWith(resp);
  });

