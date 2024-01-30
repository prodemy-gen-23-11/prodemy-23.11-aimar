//UJI COBA SCRIPT 1
let indexSlide = 1;
slideShow(indexSlide);

function currentSlide(n){
    slideShow(indexSlide = n);
}

function slideShow(n){
    let i;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("small-img");

    if (n>slides.length){indexSlide = 1}
    if(n<1){indexSlide = slides.length}
    for(i=0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indexSlide-1].style.display= "block";
    dots[indexSlide-1].className += " active";
    captionText.innerHTML = dots[indexSlide-1].alt;
}