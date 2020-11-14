const inputForm = document.getElementById('name-input');
let label = document.getElementById('name-output');

inputForm.addEventListener('input', onInputChange);

function onInputChange() {
    label.textContent = inputForm.value !== '' ? inputForm.value : "незнакомец"
}