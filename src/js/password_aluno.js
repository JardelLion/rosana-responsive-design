const show = document.querySelectorAll('.open-eye');
const hide = document.querySelectorAll('.close-eye');

const password = document.querySelector('#student-password');
const confirmPassword = document.querySelector('#student-confirm-password');

show.forEach(icon =>{
    icon.style.display = 'block';
})



show[0].addEventListener('click', function(){
    
    if(password.value != ''){

        show[0].style.display = 'none';

        if((password.type =='password')){
            password.type = 'text';
            hide[0].style.display = 'block';
        }

    }
    
   
})

hide[0].addEventListener('click', function(){

    if(password.value != ''){
        hide[0].style.display = 'none';

        if((password.type =='text')){
            password.type = 'password';
            show[0].style.display = 'block';
        }

    }

   
   
})







show[1].addEventListener('click', function(){
    
    if(confirmPassword.value != ''){

        show[1].style.display = 'none';

        if((confirmPassword.type =='password')){
            confirmPassword.type = 'text';
            hide[1].style.display = 'block';
        }

    }
    
   
})

hide[1].addEventListener('click', function(){

    if(confirmPassword.value != ''){
        hide[1].style.display = 'none';

        if((confirmPassword.type =='text')){
            confirmPassword.type = 'password';
            show[1].style.display = 'block';
        }

    }

   
   
})


