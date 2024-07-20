const images = [
    'project/slider/assest/images/image1.jpg',
    'project/slider/assest/images/image2.jpg',
    'project/slider/assest/images/image3.jpg',
];

let currentImageIndex = 0;

function prevImage() {
    if (currentImageIndex == 0) {
        currentImageIndex = images.length - 1
    } else {
        currentImageIndex--
    }
    document.sliderimg.src = images[currentImageIndex]
    // updateSlider();
}

function nextImage() {
    if (currentImageIndex == images.length - 1) {
        currentImageIndex = 0
    } else {
        currentImageIndex++
    }
    document.sliderimg.src = images[currentImageIndex]
    // updateSlider();
}

// function updateSlider() {
//     currentImageIndex.style.transition = `all ${1000}s linear`;
// }

let autoplayInterval;
function startAutoplay() {
    autoplayInterval = setInterval(nextImage, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

sliderimg.addEventListener('mouseenter', stopAutoplay);
sliderimg.addEventListener('mouseleave', startAutoplay);

startAutoplay();