const inputs = document.querySelectorAll('.flex input')

function handleChange () {
  const dataSize = this.dataset.size || '';

   document.documentElement.style.setProperty(`--${this.id}`, `${this.value}` + `${dataSize}`);  
}

inputs.forEach(input => (input.addEventListener('change', handleChange)))
inputs.forEach(input => (input.addEventListener('mousemove', handleChange)))