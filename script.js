// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú responsive (mobile)
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("show");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}
