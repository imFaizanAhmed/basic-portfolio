let currentIndex = 0;
const slides = document.querySelectorAll('.golf-project .slide');
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
        slide.style.transform = `translateX(${(100 * (index - currentIndex))}%)`;
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, carouselTimer)



let currentIndexProject2 = 0;
const slidesProject2 = document.querySelectorAll('.localSeedPro .slide');
const totalSlidesProject2 = slidesProject2.length;

updateCarouselProject2();

document.getElementById('project2NextBtn').addEventListener('click', () => {
    currentIndexProject2 = (currentIndexProject2 + 1) % totalSlidesProject2;
    updateCarouselProject2();
});

document.getElementById('project2PrevBtn').addEventListener('click', () => {
    currentIndexProject2 = (currentIndexProject2 - 1 + totalSlidesProject2) % totalSlidesProject2;
    updateCarouselProject2();
});

function updateCarouselProject2() {
    slidesProject2.forEach((slide, index) => {
        slide.style.transform = `translateX(${(100 * (index - currentIndexProject2))}%)`;
    });
}

setInterval(() => {
    currentIndexProject2 = (currentIndexProject2 + 1) % totalSlidesProject2;
    updateCarouselProject2();
}, carouselTimer)