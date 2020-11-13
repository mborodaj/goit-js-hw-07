const sliderRef = document.getElementById('font-size-control')
let label = document.getElementById('text');

sliderRef.addEventListener('input', onInputChange);

function onInputChange() {
    label.style.fontSize = `${sliderRef.value}px`    
}