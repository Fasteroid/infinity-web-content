const tips = [
    "`I = I + 1` can also be written as `I++` if you're in a rush.",
    "Using `#include` in your `if(first())` only runs your include on the first tick.",
    "`foreach(ID:string...)` lets you look at the string indexes of table entries as you iterate.",
    "`propSpawnASync()` allows you to spawn up to 60 props per second!",
    "Use `players()` instead of `findByClass(\"player\")`",
    "You can use `break` at any time to exit a loop.",
    "Functions end at `return` statements and do not run remaining code.",
    "E2's file functions work best with `runOnFile(1)`",
    "Overcomplication is a precursor to enginuity.",
    "`print()` and `printTable()` are your best friends for debugging E2.",
    "Copy-pasting lots of code? Try defining a `function` to neaten your code.",
    "The less hardcoded values you use, the better.",
    "`Entity[\"value\",type]` can store and retrieve values for any `type` except `array` and `table`",
    "`Ent:applyForce(TargetPos - Ent:pos())` will push `Ent` towards `TargetPos`.",
    "You can map a grid to a sphere by treating `pitch` and `yaw` as `Y` and `X` respectively.",
    "`local` lets you limit a variable's existence to the curly brackets it's contained within.",
    "In complex `if` statements, check the easy-to-compute things first for a perf boost.",
    "Variables in `@persist` remember their values between e2 executions.",
    "`setName()` can be used to add realtime debug information to an E2's name tooltip.",
    "Never be afraid to check the e2helper for documentation!",
    "Hitting tick quota?&nbsp; Break up your `for` and `foreach` loops to run over multiple ticks.",
    "Any vector with a length of 1 is called a unit vector. &nbsp;They're good for storing direction.",
    "Dot product is a great way to compare unit vectors: if the two directly oppose, you'll get `-1`, and if they coincide, you'll get `1`.",
    "Cross product gives a vector perpendicular to two others. &nbsp;The length of the result describes how perpendicular the first two are.",
    "Always comment your code!&nbsp; You'll forget how it works much sooner than you think you will.",
    "`X = (X+1) % Max` will cycle `X` through values `0 '&lt;'= X '&lt;' Max`",
    "Arrays or tables within tables need to be initially defined before you can write values to them.",
    "`Table2 = Table1` will cause changes in one table to affect the other. `Table2 = Table1:clone()` will stop this.",
    "Just because you can crash the server with E2 doesn't mean you should.",
    "Accidentally abandoned your E2 code?&nbsp; Check this server's special <code>autosave</code> folder for it!",
    "Tables can store other tables. &nbsp;Arrays cannot.",
    "The syntax for accessing tables is `Table[\"index\",type]`. &nbsp`\"index\"` can be a number or string.",
    "The syntax for `foreach` loops is `foreach(ID,Object:type=SomeTableOrArray)`.",
    "The syntax for `for` loops is `for(Start=1,End,Increment)`. &nbsp`Increment` is an optional parameter.",
    "Dividing by zero is not forbidden, but strongly discouraged.",
    "`error()` can be used to shut down an E2 with a custom error message.",
    "Instead of `@persist A:entity B:entity C:entity`, use `@persist [A B C]:entity`. &nbspIt looks neater!",
    "`function foo( [A B C]:entity )` looks better than `function foo( A:entity, B:entity, C:entity )`",
    "Nothing's stopping you from defining `function number entity:distance(That:entity)`",
    "Use `ran‍gerWhitelist(1)` to only hit entities passed through `ran‍gerFilter()`.",
    "Not sure how to implement a feature?  Find something else that has that feature and copy it.",
    "When removing sequential array or table entries in a loop, iterate end-to-beginning, and not beginning-to-end.",
    "`inf()` can be a powerful boolean logic tool when used correctly.",
    "Yes you can!&nbsp; Nothing is impossible!&nbsp; JUST... DO IT!",
    "Getting gimbal lock?&nbsp Try a quaternion.",
    "Somebody once told me `entity:makeSpherical(Radius)` was gonna roll me.",
    "Only fools compute the same thing twice. &nbspStick it in a variable if you know you'll need it later.",
    "The `@model` directive can be used to explicitly define what model the in-game chip should use.",
    "Quaternions have the best traits of both angles and directional vectors.",
    "<code>https://github.com/adosikas/wire/wiki/E2:-Physics</code> has some useful information.",
    "Passing negative values to `holoScale()` can turn models inside-out in interesting ways.",
    "`holoParent()` your holos once instead of calling `holoPos()` every tick. &nbsp;It saves performance AND looks better!",
    "Provided `Input` is in `@inputs` or `@outputs`, `if(->Input)` will trigger when `Input` gets connected.",
    "Provided `Input` is in `@inputs`, `if(~Input)` will trigger ONCE each time `Input` is activated.",
    "Prefix any number in E2 with `0x` to write a hexidecimal value instead of a base-10 value.",
    "Prefix any number in E2 with `0b` to write a binary value instead of a base-10 value.",
    "Use `continue` anywhere in a loop to immediately skip to the next iteration.",
    "When using `holoClip`, don't forget to enable the clip you just made with `holoClipEnabled`!",
    "`SomeVector[1] = 0` is similar to `SomeVector:setX(0)` but uses less OPS.",
    "`SomeAngle[3] = 0` is similar to `SomeAngle:setRoll(0)` but uses less OPS.",
    "E2 supports using square brackets to read from and write to angles/vectors: `VectorOrAngle[1] = X | Pitch`",
    "Starfall can interface with Wiremod, which means it can talk to E2.",
    "NaN is not equal to anything, not even itself!",
    "Algorithms are almost never language specific; only their implementations are!",
    "If you define `local send = net.send`, calling `send(stuff)` in Lua is slightly faster than `net.send(stuff)`",
    "Floating-point numbers lose precision as they get bigger. &nbsp;Don't stray too far from zero!",
    "Starfall is a better choice than E2 if you want to make each player see something different.",
    "Starfall can run both client and serverside. &nbsp;E2 only runs serverside.",
    "Hitting serverside CPU quotas? &nbsp;Try using Starfall to compute on your client!",
    "`positive()` is to `vector` as `abs()` is to `number`",
    "Don't forget, arrays in Lua and E2 start at index `1` and <i>not</i> index `0`.",
    "`foreach(K:string,V:type = Table)` is to E2 as <code>for K, V in pairs(Table)</code> is to Starfall.",
    "In Lua/Starfall, <code>ipairs</code> is faster than <code>pairs</code>, but only iterates numeric keys <code>1...N</code> without gaps.",
    "E2 now has `try/catch` blocks! You `throw` any type and catch it with `catch(Error:type){}`",
    "Mee++ is not a real language.",
    "Awesomium is not very awesome.",
    "<code>#ifdef a(a) ; semicolons in e2 what???</code> is valid Expression 2 syntax.",
    "E2 now allows storing functions in variables: `Lambda = function(){ print(\"epicness\") }`",
];

