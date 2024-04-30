/*Header navigation responsive*/
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.ham-menu');
    const navigation = document.querySelector('.navigation');
    const menuIcon = menuToggle.querySelector('.fa-bars');
    const closeIcon = menuToggle.querySelector('.fa-times');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
        menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline' : 'none';
        closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline' : 'none';
    });
});





/* Carousel Fonctionalite*/
const carousel = document.querySelector('.carousel');
let isScrolling;

function startCarousel() {
    isScrolling = setInterval(() => {
        carousel.scrollLeft += carousel.clientWidth;
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
            carousel.scrollLeft = 0;
        }
    }, 5000); 
}

function stopCarousel() {
    clearInterval(isScrolling);
}

carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);

startCarousel();




