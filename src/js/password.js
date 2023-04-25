const pswrd_1 = document.querySelector('#pswrd_1');
const pswrd_2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector('.error-text');
const openEye = document.querySelector('.open-eye');
const closeEye = document.querySelector('.close-eye');

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
        openEye.style.display = 'block';
        openEye.onclick = function(){
            if((pswrd_2.type == 'password') && (pswrd_1.type == 'password')){
                pswrd_1.type = 'text';
                pswrd_2.type = 'text';
               closeEye.style.display = 'block';
               openEye.style.display = 'none';
            }
        }

        closeEye.onclick = function() {
            if((pswrd_2.type == 'text') && (pswrd_1.type == 'text')){
                pswrd_1.type = 'password';
                pswrd_2.type = 'password';
                openEye.style.display = 'block';
                closeEye.style.display = 'none'

            }
        }

    }
}