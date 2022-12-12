var slideIndex = 1;
slideshow(slideIndex);
var myInterval = setInterval(function () { slideshow(++slideIndex) }, 2000);

function plusSlides(n) {
    slideshow(slideIndex += n);
}

function currentSlides(n) {
    slideshow(slideIndex = n);
}

function slideshow(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length)
        slideIndex = 1;
    if (n < 1)
        slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}