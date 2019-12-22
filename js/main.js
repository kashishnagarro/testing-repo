if('serviceWorker' in navigator){
    // console.log("Service worker supported!");
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('../service-workers/sw-cached-pages.js') 
        .then( reg => console.log("SW registered"))
        .catch( err => console.log(`Service worker: error: ${err}`))
    })
}