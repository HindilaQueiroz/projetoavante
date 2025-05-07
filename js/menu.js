const menuToggle = document.getElementById("menu-toggle");
const submenu = document.getElementById("submenu");

menuToggle.addEventListener("mouseenter", () => {
    menuToggle.classList.add("ativo");
    submenu.classList.add("ativo");
  });
  
  menuToggle.addEventListener("mouseleave", () => {
    menuToggle.classList.remove("ativo");
    submenu.classList.remove("ativo");
  });
