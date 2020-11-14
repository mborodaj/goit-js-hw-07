const inputForm = document.querySelector('[type="number"]')
const formRender = document.querySelector('[data-action="render"]')
const formDestroy = document.querySelector('[data-action="destroy"]')

const inicialBox = document.querySelector('[id="boxes"]')

formRender.addEventListener('click', createBoxes);
formDestroy.addEventListener('click', () => {
    inicialBox.innerHTML = ""
})

function createBoxes() {
    let boxHeight = 30;
    let boxWidth = 30;  
    let boxArray = [];
    for (let i = 1; i <= inputForm.value; i++){
        boxHeight += 10
        boxWidth += 10

        const newBox = document.createElement('div');
        newBox.style.width = boxWidth + 'px'
        newBox.style.height = boxHeight + 'px'
        newBox.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
        newBox.setAttribute('class', 'innerBox')
        boxArray.push(newBox)
        
    }
  inicialBox.append(...boxArray)  
}

