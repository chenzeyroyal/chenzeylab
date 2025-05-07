// --- THEME MODE ---

const themeToggle = document.querySelector("[data-js-theme-toggle]");
const themeSwitch = document.querySelector("[data-js-theme-switch]");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-js-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-js-theme", newTheme);
  themeSwitch.classList.toggle("switch");
});

// --- BURGER BUTTON & MENU ---

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

// --- HERO ANIMATION ---

const paragraph = document.querySelector("[data-js-paragraph]");
const text = "Привет. Я - Александр.";
const textSecond = "\nFrontend-разработчик.";
const textContainer = document.querySelector("[data-js-typewriter]");
const description = document.querySelector("[data-js-description]");
const welcomeButtons = document.querySelector("[data-js-welcomeButtons]");

const speed = 100;

const textContainerSecond = document.createElement("span");

// Функция delay создает промис, который разрешается через указанное количество времени.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Функция становится ассинхронной - то есть, внутри нее можно использовать await

async function typeWriter() {
  const sequences = [
    { text: text, container: textContainer },
    {
      text: textSecond,
      container: textContainerSecond,
      appendTo: textContainer,
    },
  ];

  for (const { text, container, appendTo } of sequences) {
    if (appendTo) {
      appendTo.appendChild(container);
      container.classList.add("hero__welcome-typewriter-second");
    }

    for (const char of text) {
      container.innerHTML += char === "\n" ? "<br>" : char;
      // Говорим функци typeWriter подождать момента, когда разрешится промис (пройдет заданное время). Т.к. это цикл, данная проверка на разрешение срабатывает до момента, пока не закончатся символы в тексте.

      await delay(speed);
    }
    // Говорим функци typeWriter подождать момента, когда разрешится промис (пройдет заданное время). Т.к. это цикл, данная проверка на разрешение срабатывает до момента, пока не закончатся символы в тексте.
  }
  // Говорим функции typeWriter подождать момента, когда разрешится промис (пройдет заданное время). После того, как цикл завершается, функция останавливается и продолжается снова через заданное количество времени.
  description.classList.add("show");
  await delay(1000);
  welcomeButtons.classList.add("show");
  await delay(1000);
  paragraph.classList.add("show");
}

window.onload = typeWriter;

// --- ROBOT ---

const robot = {
  wrapper: document.querySelector("[data-js-robot]"),
  head: document.querySelector("[data-js-robotHead]"),
  button: document.querySelector("[data-js-robotButton]"),
  eyes: document.querySelectorAll("[data-js-robotEye]"),
  arm: document.querySelector("[data-js-robotArm]"),
  shadow: document.querySelector("[data-js-robotShadow]"),

  toggleMode() {
    this.button.addEventListener("click", () => {
      let interval = setInterval(() => {
        const translateY =
          parseFloat(getComputedStyle(this.wrapper).transform.split(", ")[5]) ||
          0;
        if (Math.round(translateY) === 0) {
          clearInterval(interval);
          this.wrapper.classList.toggle("landed");
          this.shadow.classList.toggle("landed-shadow");
        }
      }, 100);
      this.eyes.forEach((eye) => {
        eye.classList.toggle("landed");
        eye.classList.remove("hide");
        eye.classList.toggle("robot-sleep");
      });
      this.head.classList.toggle("rotate-head");
      this.arm.classList.toggle("arm-wave");
    });
  },

  toggleEyes() {
    this.arm.addEventListener("animationstart", () => {
      this.eyes.forEach((eye) => {
        eye.classList.add("hide");
      });
    });
    this.arm.addEventListener("animationend", () => {
      this.eyes.forEach((eye) => {
        eye.classList.remove("hide");
      });
    });

    const toggleRobotEyesState = (hide) => {
      this.eyes.forEach((eye) => {
        if (!eye.classList.contains("robot-sleep")) {
          eye.classList.toggle("landed", hide);
          eye.classList.toggle("hide", hide);
        }
      });
    };
    this.head.addEventListener("mouseover", () => toggleRobotEyesState(true));
    this.head.addEventListener("mouseout", () => toggleRobotEyesState(false));
  },
  init() {
    this.toggleMode();
    this.toggleEyes();
  },
};
robot.init();

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
          }
        });
      }
    },
    { threshold: 0.2 }
  );
});

sections.forEach((el) => observer.observe(el));
skillsItems.forEach((el) => observer.observe(el));
