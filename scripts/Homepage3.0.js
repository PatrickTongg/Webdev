// Search box functionality
document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.querySelector(".search-box");
    let searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", function () {
        search();
    });

    searchBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            search();
        }
    });

    function search() {
        let searchTerm = searchBox.value.trim();

        let targetKeyword = "electronics";

        let searchTermLower = searchTerm.toLowerCase();
        let targetKeywordLower = targetKeyword.toLowerCase();

        if (searchTermLower === targetKeywordLower) {
            let localFilePath = `../productdisplay/ProductDisplay.html`;
            window.location.href = localFilePath;
        }        
    }
});


// Slide functionality
let slideIndex = 0;
let timerId;

showSlides();

function plusSlides(n) {
    clearTimeout(timerId);
    showSlides(slideIndex += n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    timerId = setTimeout(function() {
        plusSlides(1);
    }, 3000);
}
