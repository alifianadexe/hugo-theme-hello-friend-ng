// Mobile menu

const menuTrigger = document.querySelector(".menu-trigger");
const menuHover = document.querySelector(".menu-hover");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const subMenu = document.querySelector(".sub-menu")
const mobileQuery = getComputedStyle(document.body).getPropertyValue("--tabletWidth");
const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
};

isMobileMenu();

menuTrigger && menuTrigger.addEventListener("click", () => {
  menu && menu.classList.toggle("hidden");
  overlay && overlay.classList.toggle("hidden");
});

overlay && overlay.addEventListener("click", () => {
  if (overlay.style.display != "none") {
    menu && menu.classList.toggle("hidden");
    overlay && overlay.classList.toggle("hidden");
  }
})


window.addEventListener("resize", isMobileMenu);
