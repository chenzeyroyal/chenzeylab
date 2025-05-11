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
  paragraph.classList.add("show");
  await delay(1000);
  description.classList.add("show");
  await delay(1000);
  welcomeButtons.classList.add("show");
}

window.onload = typeWriter;
