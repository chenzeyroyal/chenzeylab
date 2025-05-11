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
