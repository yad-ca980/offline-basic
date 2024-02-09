if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}
if(window.caches){
    // console.log("Soporta Cache")
    //Crear cache
    caches.open('test-1')
    caches.open('test-2')

    // caches.has('test-1').then(console.log)
    caches.delete('test-1').then(console.log)
    //Guardar archivos en el cache
//Caches es el mtdo
//cache 

    caches.open('cache-v1').then(cache =>{
        cache.add('/index.html')
        cache.addAll([
            "logo192.png",
            "logo512.png",
            "/pages/Oflime.html"
        ]).then(()=>{
             cache.delete('logo192.png')
        })
        cache.match('/index.html').then(res=>{
            res.text().then(console.log)
        })
     

    })
}
