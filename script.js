// Constantes del documento
const container = document.getElementById("container");
const text = document.getElementById("text");
// Constantes para la animación
const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();


// Animación
function breathAnimation() {
  text.innerText = "Respirar";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Mantener";

    setTimeout(() => {
      text.innerText = "Exhalar";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime); 
