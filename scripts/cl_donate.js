const tips = [
    "It's a proven fact that acts of kindness make you happier!",
    "You're like, super awesome for checking this page out.",
    "Props Beyond Infinity has many inspirations from Robocraft. &nbsp;The pointshop multipliers for donators is one such inspiration.",
    "The Rapid-Fire Toolgun is canonically enchanted with <i>curse of donating</i>.",
    "Join & leave sounds were the first feature allocated to donators.",
    "PayPal sucks, but it's all I've got to work with.",
    "All this would be pointless if it weren't for you.",
];

const DONATE_URL_FRAGMENT = "https://www.paypal.com/donate/?cmd=_donations&business=398CBYZLDHVLU&item_name=Servers%20Beyond%20Infinity&no_recurring=0&custom="

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

window.addEventListener("DOMContentLoaded",function(){

    const choice = Math.floor(Math.random()*tips.length);
    document.getElementById("motd").innerHTML = tips[choice];

    steamdetector = document.getElementById("steamdetector");
    failtimer = setTimeout( function(){

        if( !window.gmod ){
            steamdetector.classList.add("failure");
            return;
        };
        
    }, 1000 )

    gmod.requestSteamID();
    randomizeStarStyles();

});

window.receiveSteamID = function(steamid){ // now chromium is giving me issues! AAHHHHH

    clearTimeout(failtimer);

    steamdetector.classList.add("success");
    steamdetector.children[0].innerHTML = "STEAM FOUND";
    steamdetector.children[1].innerHTML = "Automatic donation rewards are almost ready!<br>" + 
    "Your SteamID is <code>"+steamid +"</code>";

    document.getElementById("donatelink").innerHTML = DONATE_URL_FRAGMENT + encodeURI(steamid); // just to be safe

}

