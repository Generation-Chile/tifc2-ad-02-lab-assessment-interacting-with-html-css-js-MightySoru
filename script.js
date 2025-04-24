// Cambia el contenido del primer h1
document.querySelector("h1").textContent = "GoodBye";

// Cambia el color del h2 a naranja
document.querySelector("h2").style.color = "orange";

// Selecciona el h3 por su ID y cambia color a marrón al hacer clic
const h3 = document.getElementById("titulo-h3");
h3.addEventListener("click", () => {
  h3.style.color = "brown";
});
