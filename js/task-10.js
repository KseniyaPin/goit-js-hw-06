'use strict';

const formEl = {
  divBoxes: document.getElementById('boxes'),
  inputForm: document.querySelector('input[type="number"]'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
};

formEl.buttonCreate.addEventListener('click', createBoxes);

formEl.buttonDestroy.addEventListener('click', evt => {
  formEl.inputForm.value = '';
  formEl.divBoxes.innerHTML = '';
  sizeBox.heightBox = '30px';
  sizeBox.widthBox = '30px';
  console.clear();
});

// const amount = 0;

const sizeBox = {
  heightBox: '30px',
  widthBox: '30px',
};

function createBoxes(amount) {
  amount = Number(formEl.inputForm.value);

  if (amount >= formEl.inputForm.min && amount <= formEl.inputForm.max) {
    for (let i = formEl.inputForm.min; i <= amount; i++) {
      const heading = document.createElement('div');
      heading.style.width = sizeBox.widthBox;
      heading.style.height = sizeBox.heightBox;
      heading.style.backgroundColor = getRandomHexColor();
      // console.log(heading);

      sizeBox.heightBox = Number.parseInt(sizeBox.heightBox) + 10 + 'px';
      sizeBox.widthBox = Number.parseInt(sizeBox.widthBox) + 10 + 'px';

      formEl.divBoxes.append(heading);
    }
  } else {
    alert('Введіть значення від 1 до 100');
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
