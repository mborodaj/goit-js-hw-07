const decrementBtn = document.querySelector('.decrement-btn')
const incrementBtn = document.querySelector('.increment-btn')
let counterValue = document.getElementById('value')

decrementBtn.addEventListener('click', () => {
    counterValue.innerHTML = Number(counterValue.innerHTML) - 1
})

incrementBtn.addEventListener('click', () => {
    counterValue.innerHTML = Number(counterValue.innerHTML) + 1 
})


