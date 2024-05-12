/*Header navigation responsive*/

    const menuToggle = document.querySelector('.ham-menu');
    const navigation = document.querySelector('.navigation');
    const menuIcon = menuToggle.querySelector('.fa-bars');
    const closeIcon = menuToggle.querySelector('.fa-times');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
        menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline' : 'none';
        closeIcon.style.display = closeIcon.style.display === 'none' ? 'inline' : 'none';
    });
;





/* Carousel Fonctionalite*/
const carousel = document.querySelector('.carousel');
let isScrolling;

if(carousel){
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
}




/*******DropDown Header************/
const emploisLink = document.getElementById('emplois-link');
const emploisMenu = document.getElementById('emplois-menu');


emploisLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  emploisMenu.classList.toggle('show');
});


document.addEventListener('click', function(event) {
  if (!emploisMenu.contains(event.target) && !emploisLink.contains(event.target)) {
    emploisMenu.classList.remove('show');
  }
});


/*******DropDown Footer************/
const emploisLinkFooter = document.getElementById('emplois-link-footer'); 
const emploisMenuFooter = document.getElementById('emplois-menu-footer'); 


emploisMenuFooter.style.display = 'none';


emploisLinkFooter.addEventListener('click', function(event) {
  event.preventDefault(); 
  if (emploisMenuFooter.style.display === 'none') {
    emploisMenuFooter.style.display = 'block';
  } else {
    emploisMenuFooter.style.display = 'none';
  }
});


document.addEventListener('click', function(event) {
  if (!emploisMenuFooter.contains(event.target) && !emploisLinkFooter.contains(event.target)) {
    emploisMenuFooter.style.display = 'none';
  }
});



