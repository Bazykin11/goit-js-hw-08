import throttle from "lodash.throttle";
const PUT_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input',throttle(onForm, 500));

form.addEventListener('submit', onSubmit);


const obj = JSON.parse(localStorage.getItem('feedback-form-state'))|| {};
// console.dir(form.elements.value);
form.elements.email.value = obj.email || '';
form.elements.message.value = obj.message || '';

function onForm (e){
    // console.log(e.target.value);
    // console.dir(e.target.name);
    obj[e.target.name] = e.target.value;
    // console.log(obj);
    localStorage.setItem('feedback-form-state', JSON.stringify(obj))
}

function onSubmit(e) {
    e.preventDefault();
    console.log('Отправка');
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}