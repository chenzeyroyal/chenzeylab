const sections = document.querySelectorAll("section");
const skillsItems = document.querySelectorAll("[data-js-slideItem]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        if (target.tagName === "SECTION") {
          target.classList.add("visible-y");
          observer.unobserve(target);
        }
        skillsItems.forEach((item) => {
          if (target === item) {
            item.classList.add("visible-x");
            observer.unobserve(item);
          }
        });
      }
    },
    { threshold: 0.3 }
  );
});

sections.forEach((el) => observer.observe(el));
skillsItems.forEach((el) => observer.observe(el));
