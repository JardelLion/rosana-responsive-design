//button do modulo
let btnModulo = document.querySelector('#btn-modulo')

//context do modulo
let moduloContext = document.querySelector('.versionamento-context ol');


//button do resultado
let btnResultado = document.querySelector('#btn-resultado');

//context do resultado

let resultadoContext = document.querySelector('.resultado-context')



//btn da certificacao
btnCertificacao = document.querySelector('#btn-certificacao');

//context da certificacao
let certificacaoContext = document.querySelector('.certificacao-context');


moduloContext.style.display = 'block';
changeBorderButton(btnModulo, 'add')


btnModulo.addEventListener('click', () => {
    if(moduloContext.style.display == 'none'){
        changeBorderButton(btnModulo, 'add');
        moduloContext.style.display = 'block';


        //desactivar o resultado context e os seus estilos
        resultadoContext.style.display = 'none';
        changeBorderButton(btnResultado, 'remove')

        //desactivar o certificacao do context e os seus estilos
        certificacaoContext.style.display = 'none';
        changeBorderButton(btnCertificacao, 'remove')
    }else {
        moduloContext.style.display = 'none';
        changeBorderButton(btnModulo, 'remove');
    }
    
});






function changeBorderButton(btn, state){
    if(state == 'add'){
        btn.style.borderBottom = '7px solid #8c90dd';

    }
    else {
        if(state == 'remove'){
            btn.style.borderBottom = 'none';
        }
    }
    

}











//btn resultado

btnResultado.addEventListener('click', () => {
    if(resultadoContext.style.display == 'none'){
        changeBorderButton(btnResultado, 'add');
        resultadoContext.style.display = 'block';


        //desactivar o modulo context e os seus estilos
        moduloContext.style.display = 'none';
        changeBorderButton(btnModulo, 'remove')

        //desactivar o certificacao do context e os seus estilos
        certificacaoContext.style.display = 'none';
        changeBorderButton(btnCertificacao, 'remove')

    }else {
        resultadoContext.style.display = 'none';
       
        changeBorderButton(btnResultado, 'remove');

    }
})



//btn certificacao

btnCertificacao.addEventListener('click', () => {
    if(certificacaoContext.style.display == 'none'){
        changeBorderButton(btnCertificacao, 'add');
        certificacaoContext.style.display = 'block';


        //desactivar o modulo context e os seus estilos
        moduloContext.style.display = 'none';
        changeBorderButton(btnModulo, 'remove')


        //desactivar o resultado do context e os seus estilos
        resultadoContext.style.display = 'none';
        changeBorderButton(btnResultado, 'remove')



    }else {
        certificacaoContext.style.display = 'none';
       
        changeBorderButton(btnCertificacao, 'remove');

    }
})


