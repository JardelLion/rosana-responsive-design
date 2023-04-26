const acessPassword = document.querySelector('.access__password');
const show = document.querySelector('.open-eye');
const hide = document.querySelector('.close-eye');


show.style.display = 'block';

// acessPassword.addEventListener('click', function(){
//     

// });



show.onclick = function(){
    if((acessPassword.type == 'password')){
        acessPassword.type = 'text';
        show.style.display = 'none';
        hide.style.display = 'block';

    }

}


hide.onclick = function(){
    hide.style.display = 'none';
    show.style.display = 'block';
    acessPassword.type = 'password';
}

