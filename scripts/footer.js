const contactList = document.querySelector("[data-js-contact-list]");
// const footer = document.querySelector("footer");
const footerNav = document.querySelector("[data-js-footerNav]");
const copyrightParagraph = document.querySelector(
  "[data-js-copyrightParagraph]"
);

const contactListClone = contactList.cloneNode(true);
footerNav.appendChild(contactListClone);
footerNav.insertBefore(contactListClone, copyrightParagraph);
