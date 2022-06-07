
// thx stackoverflow - code below based on https://stackoverflow.com/a/31837264/15204995
// now with less JQuery since I'm a vanilla purist!

/* 
    THANKS TO KITSUME FOR HELPING ME BEAT AWESOMIUM INTO SUBMISSION
    https://github.com/Kitsumi
*/

function loadNavbar(){ // I miss my components script
    var xml = new XMLHttpRequest();
    xml.open( "GET", "../navbar.html", false ); // false for synchronous request
    xml.send( null );
    document.getElementById("navbar").innerHTML = xml.responseText;
}

function highlightNavbar(){
    var pages = document.getElementById("pages");

    var url = window.location.pathname; // I'd be a fool to recompute this repeatedly in the for loop

    url == "" ? url = "index.html" : 0; // fix bug that's been here for ages

    for(var i=0; i<pages.children.length; i++){
        var page = pages.children[i];

        // check normal links
        var type = page.getAttribute("class");
        if( type == null && page.pathname == url ){
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

            if( headerhref && headerhref.pathname == url ){
                header.classList.add("cwd");
                return;
            }

            if(!subpages) continue;

            for(var j=0; j<subpages.length; j++){
                var subpage = subpages[j];
                if( subpage && subpage.pathname == url ){
                    subpage.classList.add("cwd");
                    header.classList.add("cwd");
                    return; // there can only be one
                }
            }
        }
    }
}

function awesomiumPatch(){
    var width = (window.innerWidth - pages.offsetWidth - 38);
    var cursed = document.createElement("style")
    document.head.appendChild(cursed)
    cursed.innerHTML = "#home { width: " + width + "px !important; }"
    flexibility(document.documentElement);
}

function prepNavbar(){
    loadNavbar();
    highlightNavbar();
    if( window.navigator.userAgent.match('Awesomium') ){ // awesomium fixes
        if(window.first){ // set by lua, fixes weird offsets on first load
            setTimeout(awesomiumPatch, 125);
        }
        else{
            setTimeout(awesomiumPatch, 5);
        }
    }
}
window.addEventListener("DOMContentLoaded",prepNavbar)
