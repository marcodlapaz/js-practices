import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll("a");

let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

// Agregamos un evento clic a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    // Remover la clase active de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    // Agregar active al que corresponda
    this.classList.add("active");

    // Traer la información del objeto correspondiente
    let contenido = obtenerContenido(this.textContent);

    // Mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
  });
});

// Función para traer la información desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };

  return contenido[enlace];
}
