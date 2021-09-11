const clap = document.querySelector('.clap audio')
const hihat = document.querySelector('.hihat audio')
const kick = document.querySelector('.kick audio')
const openhat = document.querySelector('.openhat audio')
const boom = document.querySelector('.boom audio')
const ride = document.querySelector('.ride audio')
const snare = document.querySelector('.snare audio')
const tom = document.querySelector('.tom audio')
const tink = document.querySelector('.tink audio')


function handleKeyDown (event) {
  switch (event.key) {
    case 'a' : clap.play(), clap.closest('div').classList.add('large');
     break;
    case 's' : hihat.play(), hihat.closest('div').classList.add('large');
     break;
    case 'd' : kick.play(), kick.closest('div').classList.add('large');
     break;
    case 'f' : openhat.play(), openhat.closest('div').classList.add('large');
     break;
    case 'g' : boom.play(), boom.closest('div').classList.add('large');
     break;
    case 'h' : ride.play(), ride.closest('div').classList.add('large');
      break;
    case 'j' : snare.play(), snare.closest('div').classList.add('large');
      break;
    case 'k' : tom.play(), tom.closest('div').classList.add('large');
      break;
    case 'l' : tink.play(), tink.closest('div').classList.add('large');
      break;
    default:
      break;
  }
}

function handleKeyUp (event) {
  switch (event.key) {
    case 'a' :  clap.closest('div').classList.remove('large');
     break;
    case 's' : hihat.closest('div').classList.remove('large');
     break;
    case 'd' :  kick.closest('div').classList.remove('large');
     break;
    case 'f' : openhat.closest('div').classList.remove('large');
     break;
    case 'g' :  boom.closest('div').classList.remove('large');
     break;
    case 'h' :  ride.closest('div').classList.remove('large');
      break;
    case 'j' : snare.closest('div').classList.remove('large');
      break;
    case 'k' : tom.closest('div').classList.remove('large');
      break;
    case 'l' :  tink.closest('div').classList.remove('large');
      break;
    default:
      break;
  }
}
document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)

