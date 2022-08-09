// VARIABLES GENERALES

let informacionDeUsuario = localStorage.getItem("productosEncarro");
let productosEncarro;

let contadorCarrito = document.getElementById("contador__carrito");

// CONDICIONAL GUARDAR INFORMACION DE USUARIO

if (!informacionDeUsuario) {
  productosEncarro = [];
  console.log(productosEncarro);
} else {
  productosEncarro = JSON.parse(informacionDeUsuario);
  productosCarrito();
}

// FUNCIONES PRINCIPALES ECOMMERCE

function listaProductos() {
  fetch("/data.json")
    .then((resinicial) => resinicial.json())
    .then((data) => {
      let productos = data;
      let aux = "";
      for (let i = 0; i < productos.length; i++) {
        aux =
          aux +
          ` <div class="container__imagen grid text-center">
      <div class="container__imagen col">
          <img src=${productos[i].img} class="img-fluid">
      <div class="capa">
          <p>${productos[i].nombre}</p>
          <p class="capa_precio">$ ${productos[i].precio}</p>
          <a onclick="meterAlCarrito({nombre: '${productos[i].nombre}', precio: '${productos[i].precio}'}), notificacionAgregar()" class="css-button-sliding-to-bottom--black">Agregar al carro</a>
          </div>
      </div>
  </div>`;
      }
      document.getElementById("div-productos").innerHTML = aux;
    })
    .catch((e) => {
      console.log(e);
    });
}

function productosCarrito() {
  let aux = "";
  for (let i = 0; i < productosEncarro.length; i++) {
    aux =
      aux +
      ` <div class="container__productoscarro">
            <div class="nombre__producto">
            <p>${productosEncarro[i].nombre}</p>
            </div>
            <div class="precio__producto">
            <p>$ ${productosEncarro[i].precio} ARS</p>
            </div>
            <div class="tacho__producto">
            <a onclick="eliminarDelCarro(${i}), notificacionEliminar()" ><i class="fa-solid fa-trash-can"></i></a>
            </div>
        </div>`;
  }
  document.getElementById("div-carrito").innerHTML = aux;
}

// FUNCIONES AGREGAR/SACAR DEL CARRO

function meterAlCarrito(objproducto) {
  productosEncarro.push(objproducto);
  localStorage.setItem("productosEncarro", JSON.stringify(productosEncarro));
  productosCarrito();
  totalCompra();
  contadorCarrito.innerText = productosEncarro.length;
  console.log(productosEncarro);
}

function eliminarDelCarro(nombre) {
  productosEncarro.splice(nombre, 1);
  localStorage.setItem("productosEncarro", JSON.stringify(productosEncarro));
  productosCarrito();
  totalCompra();
  contadorCarrito.innerText = productosEncarro.length;
}

// FUNCIONES DE NOTIFICACIONES

function notificacionAgregar() {
  Toastify({
    text: "Producto agregado al carrito!",
    duration: 3000,
    className: "notificacion__toast",
  }).showToast();
}

function notificacionEliminar() {
  Toastify({
    text: "Producto eliminado!",
    duration: 3000,
    className: "notificacion__toast",
  }).showToast();
}

// FUNCION TOTAL PRODUCTOS

function totalCompra() {
  let precioTotal = document.getElementById("p-total");
  precioTotal.innerText = productosEncarro.reduce(
    (acc, item) => acc + item.precio,
    0
  );
  console.log(precioTotal);
}

// LOGICA ECOMMERCE

listaProductos();
