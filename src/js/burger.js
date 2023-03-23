
function openNav(){

    let largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
    
   



    if(largura <= 791){
        document.getElementById('mySidebar').style.width = '100%';
        
        document.querySelector('.gray').style.display = 'none'

    }else{
        if(largura > 791 && largura <=930){
            document.getElementById('mySidebar').style.width = '51%';
            document.querySelector('.gray').style.width = '49%';
            document.querySelector('.gray').style.display = 'block'
    
        }else {
            document.getElementById('mySidebar').style.width = '34%';
            //document.getElementById('mySidebar').style.minWidth = '400px';
            document.querySelector('.gray').style.width = '66%';
            document.querySelector('.gray').style.display = 'block'
            
    
        }
    }

   

    
    document.querySelector('.openbtn').style.display = 'none';
   

    
}   



function closeNav(){
    

    document.getElementById("mySidebar").style.width = '0';
    document.querySelector('.openbtn').style.display = 'block';
    document.querySelector('.gray').style.display = 'none'
   
}



let gray_block = document.querySelector('.gray')



gray_block.addEventListener('click', function(){
    gray_block.style.display = 'none';
    closeNav();
})


