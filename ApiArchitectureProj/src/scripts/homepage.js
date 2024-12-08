document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    var myCarousel = document.querySelector('#eventCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true
    })

    const slider = document.querySelector('.event-cards');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    const cards = document.querySelectorAll('.event-card');
    
    if (prevButton && nextButton && slider) {
        let cardIndex = 0;
        const cardWidth = cards[0].offsetWidth + 20; 

        prevButton.addEventListener('click', () => {
            if (cardIndex > 0) {
                cardIndex--;
                slider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
            }
        });

        nextButton.addEventListener('click', () => {
            if (cardIndex < cards.length - 1) {
                cardIndex++;
                slider.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
            }
        });

        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextButton.click(); 
            } else if (touchEndX - touchStartX > 50) {
                prevButton.click(); 
            }
        });
    }
});

console.log("JavaScript code loaded successfully.");