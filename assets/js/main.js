// inicialización de variables globales >---
var navegador = document.getElementById("navegador");
var formTelefono = document.getElementById("formTelefono");
var formularioOculto = document.getElementById("formularioOculto");
var inputs = document.getElementsByTagName("input");
// fin sección variables globales --->

// inicio funcionalidad NAVEGADOR >---
document.addEventListener("scroll", cambiarFondoNavegador);

function cambiarFondoNavegador(){
  if (window.scrollY > 90) {
    navegador.style.backgroundColor = "white";
  }else if (window.scrollY < 90) {
    navegador.style.backgroundColor = "transparent";
  }
}
// fin funcionalidad NAVEGADOR --->

// inicio funcionalidad FORMULARIO >---
formularioOculto.style.display = "none"
formTelefono.addEventListener("click", mostrarFormulario);
inputs.addEventListener("click", iniciaInputs);

function mostrarFormulario() {
  formularioOculto.style.display = "inline-block";
}

function iniciaInputs() {
  ...
}
// fin funcionalidad FORMULARIO --->


// inicio funcionalidad IMAGEN-VIDEO >---

// fin funcionalidad IMAGEN-VIDEO --->
