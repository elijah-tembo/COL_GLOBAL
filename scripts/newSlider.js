const slides = document.querySelector('.slides');
const slideCount = 3; //number of original slides
const slideWidth = 100; //percentage width of each slide
let currentIndex = 1; //starts at the first original slide

// set initial position to the first slide 
slides.style.transform = 'translateX(-${slideWidth}%)';

// Automatic slide change every after 5 sseconds
setInterval(() => {
    currentIndex++;
    slides.style.transition = 
    'transform 0.5s ease-in-out';
    slides.style.transform = 
    'translateX(-${currentIndex * slideWidth}%)';
})

// Check if we are at the cloned last slide 
if (currentIndex === slideCount + 1){
    setTimeout(() => {
        slideCount.style.transition = 'none'; //Disable transition
        currentIndex = 1; //Jump back to the first original slide
        slides.style.transform = 
        'translateX(-${currentIndex * slideWidth}%)';
    }, 500); //match the transition duration per slide
}




