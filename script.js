function toggleMenu() {
    const nav = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");
    nav.classList.toggle("open");
    hamburger.classList.toggle("active");
}
const galleries = {
    1: [
        "Imagenes/cocina1.jpeg",
        "Imagenes/dormitorio1-1.jpg",
        "Imagenes/dormitorio2-1.jpg",
        "Imagenes/dormitorio3-1.jpg",
        "Imagenes/dormitorio4-1.jpg",
        "Imagenes/bano1-1.jpg",
        "Imagenes/bano2-1.jpg"
    ],
    2: [
        "Imagenes/salon-comedor2.jpg",
        "Imagenes/cocina2.jpg",
        "Imagenes/dormitorio1-2.jpg",
        "Imagenes/dormitorio2-2.jpg",
        "Imagenes/bano2.jpg"
    ],
    3: [
        "Imagenes/reuniones.jpg",
        "Imagenes/social.jpg",
        "Imagenes/almacen.jpg",
        "Imagenes/oficina-administrativa.jpg"
    ],
};
let currentIndex = {1: 0, 2: 0, 3: 0};
function updateImage(id) {
    document.getElementById(`slider-image-${id}`).src = galleries[id][currentIndex[id]];
}
function nextImage(id) {
    currentIndex[id] = (currentIndex[id] + 1) % galleries[id].length;
    updateImage(id);
}
function prevImage(id) {
    currentIndex[id] = (currentIndex[id] - 1 + galleries[id].length) % galleries[id].length;
    updateImage(id);
}
updateImage(1);
updateImage(2);
updateImage(3);