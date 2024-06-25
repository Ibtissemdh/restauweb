let slideIndex =1;
showSlides (slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("myslide")
    if (n> slides.length){slideIndex =1}
    if (n<1){slideIndex=slides.length}
    for (i=0; i<slides.length;i++){slides[i].style.display="none";
}
slides[slideIndex-1].style.display="block";
}
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton par son ID
    const openContactBtn = document.getElementById("reservation");

    // Ajouter un gestionnaire d'événements de clic au bouton
    openContactBtn.addEventListener("click", function() {
        // Ouvrir la page contact.html
        //window.location.href = "contact.html";
        window.open("contact.html", "_blank");
    });
});
//diaporama de page entrep
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('displayed-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
});