if( !window.navigator.userAgent.match('Awesomium') ){
    console.log("User is not on Awesomium! :D")
    let styles = document.head.querySelectorAll('link[rel="stylesheet"]')
    for( let style of styles ){
        if( style.href.match("awesomium") ){
            console.log("Removed stylesheet: " + style.href)
            style.remove()
        }
    }
}

console.openURL = function(url){
    window.open(url, "_blank");
}