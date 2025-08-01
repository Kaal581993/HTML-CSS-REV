const slides = document.querySelectorAll(".slider");
let counter = 0;
const totalSlides = slides.length;

// Initialize slider positions
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    // Bound checking for counter
    if (counter >= totalSlides) counter = 0;
    if (counter < 0) counter = totalSlides - 1;
    
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter *100}%)`;
    });
}

const goNext = () => {
    counter++;
    slideImage();
}

const goPrevious = () => {
    counter--;
    slideImage();
}

// Make functions available globally
window.goNext = goNext;
window.goPrevious = goPrevious;