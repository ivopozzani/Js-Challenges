const spacing = document.querySelector('#spacing')
const blur = document.querySelector('#blur')
const baseColor = document.querySelector('#base-color')

function handleSpacing (e) {
  const newSpacing = e.target.value
  document.documentElement.style.setProperty('--translate', `${newSpacing}%`);
}

function handleBlur (e) {
  const newBlur = e.target.value
  document.documentElement.style.setProperty('--blur', `${newBlur}px`);
}

function handlebaseColor (e) {
  const newBaseColor = e.target.value
  document.documentElement.style.setProperty('--base-color', `${newBaseColor}`);
}

spacing.addEventListener('change', handleSpacing)
blur.addEventListener('change', handleBlur)
baseColor.addEventListener('change', handlebaseColor)



