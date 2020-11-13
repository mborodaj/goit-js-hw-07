const inputForm = document.getElementById('name-input');
let label = document.getElementById('name-output');

inputForm.addEventListener('input', onInputChange);

function onInputChange() {
    inputForm.value !== "" ? label.textContent = inputForm.value : label.textContent = "незнакомец";
}