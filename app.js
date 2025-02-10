//  hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinksContainer = document.querySelector('.nav-links-container');

hamburgerMenu.addEventListener('click', () => {
    navLinksContainer.classList.toggle('nav-active');
    hamburgerMenu.classList.toggle('hamburger-active');
});

// Hero Slider JavaScript
let slideIndex = 0;
const slides = document.querySelectorAll(".slide-image");
const sliderContainer = document.querySelector(".slider-container");
let touchStartX = 0;
let touchEndX = 0;

function showSlides() {
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX) {
        changeSlide(1);
    }
    if (touchEndX > touchStartX) {
        changeSlide(-1);
    }
}


showSlides();


// Tabbed Content JavaScript
function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(tab => {
        tab.classList.add('hidden');
    });
    tabButtons.forEach(button => {
        button.classList.remove('tab-button-active');
        button.classList.add('tab-button-inactive');
    });

    document.getElementById(tabName).classList.remove('hidden');
    const activeButton = Array.from(tabButtons).find(button => button.textContent.toLowerCase().includes(tabName));
    if (activeButton) {
        activeButton.classList.remove('tab-button-inactive');
        activeButton.classList.add('tab-button-active');
    }
}