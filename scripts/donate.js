const tips = [
    "It's a proven fact that acts of kindness make you happier!",
    "You're like, super awesome for checking this page out.",
    "Props Beyond Infinity has many inspirations from Robocraft. &nbsp;The gilded player bonus points system is one such inspiration.",
    "The Rapid-Fire Toolgun is canonically enchanted with <i>curse of donating</i>.",
    "Join & Leave sounds were the first feature allocated to donators.",
    "PayPal sucks, but it's all I've got to work with.",
    "All this would be pointless if it weren't for you."
];


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

window.addEventListener("DOMContentLoaded",function(){

    const choice = Math.floor(Math.random()*tips.length);
    document.getElementById("motd").innerHTML = tips[choice];

    //const stars = document.querySelectorAll(".star")
    randomizeStarStyles();

});

