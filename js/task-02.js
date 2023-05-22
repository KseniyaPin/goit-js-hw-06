'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsTitle = document.querySelector('#ingredients');

const arrayIngredients = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredient;
  return listItemEl;
});

ingredientsTitle.append(...arrayIngredients);
console.log(ingredientsTitle);
