var stops = [0,0.1,0.4,1];

var APPROACH_RATE = 0.01;
var INTERP_VALUE = 0;
var TARGET_VALUE = 0;

var WORKSHOP_PROGRESS = 0;
var INIT_PROGRESS = 0;
var LUA_PROGRESS = 0;

function computeTarget(){
    TARGET_VALUE = 
        0.1 * INIT_PROGRESS + 
        0.4 * WORKSHOP_PROGRESS + 
        0.4 * LUA_PROGRESS;
}

if( window.requestAnimationFrame === undefined ){ // stupid awesomium fix
    window.requestAnimationFrame = window.webkitRequestAnimationFrame;
}


var match_workshop = /(\d+)\/(\d+).*Loading/
var match_lua = /(\d+) of (\d+) Lua files/

var match;

function SetStatusChanged(status) {
    if( match = status.match(match_workshop) ){
        console.log(match[2]);
        WORKSHOP_PROGRESS = parseInt(match[1]) / parseInt(match[2]);
    }
    if( match = status.match(match_lua) ){
        LUA_PROGRESS = parseInt(match[1]) / parseInt(match[2]);
    }
    if( status = "Starting Lua..." ){
        LUA_PROGRESS = 1;
    }
}

function ease(steps){
    computeTarget();
    INTERP_VALUE = (INTERP_VALUE-TARGET_VALUE) * Math.pow(1-APPROACH_RATE, steps-1) + TARGET_VALUE;
}

function clamp(n,min,max){
    return n > max ? max : (n < min ? min : n);
}

var bgs = [];
for (var i = 0; i < 4; i++) {
    bgs[i] = document.getElementById(i);
}

var stops = [0,0.2,0.4,1];
var bg, range, fade; // awesomium sucks

function draw(progress){
    for (var i = 1; i < 4; i++) {
        bg = bgs[i];
        range = stops[i] - stops[i-1];
        fade = progress - stops[i-1];
        
        bg.style.opacity = clamp(fade/range,0,1);
    }
}

var prevstamp;
var inittimeout;

function step(timestamp) {

    if (prevstamp === undefined) {
        prevstamp = timestamp;
        //return;
    }

    var diff = timestamp - prevstamp;

    ease(diff*0.1);
    draw(INTERP_VALUE);

    prevstamp = timestamp;
    
    window.requestAnimationFrame(step);

}

setTimeout( function(){
    INIT_PROGRESS = 1;
    window.requestAnimationFrame(step);
}, 1000);