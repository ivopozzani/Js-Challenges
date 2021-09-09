const dog = document.querySelector('.dog');

let x = 0;
let y = 0;
const speed = 10;

function handleKey (event) {
   if (event.key.includes('Arrow')) {
     switch (event.key) {
      case 'ArrowUp' : y = y - 1;
      break;
      case 'ArrowDown' : y = y + 1;
      break;
      case 'ArrowLeft' : x = x - 1;
      break;
      case 'ArrowRight' : x = x + 1;
      break;
      default:
        break;
    }
    dog.setAttribute('style',`--x: ${x * speed}px; --y: ${y * speed}px;`);   

  } else {
  console.log('Not apropriate key')}
}

window.addEventListener('keydown', handleKey)






