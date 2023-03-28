let closeIcon = document.querySelector("#icon-confirmed");
let startCourseCl = document.querySelector(".start-course-cl");

let closeModal = document.querySelector('.closemodal');

closeIcon.addEventListener('click', () => {
    startCourseCl.style.display = 'none';
});

closeModal.addEventListener('click', () => {
    
    
    startCourseCl.style.display = 'none';
});


