let formularioUsuarios = [];

let formulario;
let inputNombre;
let inputApellido;
let inputEdad;
let inputCorreo;
let inputPais;
let inputComentario;

function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("inputNombre");
  inputApellido = document.getElementById("inputApellido");
  inputEdad = document.getElementById("inputEdad");
  inputCorreo = document.getElementById("inputCorreo");
  inputPais = document.getElementById("inputPais");
  inputComentario = document.getElementById("inputComentario");
}

inicializarElementos();

formulario.onsubmit = (event) => {
  event.preventDefault();
  formularioUsuarios.push(
    inputNombre.value,
    inputApellido.value,
    inputEdad.value,
    inputCorreo.value,
    inputPais.value,
    inputComentario.value
  );
  formulario.reset();
  console.log(formularioUsuarios);
};
