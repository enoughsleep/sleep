self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png","./src/script.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css","https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css"])
        })
    );
});
self.addEventListener("fetch", e=>{
   e.respondWith(
       caches.match(e.request).then(response => {
           return response || fetch(e.request);
       })
   );
});
