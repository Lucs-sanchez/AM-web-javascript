let formularioUsuarios = [];

let formulario;
let inputNombre;
let inputApellido;
let inputEdad;
let inputCorreo;
let inputPais;
let inputComentario;

class UsuarioNuevo {
  constructor(nombre, apellido, edad, correo, pais, comentario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.correo = correo;
    this.pais = pais;
    this.comentario = comentario;
  }
}

function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputNombre = document.getElementById("inputNombre");
  inputApellido = document.getElementById("inputApellido");
  inputEdad = document.getElementById("inputEdad");
  inputCorreo = document.getElementById("inputCorreo");
  inputPais = document.getElementById("inputPais");
  inputComentario = document.getElementById("inputComentario");
}

// function detenerformulario() {
//   if (formularioUsuarios > 5) {
//   }
// }

inicializarElementos();

formulario.onsubmit = (event) => {
  event.preventDefault();

  let usuarioNuevo = new UsuarioNuevo(
    inputNombre.value,
    inputApellido.value,
    inputEdad.value,
    inputCorreo.value,
    inputPais.value,
    inputComentario.value
  );

  formularioUsuarios.push(usuarioNuevo);

  formulario.reset();

  console.log(formularioUsuarios);
};
