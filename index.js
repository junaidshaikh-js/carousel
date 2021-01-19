let slideIndex = 0;
showSlide(slideIndex);

// next  and previous button function 
function nextSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

// carousel indicators function 
function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

function showSlide(n) {
    // get slide and dot element
    let slides = document.getElementsByClassName('slide');
    let dot = document.getElementsByClassName('dot');

    // keep the slideIndex in range
    if (n > slides.length - 1) {
        slideIndex = 0;
    };

    if (n < 0) {
        slideIndex = slides.length - 1;
    };

    // make display of all slide to none
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };

    // remove class 'active' from dots
    for (let i = 0; i < slides.length; i++) {
        dot[i].classList.remove("active");
    };

    // make only one slide visible
    slides[slideIndex].style.display = 'block';
    dot[slideIndex].classList.add("active");
}