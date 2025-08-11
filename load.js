window.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".fade-section");
    section.classList.add("show"); // makes it appear
});
window.addEventListener("scroll", () => {
    const section = document.querySelector(".fade-section");
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        section.classList.add("show");
    }
});