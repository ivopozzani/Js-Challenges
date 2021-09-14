const secHand = document.querySelector('.sec');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function runClock(){
  
const timeMs = new Date();
const sec = timeMs.getSeconds();
const min = timeMs.getMinutes();
const hour = timeMs.getHours();

secHand.style.transform = `rotate(${(sec*6) + 90}deg)`
minHand.style.transform = `rotate(${(min*6) + 90}deg)`
hourHand.style.transform = `rotate(${(hour*30) + 90}deg)`
}

setInterval(runClock, 1000);
