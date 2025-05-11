const burgerButton = document.querySelector("[data-js-burger]");
const menu = document.querySelector("[data-js-menu]");
const menuLinks = document.querySelectorAll("[data-js-menuLink]");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-active");
    burgerButton.classList.remove("is-active");
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("is-active");
    burgerButton.classList.remove("is-active");
  }
});
