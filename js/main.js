window.onload =()=> {
    console.log('service');
    if('serviceWorker' in navigator){
        navigator.serviceWorker
            .register('./serviceWorker.js');
    }
}