const sliderRef = document.getElementById('font-size-control')
let label = document.getElementById('text');
console.log(label.innerText.fo);

sliderRef.addEventListener('input', onInputChange);

function onInputChange() {
    console.log(sliderRef.value)
    label.style.fontSize = `${sliderRef.value}px`    
}