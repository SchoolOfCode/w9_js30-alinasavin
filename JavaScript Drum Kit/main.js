
function playSound(e){
    //console.log(e);
    //console.log(e.keyCode);
    // use attribute selector to grab the data-key attribute audio[data-key]
    // grab the corresponding audio element for that specific key triggered by that event
const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
// select corresponding key for annimation
const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
// console.log(audio);
if(!audio) return; // stop the function from running if there is no audio found 
audio.currentTime = 0; // rewind to the start
audio.play();
// console.log(key);
key.classList.add("playing");
};
// transition end event - to create transition set in css at the press of the key and remove class playing 

function removeTransition(e){
// console.log(e);
if(e.propertyName !== "transform") return; // skip it if it is not a transform
//console.log(this); this is the key in this case ( what is eventListener is called for)
// remove class of playing after the 0.07s 
this.classList.remove("playing");
}
// grab all keys with the class of key
const keys = document.querySelectorAll(".key");
// listen for the transition event on each of the key part of the key array

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

