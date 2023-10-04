// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Set a delay (in milliseconds) before hiding the preloader
    var preloader = document.getElementById("preloader");
    var delayInMilliseconds = 2000; // Adjust this value as needed (2 seconds in this example)

    setTimeout(function () {
        preloader.style.display = "none";
    }, delayInMilliseconds);
});