function replaceAll(input,oldtext,newtext){
  return input.split(oldtext).join(newtext)
}

function isLetter(txt){
  return ( txt.toUpperCase()!=txt || txt.toLowerCase()!=txt )
}

function isUppercase(txt){
  return (txt.toUpperCase()==txt && txt.toLowerCase()!=txt)
}
function isLowercase(txt){
  return (txt.toUpperCase()!=txt && txt.toLowerCase()==txt)
}

function isNumber(txt){
    return !isNaN(txt) && txt!=" "
}

function makeTypesOrange(txt){
	// TODO: fix ranger functions getting highlighted by this
	const types = [
    	"entity",
        "quaternion",
        "angle",
        "vector2",
        "vector4",
        "number",
        "bone",
        "array",
        "table",
        "ranger",
        "string",
        "vector",
        "matrix",
        "type"
    ];
    for( var n = 0; n < types.length; n++ ){

    	var type = types[n];
        txt = replaceAll( txt, type+"(", "DONT_TOUCH" );
        txt = replaceAll( txt, type, "<tname>"+type+"</tname>" );
        txt = replaceAll( txt, "DONT_TOUCH", type+"(" );        
        
    }
    return txt;
}

const directives = [
    "@name",
    "@inputs",
    "@outputs",
    "@persist",
    "@trigger",
    "@model"
];
function makeDirectivesYellow(txt){
    for( var n = 0; n < directives.length; n++ ){
    	var direc = directives[n];
        txt = replaceAll( txt, direc, "<direc>"+direc+"</direc>" );     
    }
    return txt;
}

