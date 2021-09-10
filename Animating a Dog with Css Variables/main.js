const dog = document.querySelector('.dog');

let x = 0;
let y = 0;
let rotate = 0;
let rotateY = 0;
let speed = 10;

function handleKeyDown (event) {
  const number = Number(event.key); 

   if (event.key.includes('Arrow')) {
     switch (event.key) {
      case 'ArrowUp' : y = y - 1, rotate = -90, rotateY = 0;
      break;
      case 'ArrowDown' : y = y + 1, rotate = 90, rotateY = 0;
      break;
      case 'ArrowLeft' : x = x - 1, rotate = 0, rotateY = -180;
      break;
      case 'ArrowRight' : x = x + 1, rotate = 0, rotateY = 0;
      break;
      default:
        break;
    }
    dog.setAttribute('style',`--x: ${x * speed}px; --y: ${y * speed}px; --rotate: ${rotate}deg; --rotateY: ${rotateY}deg;`);
  } 
     
    switch (number) {
       case 0 : speed = 10;
       break;
       case 1 : speed = 20;
       break;
       case 2 : speed = 30;
       break;
       case 3 : speed = 40;
       break;
       case 4 : speed = 50;
       break;
       case 5 : speed = 60;
       break;
       case 6 : speed = 70;
       break;
       case 7 : speed = 80;
       break;
       case 8 : speed = 90;
       break;
       case 9 : speed = 100;
       break;
       default:
       break;    
      }  
}



window.addEventListener('keydown', handleKeyDown)






