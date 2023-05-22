'use strict';

const inputRangeEl = document.querySelector('#font-size-control');
const spanSizeText = document.querySelector('#text');

inputRangeEl.addEventListener('input', evt => {
  spanSizeText.style.fontSize = `${evt.target.value}px`;
});
