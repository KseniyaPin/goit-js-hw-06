'use strict';

const counterValue = document.querySelector('#value');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');

buttonPlus.addEventListener('click', onPlusClick);
buttonMinus.addEventListener('click', onMinusClick);

let count = 0;

function onPlusClick(evt) {
  count += 1;
  counterValue.textContent = `${count}`;
}

function onMinusClick(evt) {
  count -= 1;
  counterValue.textContent = `${count}`;
}
