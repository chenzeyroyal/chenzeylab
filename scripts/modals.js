const thumbnails = document.querySelectorAll("[data-js-portfolioImage]");
const modal = document.querySelector("[data-js-modal]");
const modalImage = modal.querySelector(".portfolio__modal-image");
const modalClose = modal.querySelector("[data-js-modalClose]");

export function handleModals() {
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
}
