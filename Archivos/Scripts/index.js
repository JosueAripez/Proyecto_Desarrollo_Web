document.addEventListener("DOMContentLoaded", function() 
{
    let slider = document.querySelector('.slider');
    let images = document.querySelectorAll('.slider img');

    let currentIndex = 0;
    let totalImages = images.length;
    let slideWidth = images[0].clientWidth;

    function nextSlide() 
    {
        currentIndex++;
        if (currentIndex >= totalImages) 
        {
            currentIndex = 0;
        }
        updateSlider();
    }

    function updateSlider() 
    {
        let newPosition = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${newPosition}px)`;
    }

    setInterval(nextSlide, 3000);
});
