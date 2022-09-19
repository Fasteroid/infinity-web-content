const tips = [
    "As a hunter, spotting a prop awards you 20 points.",
    "Upon being spotted, props automatically play a 'fear' taunt.",
    "Don't like spotting with G? Bind <code>ph_spot</code> to something else!",
    "As a prop, you can access the prop chooser with <code>F4</code>.",
    "Don't like using F4 for the prop menu? Bind <code>phe_access_propchoose</code> to something else.",
    "The Broom pushes props in an area of effect and is good for sweeping rooms.",
    "The Jump Pack increases your jump height brings new possibilities within reach.",
    "Longer taunts reward more points per second than short ones.",
    "You can bind specific taunts to keys with the concommand <code>ph_taunt</code>.",
    "As a hunter, you may hear nearby props using voice chat. &nbsp;You can use this to track them down!",
    "As a prop, nearby hunters can hear you using voice chat in stereo. &nbsp;Be aware that they may use this to find you!"
];

const choice = Math.floor(Math.random()*tips.length);

window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("motd").innerHTML = tips[choice];
});