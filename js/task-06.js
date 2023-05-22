'use strict';

const formInputEl = document.querySelector('#validation-input');
const inputLengthEl = document.querySelector('input[data-length = "6"]');

formInputEl.addEventListener('blur', evt => {
  formInputEl.style.borderColor =
    evt.target.value.length == inputLengthEl.dataset.length
      ? '#4caf50'
      : '#f44336';
});
