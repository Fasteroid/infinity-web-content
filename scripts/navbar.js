
// thx stackoverflow - code below based on https://stackoverflow.com/a/31837264/15204995
// now with less JQuery since I'm a vanilla purist!
function prepNavbar(){
    var extractURL = /[^\/]*$/;
    var pages = document.querySelector("#pages");
            
    var url = window.location.href.match(extractURL)[0]; // I'd be a fool to recompute this repeatedly in the for loop

    url == "" ? url = "index.html" : 0; // fix bug that's been here for ages

    for(var i=0; i<pages.children.length; i++){
        var page = pages.children[i];
        // check normal links
        var type = page.getAttribute("class");
        var href = page.getAttribute("href")
        if( type==null && href && href.match(extractURL)[0] == url ){ // null safety
            page.classList.add("cwd");
            return; // there can only be one
        }

        // check dropdowns
        if( type!=null ){
            var subpages = page.querySelector(".dropdown-content");
            if(subpages){
                subpages = subpages.children
            }

            var header = page.querySelector(".dropdown-head");

            var headerhref = header.querySelector("a")
            var headerrefhref = null;

            if( headerhref != null ){
                headerrefhref = headerhref.getAttribute("href")
            }

            if( headerrefhref && headerrefhref.match(extractURL)[0] == url ){
                header.classList.add("cwd");
                return;
            }

            if(!subpages) continue;

            for(var j=0; j<subpages.length; j++){
                var subpage = subpages[j];
                var subpagehref = subpage.getAttribute("href");
                if( subpagehref && subpagehref.match(extractURL)[0] == url ){
                    subpage.classList.add("cwd");
                    header.classList.add("cwd");
                    return; // there can only be one
                }
            }
        }
    }
    //if( window.navigator.userAgent.match('Awesomium') ){
        flexibility(document.documentElement)
    //}
}
window.addEventListener("DOMContentLoaded",prepNavbar)
