let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".slider img");

let currentIndex = 0;
let totalImages = images.length;
let slideWidth = images[0].clientWidth;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    let newPosition = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
}

// Función para mover automáticamente al siguiente slide cada 3 segundos
function autoSlide() {
    setInterval(nextSlide, 3000);
}

// Inicia el movimiento automático del slider al cargar la página
autoSlide();
