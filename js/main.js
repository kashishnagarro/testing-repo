// if('serviceWorker' in navigator){
//     // console.log("Service worker supported!");

//     // we have to load sw when windows load
//     // we will add eventlistener for window load and register our sw there
//     window.addEventListener('load', () =>{
//         navigator.serviceWorker.register('./sw-cached-site.js' ) 
//         .then( reg => console.log("SW registered"))
//         .catch( err => console.log(`Service worker: error: ${err}`))
//     })
// }

if('serviceWorker' in navigator){
    console.log("Service worker supported..!!");

    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('./sw-cached-site.js')
        .then( reg => console.log("sw registered successfully"))
        .catch( err => console.log(`error while registering service worker: ${err}`))
    })
}