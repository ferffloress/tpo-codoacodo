document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById("exampleInputName").value;
  if (usuario.length == 0) {
    alert("Ingresa un nombre.");
    return;
  }

  let correo = document.getElementById("eInputEmail1").value;
  if (!regexEmail.test(correo)) {
    alert("Ingresa un correo válido.");
    return;
  }

  var rubro = document.getElementById("exampleInputRubro").value;
  if (rubro.length == 0) {
    alert("Por favor, ingresa el área de tu emprendimiento o profesión.");
    return;
  }

  this.submit();
}
