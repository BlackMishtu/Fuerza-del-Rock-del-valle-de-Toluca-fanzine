
function mostrarImagenAgrandada(src, texto) {
  // Crea un contenedor para la imagen agrandada
  var contenedorImagen = document.createElement('div');
  contenedorImagen.classList.add('imagen-agrandada');

  // Crea un nuevo elemento de imagen para la imagen agrandada
  var imagenAgrandada = new Image();
  imagenAgrandada.src = src;

  // Agrega la imagen al contenedor
  contenedorImagen.appendChild(imagenAgrandada);

  // Crea un elemento de párrafo para el texto
  var parrafo = document.createElement('p');
  parrafo.textContent = texto;

  // Agrega el párrafo debajo de la imagen en el contenedor
  contenedorImagen.appendChild(parrafo);

  // Muestra la imagen agrandada
  document.body.appendChild(contenedorImagen);

  // Cierra la imagen agrandada al hacer clic en ella
  contenedorImagen.onclick = function () {
      document.body.removeChild(contenedorImagen);
  };
}


document.addEventListener("DOMContentLoaded", function() {
    // Obtén todas las palabras y la información asociada
    var palabras = document.querySelectorAll(".clickable");
    var informacion = document.querySelectorAll(".informacion");
  
    // Itera sobre cada palabra
    palabras.forEach(function(palabra, index) {
      // Agrega un evento de clic a cada palabra
      palabra.addEventListener("click", function(event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();
        
         // Verifica si la información está visible
      if (informacion[index].style.display === "block") {
        // Si la información está visible, ocúltala
        informacion[index].style.display = "none";
      } else {
        // Si la información está oculta, muéstrala
        informacion[index].style.display = "block";
      }   
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el elemento donde queremos mostrar la fecha de actualización
    var fechaActualizacion = document.getElementById("fecha-actualizacion");

    // Obtenemos la fecha actual
    var fecha = new Date();

    // Formateamos la fecha para mostrarla de forma legible
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Sumamos 1 porque en JavaScript los meses van de 0 a 11
    var año = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();

    // Formateamos la fecha como quieras mostrarla
    var fechaFormateada = dia + "/" + mes + "/" + año + " " + hora + ":" + minutos;

    // Insertamos la fecha en el elemento
    fechaActualizacion.textContent += fechaFormateada;
});
