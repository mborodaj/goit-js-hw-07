const inputForm = document.getElementById('validation-input');

inputForm.addEventListener('blur', onInputBlur)

function onInputBlur() {
    inputForm.value.length === 6 ? inputForm.setAttribute('class', 'valid') : inputForm.setAttribute('class', 'invalid')
}