const myButton = document.getElementById('btnResult');
const numInput1 = document.querySelector('.num1')
const numInput2 = document.querySelector('.num2')


for(let el of [numInput1, numInput2]){
    el.addEventListener('input', function(event){
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/\D/g, '');
        event.target.value = inputValue;
        }
    )
}

function handleFocus() {
    console.log('Пользователь вошел в поле ввода');
    myButton.disabled = false; 
    setTimeout(()=>{
        myButton.disabled = true;
        console.log('Пользователь вышел в поле ввода'); 
    }, 5000);
  }


btnSign.onclick = function(){
    let signSelector = document.getElementById('sign-selector')
    signSelector.style.display = (signSelector.style.display === 'block') ? 'none' : 'block';

    let signs = document.querySelectorAll('.sign')
    for(let el of signs){
        el.onclick = ()=>{
            btnSign.innerHTML = el.innerHTML;
            btnSign.onclick();
        }
        
    }
}


btnResult.onclick = ()=>{
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
       
    let operator = btnSign.innerHTML;
    let result = document.getElementById('resultText');
    if (num1 != '' && num2 != '' && +num1 != NaN && +num2 != NaN){
        if (operator == '+') result.innerHTML = +num1 + +num2;
        else if (operator == '-') result.innerHTML = +num1 - +num2;
        else if (operator == '*') result.innerHTML = +num1 * +num2;
        else if (operator == '/') result.innerHTML = +num1 / +num2;
    }
    num1Global = num1;
    num2Global = num2;
        
  

}









