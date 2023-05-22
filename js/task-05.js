'use strict';

const formInputEl = document.querySelector('#name-input');
const userNameOutputEl = document.querySelector('#name-output');

formInputEl.addEventListener('input', evt => {
  userNameOutputEl.textContent =
    evt.target.value.length !== 0
      ? `${evt.target.value}`
      : 'Anonymous';
});
