let slideIndex = 0;
const images = [
    "url('1.jpg')",
    "url('2.jpg')",
    "url('3.jpg')",
    "url('4.jpg')",

];
const slider = document.querySelector('.slider');

function changeBackgroundImage() {
    slider.style.backgroundImage = images[slideIndex];
    slideIndex = (slideIndex + 1) % images.length; 
}

setInterval(changeBackgroundImage, 5000);

changeBackgroundImage();

function redirectToReservationForm() {
    window.location.href = "form.html";
}


