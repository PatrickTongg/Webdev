'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const username = $('#username');
  const password = $('#password');

  // check user entries for validity
  let isValid = true;
  if (username.value == '') {
    username.nextElementSibling.textContent = '* This field is required';
    username.nextElementSibling.style.color = "red";
    username.nextElementSibling.style.fontWeight = "bolder";
    isValid = false;
  }else {
    username.nextElementSibling.textContent = '';
  }

  if (password.value == '') {
    password.nextElementSibling.textContent = '* This field is required.';
    password.nextElementSibling.style.color = "red";
    password.nextElementSibling.style.fontWeight = "bolder";
    isValid = false;
  } else {
    password.nextElementSibling.textContent = '';
  }

  // submit the form if all fields are valid
  if (isValid == true) {
    $('form').submit();
  }
};

const resetForm = () => {
  $('form').reset();
  $('#username').nextElementSibling.textContent = '*';
  $('#password').nextElementSibling.textContent = '*';
};

document.addEventListener('DOMContentLoaded', () => {
  $('#register').addEventListener('click', processEntries);
});
