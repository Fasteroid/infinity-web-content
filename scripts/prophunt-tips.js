const tips = [
    "As a hunter, spotting a prop awards you 20 points.",
    "Upon being spotted, props automatically play a 'fear' taunt.",
    "Don't like spotting with Q? Bind <code>ph_spot</code> to something else!",
    "As a prop, you can access the prop chooser with <code>F4.",
    "Don't like using F4 for the prop menu? Bind <code>phe_access_propchoose</code> to something else.",
    "The Broom pushes props in an area of effect and is good for sweeping rooms.",
    "The Jump Pack increases your jump height and opens up new possibilities."
];

const choice = Math.floor(Math.random()*tips.length);

window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("motd").innerHTML = tips[choice];
});