const inputForm = document.getElementById('validation-input');
console.log(inputForm.dataset.length);

inputForm.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (inputForm.value.length === Number(inputForm.dataset.length)) {
        inputForm.setAttribute('class', 'valid')
    } else { inputForm.setAttribute('class', 'invalid')
    }
}