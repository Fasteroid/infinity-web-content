const tips = [
    "It's a proven fact that acts of kindness make you happier!",
    "You're like, super awesome for checking this page out.",
    "Props Beyond Infinity has many inspirations from Robocraft. &nbsp;The pointshop multipliers for donators is one such inspiration.",
    "The Rapid-Fire Toolgun is canonically enchanted with <i>curse of donating</i>.",
    "Join & leave sounds were the first feature allocated to donators.",
    "PayPal sucks, but it's all I've got to work with.",
    "All this would be pointless if it weren't for you.",
];

const DONATE_URL_FRAGMENT = "https://www.paypal.com/donate/?cmd=_donations&business=398CBYZLDHVLU&item_name=Servers%20Beyond%20Infinity&no_recurring=1&custom="

function randomizeStarStyles(){

    const stylesheet = document.createElement("style");
    const webkit = window.navigator.userAgent.match('Awesomium') ? "-webkit-" : "";
    const stars = document.querySelectorAll(".star");

    var stylecontents = "";

    for (var i = 0; i < stars.length; i++) {

        var star = stars[i];
        star.setAttribute("data-id",i);

        var time = Math.round( (15 + Math.random()*5) * 128 );
        var rotation = Math.round( Math.random() * time ) / 128;
        time = time / 128;

        stylecontents += ( 
            "\n\
            .star[data-id='"+i+"']{\n\
                "+webkit+"animation: spin "+time+"s infinite linear;\n\
                "+webkit+"animation-delay: "+(-rotation)+"s\n\
            }\n\
            "
        );

    }

    stylesheet.innerHTML = stylecontents;
    document.head.appendChild(stylesheet);

}

var failtimer = -1;
var steamdetector;
var donatelink;

window.addEventListener("DOMContentLoaded",function(){

    const choice = Math.floor(Math.random()*tips.length);
    document.getElementById("motd").innerHTML = tips[choice];

    randomizeStarStyles();

    steamdetector = document.getElementById("steamdetector");
    donatelink = document.getElementById("donatelink")

    if( !window.gmod.requestSteamID ){
        failtimer = setTimeout( function(){
            steamdetector.classList.add("failure");
            donatelink.children[0].innerHTML = "no steam"
        });
        return
    };

    gmod.requestSteamID();

});

window.receiveSteamID = function(steamid){ // now chromium is giving me issues! AAHHHHH

    clearTimeout(failtimer);

    steamdetector.classList.add("success");
    steamdetector.children[0].innerHTML = "STEAM FOUND";
    steamdetector.children[1].innerHTML = "Your SteamID is <code>"+steamid +"</code><br>" +
    "You will automatically recieve donation rewards.";

    var url = DONATE_URL_FRAGMENT + encodeURI(steamid)

    donatelink.classList.add("success");
    donatelink.addEventListener("click",function(){ gmod.openURL(url) })

}

