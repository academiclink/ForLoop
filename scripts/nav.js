window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const nav_menu = document.querySelector('.nav')
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        nav_menu.classList.toggle('is-active');

    });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
})

/*
// script.js
window.onload = function() {
    // Hide the preloader when the webpage content is fully loaded
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}
*/