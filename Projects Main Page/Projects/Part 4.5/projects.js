document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".size");
    var popup = document.getElementById("popup");
    var close = document.querySelector(".close");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            popup.style.display = "block";
        });
    });

    close.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
