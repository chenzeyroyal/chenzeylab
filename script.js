const sliderLine = document.querySelector(".slider__line");
const slideText = document.querySelectorAll(".slide__text");
const slides = document.querySelectorAll(".slider__slide");
const slidesCount = slides.length;

sliderLine.style.width = `${slides.length * 100}%`;

let currentIndex = 0;
let slideWidth = slides[0].offsetWidth;

// Функция сброса ширины
function recalcWidth() {
  slideWidth = slides[0].offsetWidth;
  moveSlide();
}

function moveSlide() {
  sliderLine.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  slideText.forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = currentIndex < slidesCount - 1 ? currentIndex + 1 : 0;
  moveSlide();
}

document.querySelector("[data-action='next']").addEventListener("click", () => {
  clearInterval(autoSlide);
  restartAutoSlide();
  nextSlide();
});
document.querySelector("[data-action='prev']").addEventListener("click", () => {
  currentIndex = currentIndex <= 0 ? slidesCount - 1 : currentIndex - 1;
  restartAutoSlide();
  moveSlide();
});

window.addEventListener("resize", function () {
  recalcWidth();
  sliderLine.style.transition = "none";
  setTimeout(() => {
    sliderLine.style.transition = ".5s all ease";
  }, 100);
});

// Интервал для автоматического переключения слайдов и функция рестарта счетчика при нажатии на кнопки
let autoSlide = setInterval(nextSlide, 7000);
function restartAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 7000);
}

// Управление сайдбаром
const sidebar = document.querySelector('[data-menu="sidebar"]');
const burgerBtn = document.querySelector('[data-display="burger"]');

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
  if (burgerBtn.classList.contains("open")) {
    sidebar.style.height = "100%";
  } else {
    sidebar.style.height = 0;
  }
});

const modeSwitch = document.querySelector(".theme__toggle");

// Темная тема
modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const menuList = document.querySelector('[data-movable="menu__list"]');

function updateMenuPosition() {
  if (window.innerWidth <= 800) {
    if (!sidebar.contains(menuList)) {
      sidebar.appendChild(menuList);
    }
  } else {
    document.body.classList.remove("no-scroll");
    if (!menu.contains(menuList)) {
      menu.append(menuList);
    }
  }
}

window.addEventListener("resize", updateMenuPosition);
updateMenuPosition();

//"Липкая" шапка

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});
