'use strict';

const bodyEL = document.querySelector('body');
const button = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

button.addEventListener('click', evt => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  bodyEL.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
});
