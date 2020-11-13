const listOfCategories = document.getElementById('categories');
const listOfItems = document.querySelectorAll('.item')

console.log(`В списке ${listOfCategories.children.length} категории`);
listOfItems.forEach(element => {
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`)

})






 