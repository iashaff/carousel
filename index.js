const slides = document.getElementsByClassName('carousel-item');
const prevBtn = document.getElementById('carousel-button-prev');
const nextBtn = document.getElementById('carousel-button-next');
const dots = document.getElementsByClassName('dots')
let slidePosition = 0;
const totalSlides = slides.length;

let timerId = setInterval(function moveSlide(){
    moveToNextSlide()
}, 2800) 

prevBtn.addEventListener('click', function () {
    clearInterval(timerId)
    moveToPrevSlide()
});

nextBtn.addEventListener('click', function () {
    clearInterval(timerId)
     moveToNextSlide()   
});



function hideAllSlides() {
    for (let slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
    for (let dot of dots){
        dot.classList.remove('active-dot')
        dot.classList.add('dots')
    }
}

function moveToNextSlide(){
    hideAllSlides()
    
    if(slidePosition === totalSlides -1){
         slidePosition = 0
    } else { 
        slidePosition++
        }
        dots[slidePosition].classList.toggle("active-dot")
      slides[slidePosition].classList.add('carousel-item-visible');  
}

function moveToPrevSlide() {
    hideAllSlides()
    
    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    dots[slidePosition].classList.toggle("active-dot")
    slides[slidePosition].classList.add('carousel-item-visible');
}


