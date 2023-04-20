const defaultBtn = document.querySelector('#default-btn');
const customBtn = document.querySelector('#custom-btn');
const fileName = document.querySelector('.file-name');
let regEx = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\, \$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;  //[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+%;

function active(){
    defaultBtn.click();
}

defaultBtn.addEventListener('change', function() {
    customBtn.classList.add('remove-pseudo');

    if(this.value){
        let nameValue = this.value.match(regEx);
        fileName.style.display = 'inline-block';
        fileName.textContent = nameValue;
    }
    else {
        fileName.style.display = 'inline-block';
        fileName.textContent = "No file chosen";

    }
})





const defaultBtn2 = document.querySelector('#default-btn2');
const customBtn2 = document.querySelector('#custom-btn2');
const fileName2 = document.querySelector('.file-name2');

function active2(){
    defaultBtn2.click();
}

if(defaultBtn2 !== null){
   
    defaultBtn2.addEventListener('change', function() {

        if(this.value){
            let nameValue = this.value.match(regEx);
            fileName2.style.display = 'inline-block';
            fileName2.textContent = nameValue;
        }
        else {
            fileName2.style.display = 'inline-block';
            fileName2.textContent = "No file chosen";
    
        }
    })
}
