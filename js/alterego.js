const nameElement = document.getElementById("name");
const glitchElement = document.getElementById("glitch");
let pressTimer;
let glitchTimer;

nameElement.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    nameElement.classList.add("pressed");
    glitchElement.style.display = "block";

    glitchTimer = setTimeout(() => {
      glitchElement.style.display = "none";
      nameElement.classList.remove("pressed");
    }, 5000);
  }, 3000);
});

nameElement.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});

nameElement.addEventListener("mouseleave", () => {
  clearTimeout(pressTimer);
});

glitchElement.addEventListener("click", () => {
  clearTimeout(glitchTimer);
  glitchElement.style.display = "none";
  nameElement.classList.remove("pressed");
});
