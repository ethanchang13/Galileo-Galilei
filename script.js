const carouselSlide = document.querySelector('.carousel-slide');
let counter = 0;

function slideCarousel() {
    counter++;
    if (counter >= carouselSlide.children.length) {
        counter = 0;
    }
    carouselSlide.style.transform = `translateX(-${counter * 100}vw)`;
}

setInterval(slideCarousel, 3000);
