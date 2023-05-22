'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formDate = {
    mail,
    password,
  };

  if (mail !== '' && password !== '') {
    return console.log(formDate);
  }

  if (mail === '' || password === '') {
    return alert('Пожалуйста, заполните все поля!');
  }

  evt.target.reset();
}
