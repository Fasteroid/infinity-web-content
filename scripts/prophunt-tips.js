const tips = [
    "As a hunter, spotting a prop awards you 50 points.",
    "Upon being spotted, props automatically play a 'fear' taunt.",
    "Don't like spotting with F4? Bind <code>ph_spot</code> to something else!"
];

const choice = Math.floor(Math.random()*tips.length);

window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("motd").innerHTML = tips[choice];
});