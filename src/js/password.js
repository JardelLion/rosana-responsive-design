const pswrd_1 = document.querySelector('#pswrd_1');
const pswrd_2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector('.error-text')
const showBtn = document.querySelector('.show');

const btn = document.querySelector('.open-account__btn')


function active(){
    if(pswrd_1.value.length >= 6){
        btn.removeAttribute("disabled", '');
        btn.classList.add('active');
        pswrd_2.removeAttribute("disabled", '');
    } else {
        btn.setAttribute("disabled", '');
        btn.classList.remove('active');
        pswrd_2.setAttribute('disabled', '');
    }

}

btn.onclick = function() {
    if(pswrd_1.value != pswrd_2.value){
        errorText.style.display = 'block';
        errorText.classList.remove('matched');
        errorText.textContent = 'Error! Confirm password Not Matched'
        return false;
    } else {
        errorText.style.display = 'block';
        errorText.textContent = 'Good! Confirm password Matched'
        errorText.classList.add('matched');
        return false;
    }
}


function active_2(){
    if(pswrd_2.value != ''){
        showBtn.style.display = 'block';
        showBtn.onclick = function(){
            if((pswrd_2.type == 'password') && (pswrd_1.type == 'password')){
                pswrd_1.type = 'text';
                pswrd_2.type = 'text';
                this.textContent = 'HIDE'
                this.classList.add('active')
            }else{
                pswrd_1.type = 'password';
                pswrd_2.type = 'password';
                this.textContent = 'SHOW'
                this.classList.remove('active');

            }
        }

    }else {
        showBtn.style.display = 'none';

    }
}