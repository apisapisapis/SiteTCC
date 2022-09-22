"use strict";

document.addEventListener("DOMContentLoaded", function () {

    var testimonialsSlider = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });

    
    window.addEventListener("scroll", navBehavior);
    window.addEventListener("load", navBehavior);

    function navBehavior() {
        if (window.pageYOffset > 5) {
            document.querySelector(".navbar").classList.add("active");
        } else {
            document.querySelector(".navbar").classList.remove("active");
        }

        if (window.pageYOffset > 1000) {
            document.querySelector("#scrollTop").classList.add("active");
        } else {
            document.querySelector("#scrollTop").classList.remove("active");
        }
    }

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
    });
});
