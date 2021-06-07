window.addEventListener("keydown", function(e){
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
});
