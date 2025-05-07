import { handleBurger } from "./burger.js";
import { handleModals } from "./modals.js";
import { handleObserver } from "./observer.js";
import { handleRobot } from "./robot.js";
import { handleTypeWriter } from "./typewriter.js";
import { handleTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  handleObserver();
  handleBurger();
  handleModals();
  handleRobot();
  handleTypeWriter();
  handleTheme();
});
