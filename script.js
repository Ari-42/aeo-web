function toggleMenu() {
    const nav = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");
    nav.classList.toggle("open");
    hamburger.classList.toggle("active");
}