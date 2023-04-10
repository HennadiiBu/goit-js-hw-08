import { throttle } from 'lodash';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const button = document.querySelector('button');

email.addEventListener('input', throttle(onInputEmail, 500));
message.addEventListener('input', throttle(onInputMessage, 500));
button.addEventListener('click', onSub);

const currentObj =
  JSON.parse(localStorage.getItem('feedback-form-state')) ?? '';
email.value = currentObj.email || '';
message.value = currentObj.message || '';

let resultObj = {
  email: currentObj.email || '',
  message: currentObj.message || '',
};

function onInputEmail() {
  resultObj.email = email.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(resultObj));
}

function onInputMessage() {
  resultObj.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(resultObj));
}

function onSub(event) {
  event.preventDefault();
  const localData = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(localData));
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
  resultObj = {};
}
//ggf
