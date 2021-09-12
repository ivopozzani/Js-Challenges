let timeMs = Date.now();
let sec = Math.floor(timeMs/1000)
let min = Math.floor(sec/60)
let hour = Math.floor(min/60)
let timer = null
const secHand = document.querySelector('.sec')

function runClock () {
secHand.setAttribute('style', `transform: rotate(${sec*6}deg);`);}

function initClock (){
return setInterval(runClock(), 1000)}
  
initClock()