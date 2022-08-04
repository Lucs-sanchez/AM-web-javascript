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

inicializarElementos();

formulario.onsubmit = (event) => {
  event.preventDefault();

  validarFormulario();
  console.log(formularioUsuarios);
};

function manejeElClick() {
  Swal.fire({
    title: "Felicitaciones! enviamos tus comentarios con exito",
    html: "<i class='noti__mail fa-solid fa-envelope-circle-check'></i>",
    confirmButtonText: "Aceptar",
    background: "#364551",
    color: "#FFFFFF",
  });
}

function validarFormulario() {
  if (
    inputNombre.value != "" &&
    inputApellido.value != "" &&
    inputEdad.value != "" &&
    inputPais.value != "Selecciona tu pais" &&
    inputComentario.value != ""
  ) {
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
  } else {
    Swal.fire({
      html: "<i class='noti__mail fa-solid fa-circle-exclamation'></i>",
      title: "Faltan datos por rellenar",
      background: "#364551",
      color: "#FFFFFF",
    });
  }
}
