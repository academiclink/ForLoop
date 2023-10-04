
document.addEventListener("DOMContentLoaded", function () {
    
    var preloader = document.getElementById("preloader");
    var delayInMilliseconds = 1500; 

    setTimeout(function () {
        preloader.style.display = "none";
    }, delayInMilliseconds);
});

window.onload = function() {
    // For some reason, without this block of code my nav bar doesnt open, biggest scam of my life, and im lazy to fix it
    var preloader = document.getElementById("");
    preloader.style.display = "none";
}
