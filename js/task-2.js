
const ingridientsList = document.getElementById('ingredients');

const createList = element => {
    const listOfIngridients = document.createElement('li');
    listOfIngridients.textContent = element;
    return listOfIngridients;
}

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = ingredients.map(createList)
ingridientsList.append(...elements)