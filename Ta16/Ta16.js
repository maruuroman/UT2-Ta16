document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("mostrarOcultar");
    const texto = document.getElementById("texto");
  
    boton.addEventListener("click", function() {
      if (texto.style.display === "none") {
        texto.style.display = "block"; // Muestra el texto
      } else {
        texto.style.display = "none"; // Oculta el texto
      }
    });
  });
  