/**
Реализовать разную валидацию полей формы. регулярку в датасет запихнуть и вытаскивать в цикле

Подробности и подсказки в конце видео js-3.
 */


window.addEventListener('load', function(){
    let myForm = document.forms["myForm"];
    let submitButton = document.getElementById('submitButton');

    for (let el of myForm.getElementsByTagName('input')){
        if (el.type == 'text') {
            for (let action of ['focus', 'blur']){
                el.addEventListener(action, ()=>{
                errorContent(el)
                })
            }
        }
    }
    
    myForm.addEventListener('submit', function(event){
        let flag = false;
        
        for (let el of event.target.elements){
            let error = errorsMessage[el.name]
            if (el.type === "text" && !(validate(error.regular, el.value))){
                errorContent(el, `${error.text}`, true)
            }
            else if (el.type === "text") {
                el.style.borderColor = "black";
                errorContent(el);
            }

        }

        for (let el of event.target.elements){
            if (el.type === "text" && !(validate(errorsMessage[el.name].regular, el.value))) {
                flag = false;
                break;
            }
            else flag = true;
        }

        if (!flag) event.preventDefault();;
    })
})


function validate(regular, value){
    return regular.test(value)
}


function errorContent(el, text='', color=false) {
    let box = el.closest('.form_input_box');
    let err_msg = box.querySelector('.err_msg');
    err_msg.innerHTML = text;
    color ? el.classList.add('err') : el.classList.remove('err');
    
}


const errorsMessage = {
    name : {
        text: 'имя должно содержать только буквы и пробелы', 
        regular: /^.{2,32}$/},
    phone: {
        text: 'телефон должен начинаться с 0 и содержит 10 цифр', 
        regular: /^0\d{9}$/},
    email: {
        text: 'email должен начинаться с "www." -> сиволы -> "@" -> символы -> "." -> символы', 
        regular: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/}
}


/**
btnAdd.addEventListener('click', function(){
		let div = document.createElement('div');
		div.classList.add('item');
		div.innerHTML = 'Text ' + (box.children.length + 1);
		div.addEventListener('click', changeColor);
		box.appendChild(div);
	});
 */