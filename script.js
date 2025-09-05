// Mostrar el año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú responsive (mobile)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
