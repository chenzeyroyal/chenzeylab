const themeToggle = document.querySelector("[data-js-theme-toggle]");
const themeSwitch = document.querySelector("[data-js-theme-switch]");

export function handleTheme() {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-js-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-js-theme", newTheme);
    themeSwitch.classList.toggle("switch");
  });
}