function makeFunctionsBlue(txt){
    const explodedtext = txt.split("");
    var len = explodedtext.length;
    var stage = 0;
    var infunction = 0;
    var inquotes1 = false;
    var inquotes2 = false;
    for(var t=0;t<len;t++){
        var entry = explodedtext[t];
        if( (entry == "\"") && (!inquotes2) ){
            inquotes1 = !inquotes1;
            if( inquotes1 ){
                entry = "<string>" + entry;
            }
            else{
                entry = entry + "</string>";               
            }
            explodedtext[t] = entry;
            continue;
        }
        if( (entry == "'") && (!inquotes1) ){
            inquotes2 = !inquotes2;
            entry = ""; // hide this cheeky bastard
            explodedtext[t] = entry;
            continue;
        }
        if( !inquotes1 && !inquotes2 ){


            if( (stage==0) && (entry == "<") && (explodedtext[t+1]!=" ") ){ // html opening tag?
                stage++;
            }
            if( (stage==1) && (entry == ">") ){ // close of above tag?
                stage++;
            }
            if( (stage==2) && (entry == "<") ){ // html opening tag?
                stage++;
            }
            if( (stage==3) && (entry == ">") ){ // close of above tag?
                stage=0;
            }


            if( stage==0 ){
                if( infunction == 0 ){
                    if( isLowercase(entry) ){ // definitely a function
                        infunction = 1;
                        entry = "<func>" + entry;
                    }
                    if( isNumber(entry) ){ // number
                        infunction = 2;
                        entry = "<num>" + entry;
                    }
                }
                else if( !isLetter( entry ) && !isNumber(entry) ){ // found the end of the thing!
                    if( infunction == 1 ){
                        entry = "</func>" + entry; // close it off and continue
                    }
                    else if( infunction == 2 ){
                        entry = "</num>" + entry; // close it off and continue
                    }
                    infunction = 0;
                }
            }
            else if( infunction > 0 ){ // found the end of the function!
                if( infunction == 1 ){
                    entry = "</func>" + entry; // close it off and continue
                }
                else if( infunction == 2 ){
                    entry = "</num>" + entry; // close it off and continue
                }
                infunction = 0;
            }
        }
        explodedtext[t] = entry;
    }
    return explodedtext.join("")
}

function makeVariablesGreen(txt){
    var explodedtext = txt.split("");
    var len = explodedtext.length;
    var insideVariable = false;
    var outsideVariable = false;
    var prevInside = false;
    for(var t=0;t<len;t++){
        var entry = explodedtext[t];

        prevInside = insideVariable;

        if(!insideVariable){
            if(isLowercase(entry)){
                outsideVariable = true;
            }
            if(!isLetter(entry)){
                outsideVariable = false;
            }
        }

        if(!outsideVariable){
            if(isUppercase(entry)){
                insideVariable = true;
            }
            if(!isLetter(entry) & isNaN(entry)){
                insideVariable = false;
            }
        }

        if(insideVariable!=prevInside){
            if(!prevInside){
                entry = "<variable>"+entry;
            }
            if(prevInside){
                entry = "</variable>"+entry;
            }
        }

        explodedtext[t] = entry;

    }
    txt = explodedtext.join("");
    return txt;
}
  
function syntaxHighlight(txt){
    txt = replaceAll(txt,"foreach","___FOREACH");
    txt = replaceAll(txt,"for","<keyword>for</keyword>");
    txt = replaceAll(txt,"if","<keyword>if</keyword>");
    txt = replaceAll(txt,"while","<keyword>while</keyword>");
    txt = replaceAll(txt,"else","<keyword>else</keyword>");
    txt = replaceAll(txt,"break","<keyword>break</keyword>");
    txt = replaceAll(txt,"local","<keyword>local</keyword>");
    txt = replaceAll(txt,"function","<keyword>function</keyword>");
    txt = replaceAll(txt,"continue","<keyword>continue</keyword>");
    txt = replaceAll(txt,"return","<keyword>return</keyword>");
    txt = replaceAll(txt,"try","<keyword>try</keyword>");
    txt = replaceAll(txt,"throw","<keyword>throw</keyword>");
    txt = replaceAll(txt,"catch","<keyword>catch</keyword>");
    txt = replaceAll(txt,"#include","<keyword>#include</keyword>");
    txt = replaceAll(txt,"___FOREACH","<keyword>foreach</keyword>"); //do this to avoid for and foreach loops clashing
    txt = makeVariablesGreen(txt);
    txt = makeTypesOrange(txt);
    txt = makeDirectivesYellow(txt);
    txt = makeFunctionsBlue(txt); // has to be last
    return txt;
}

var choice = Math.floor(tips.length * Math.random());
var textMaster = tips[choice];
var texts = textMaster.split("`");
var limiters = ["<code>","</code>"];
var amt = texts.length - 1;
var text = "";

for(var i=0;i<amt;i++){
    
    text = texts[i];
    if(i%2==1){
      text = syntaxHighlight(text);
    }
  
  	text = text+limiters[i%2];
      
    texts[i] = text;   
}

window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("motd").innerHTML = texts.join("");
});