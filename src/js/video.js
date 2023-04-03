const videoPlayer = document.querySelector('.video__player');
const btnImagePlay = document.querySelector('.player-play--center');

const media = document.querySelector('video');

media.setAttribute('controlslist', 'nodownload');








videoPlayer.addEventListener('contextmenu', (event) =>{
    event.preventDefault();
})


btnImagePlay.addEventListener('click', () =>{
    if(media.paused){
        media.play();
        btnImagePlay.style.display = 'none';
    }
});

media.addEventListener('click', () =>{
    if(media.paused){
        media.play();
        btnImagePlay.style.display = 'none';
       
    }
    else if(media.played){
        media.pause();
        btnImagePlay.style.display = 'block';
      
    }
       
        
   
})

