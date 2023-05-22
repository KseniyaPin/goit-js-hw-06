'use strict';

const listCategories = document.querySelector('#categories');
const childrenCategory = listCategories.children.length;
console.log('Number of categories:', childrenCategory);
console.log('');

const arrayItem = [...listCategories.children];

arrayItem.forEach(elem => {
  console.log('Category: ', elem.firstElementChild.textContent);
  console.log('Elements: ', elem.lastElementChild.children.length);
  console.log('');
});
