
function handleKeyDown(event){
  const keyCode = document.querySelectorAll(`[data-key="${event.keyCode}"]`)
  keyCode[0].classList.add('play')
  keyCode[1].currentTime = 0;
  keyCode[1].play()
}

function handleTransition (event){
  if (event.propertyName !== 'transform') return;
  this.classList.remove('play')
}

const key = document.querySelectorAll('.key')

key.forEach(key => key.addEventListener('transitionend', handleTransition))

window.addEventListener('keydown',handleKeyDown)