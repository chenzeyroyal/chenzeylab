const thumbnails = document.querySelectorAll("[data-js-portfolioImage]");
const modal = document.querySelector("[data-js-modal]");
const modalImage = modal.querySelector(".portfolio__modal-image");
const modalClose = modal.querySelector("[data-js-modalClose]");

thumbnails.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modal.classList.add("portfolio__modal--show");
    document.body.classList.add("modal-opened");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("portfolio__modal--show");
  document.body.classList.remove("modal-opened");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("portfolio__modal--show");
    document.body.classList.remove("modal-opened");
  }
});

// function disableScroll() {
//   const scrollY = window.scrollY;
//   document.body.style.position = 'fixed';
//   document.body.style.top = `-${scrollY}px`;
//   document.body.style.left = '0';
//   document.body.style.right = '0';
//   document.body.style.width = '100%';
//   document.body.dataset.scrollY = scrollY;
// }

// function enableScroll() {
//   const scrollY = document.body.dataset.scrollY;
//   document.body.style.position = '';
//   document.body.style.top = '';
//   document.body.style.left = '';
//   document.body.style.right = '';
//   document.body.style.width = '';
//   document.body.removeAttribute('data-scroll-y');
//   window.scrollTo(0, parseInt(scrollY || '0'));
// }
