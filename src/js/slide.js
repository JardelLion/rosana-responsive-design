var swiper1 = new Swiper("#swiper1", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });





  var swiper2 = new Swiper("#swiper2", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


// Adicione um ouvinte de eventos para o botão de próxima página de cada swiper
document.querySelector('.swiper1 .swiper-button-next').addEventListener('click', function() {
  swiper1.slideNext();
});

document.querySelector('.swiper2 .swiper-button-next').addEventListener('click', function() {
  swiper2.slideNext();
});


document.querySelector('.swiper1 .swiper-button-prev').addEventListener('click', function() {
  swiper1.slidePrev();
});

document.querySelector('.swiper2 .swiper-button-prev').addEventListener('click', function() {
  swiper2.slidePrev();
});





 var swiperInterval = setInterval(function(){
   swiper1.slideNext();

 }, 2000)


let swiper1Next = document.querySelector('.swiper1 .swiper-button-next');
let swiper1Prev = document.querySelector('.swiper1 .swiper-button-prev')

 swiper1Next.addEventListener('click', function() {
  // Para o intervalo quando o usuário clica no botão next
  clearInterval(swiperInterval);
  swiper1.slideNext();
    
});


 swiper1Prev.addEventListener('click', function() {
   // Para o intervalo quando o usuário clica no botão prev
   clearInterval(swiperInterval);
   swiper1.slidePrev();
  
 });



//second slide

 

 var swiperInterval2 = setInterval(function(){
  swiper2.slideNext();

}, 2000)


let swiper2Next = document.querySelector('.swiper2 .swiper-button-next');
let swiper2Prev = document.querySelector('.swiper2 .swiper-button-prev')

swiper2Next.addEventListener('click', function() {
 // Para o intervalo quando o usuário clica no botão next
 clearInterval(swiperInterval2);
 swiper2.slideNext();
   
});


swiper2Prev.addEventListener('click', function() {
  // Para o intervalo quando o usuário clica no botão prev
  clearInterval(swiperInterval2);
  swiper2.slidePrev();
 
});