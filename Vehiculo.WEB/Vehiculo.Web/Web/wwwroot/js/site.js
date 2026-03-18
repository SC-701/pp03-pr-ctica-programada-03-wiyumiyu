// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Animación al hacer scroll
document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".fade-in");

    function mostrarElementos() {
        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos();
});