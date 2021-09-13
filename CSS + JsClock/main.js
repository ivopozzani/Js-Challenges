const run = setInterval(runClock, 1000);

function runClock(){
const timeMs = Date.now();
const sec = Math.floor(timeMs/1000);
const min = Math.floor(sec/60);
const hour = Math.floor(min/60);

const secHand = document.querySelector('.sec');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

 secHand.setAttribute('style', `transform: rotate(${sec*6}deg);`);
 minHand.setAttribute('style', `transform: rotate(${min*6}deg);`);
 hourHand.setAttribute('style', `transform: rotate(${hour*6}deg);`);
}


