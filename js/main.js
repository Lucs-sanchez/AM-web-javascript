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
  totalCompra();
  contadorCarrito.innerText = productosEncarro.length;
}

// FUNCIONES PRINCIPALES ECOMMERCE

function listaProductos() {
  fetch("http://jsonblob.com/1013619063716593664")
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
      </div>
      <div class="capa">
          <p>${productos[i].nombre}</p>
          <p class="capa_precio">$ ${productos[i].precio}</p>
          <a onclick="meterAlCarrito({imagen: '${productos[i].img}', nombre: '${productos[i].nombre}', precio: ${productos[i].precio}, cantidad: ${productos[i].cantidad}}), notificacionAgregar()" class="css-button-sliding-to-bottom--black">Agregar al carro</a>
          </div>
          </div>`;
      }
      document.getElementById("div-productos-1").innerHTML = aux;
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
            <div class="nombre__cantidad">
            <button class="boton__mas btn  btn-sm">
            +
            </button>
            <p>Cantidad : ${productosEncarro[i].cantidad}</p>
            <button class="boton__menos btn btn-sm">
            -
            </button>
            </div>
            <div class="precio__producto">
            <p>$ ${productosEncarro[i].precio} ARS</p>
            </div>
            <div class="tacho__producto">
            <a onclick="eliminarDelCarro(${i}), notificacionEliminar()"><i class="fa-solid fa-trash-can"></i></a>
            </div>
        </div>`;
  }
  document.getElementById("div-carrito").innerHTML = aux;
}

// FUNCIONES AGREGAR/SACAR DEL CARRO

function meterAlCarrito(nuevoProducto) {
  for (let i = 0; i < productosEncarro.length; i++) {
    if (productosEncarro[i].nombre.trim() === nuevoProducto.nombre.trim()) {
      productosEncarro[i].cantidad++;
      return;
    }
    console.log(productosEncarro[i].cantidad);
  }
  productosEncarro.push(nuevoProducto);
  productosCarrito();
  localStorage.setItem("productosEncarro", JSON.stringify(productosEncarro));
  totalCompra();
  contadorCarrito.innerText = productosEncarro.length;
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
  Swal.fire({
    html: '<i class="noti__mail fa-solid fa-circle-check"></i>',
    title: "Producto eliminado",
    background: "#364551",
    color: "#FFFFFF",
  });
}

// FUNCION TOTAL PRODUCTOS

function totalCompra() {
  let precioTotal = document.getElementById("p-total");
  precioTotal.innerText = productosEncarro.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
}

// FUNCION CANTIDAD PRODUCTOS

// LOGICA ECOMMERCE

listaProductos();

carroVacio();

function carroVacio() {
  if (productosEncarro.length === 0) {
    Swal.fire({
      html: '<img class="noti__mail" src="../imagenes/carro-vacio.png">',
      title: "Carrito vacio! <br> Vuelve para agregar productos",
      background: "#364551",
      color: "#FFFFFF",
    });
  }
}
