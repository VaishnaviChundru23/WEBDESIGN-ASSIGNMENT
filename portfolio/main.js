// script.js
document.addEventListener('DOMContentLoaded', function () {
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('close-button');

    // Open lightbox when a portfolio image is clicked
    portfolioImages.forEach(function (image) {
        image.addEventListener('click', function () {
            const fullImageSrc = image.getAttribute('data-image');
            lightboxImage.src = fullImageSrc;
            lightbox.style.display = 'block';
        });
    });

    // Close lightbox when the close button is clicked
    closeButton.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
});
