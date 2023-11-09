let currentIndex = 0;
const slides = document.querySelectorAll('.carousel .slide');
const totalSlides = slides.length;

updateCarousel();
let carouselTimer = 3000;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(100 * (index - currentIndex)) - 3}%)`;
    });
}

setInterval(() => {
    console.log("hello");
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, carouselTimer)