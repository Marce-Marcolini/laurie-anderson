//EJERCICIO DE DATOS CURIOSOS
//lista de datos curiosos
let datosCuriosos = [
  "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo",
  "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido..",
  "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.",
  "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
  "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.",
];

// Selección de elementos del HTML
let boton = document.getElementById("btn-cambiar");
let contenedorDato = document.getElementById("contenedor-dato");

// Función para elegir el dato al azar
function mostrarDatoAlAzar() {
  let indiceRandom = Math.floor(Math.random() * datosCuriosos.length);
  contenedorDato.textContent = datosCuriosos[indiceRandom];
}
// Al hacer click muestra un dato al azar
boton.addEventListener("click", mostrarDatoAlAzar);
