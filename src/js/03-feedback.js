import throttle from "lodash.throttle";
const PUT_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input',throttle(onForm, 500));

form.addEventListener('submit', onSubmit);


const obj = JSON.parse(localStorage.getItem('feedback-form-state'))|| {};
form.elements.email.value = obj.email || '';
form.elements.message.value = obj.message || '';

function onForm (e){
    obj[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
    // console.log(obj);
}

function onSubmit(e) {
    e.preventDefault();
    console.log(obj);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}