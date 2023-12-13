// About us3.0.js

document.addEventListener("DOMContentLoaded", function () {
    var joinUsButton = document.getElementById('joinUsButton');

    function addRotateAndZoom() {
        joinUsButton.classList.add('rotate-and-zoom');
    }

    function removeRotateAndZoom() {
        joinUsButton.classList.remove('rotate-and-zoom');
    }

    joinUsButton.addEventListener("mouseenter", addRotateAndZoom);
    joinUsButton.addEventListener("mouseleave", removeRotateAndZoom);
});
