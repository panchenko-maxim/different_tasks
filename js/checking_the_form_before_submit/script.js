window.addEventListener('load', function() {
    let myForm = document.forms["myForm"];
    let submitButton = document.getElementById('submitButton');

    for (let el of myForm.getElementsByTagName('input')){
        if (el.type == 'text') {
            el.addEventListener('blur', ()=>{
                el.style.borderColor = '';
            })
        }
    }
    
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        let flag = false;
        
        for (let el of event.target.elements){
            if (el.tagName === "INPUT" && el.value == ''){
                el.style.borderColor = "red";
            }
            else el.style.borderColor = "black";
        }

        for (let el of event.target.elements){
            if (el.tagName === "INPUT" && el.value == '') {
                flag = false;
                break;
            }
            else flag = true;
        }

        if (flag == true) myForm.submit();
    })
})