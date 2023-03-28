let searchDayImage = document.querySelector('.search-day label img')
let searchDayInput = document.querySelector('.search-day input')

searchDayInput.addEventListener('click', () => {
    searchDayImage.style.display = 'none';
})

//let altura = window.innerHeight
//|| document.documentElement.clientHeight
//|| document.body.clientHeight

let cardSellBoxInfoLink = document.querySelectorAll('.button-info');

let startCouseCl = document.querySelector('.start-course-cl');

for(var index = 0; index < cardSellBoxInfoLink.length; index++){
    cardSellBoxInfoLink[index].addEventListener("click", () => {
        startCouseCl.style.display = 'block';
        //startCouseCl.style.height = `${altura}px`;

        //console.log(`${altura}px`)
    
    })
}