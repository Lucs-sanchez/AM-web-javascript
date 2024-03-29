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
  fetch("data.json")
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
      ` <div class="container__productoscarro row justify-content-md-center ">
            <div class="col-md-3">
            <p class="nombre__producto">${productosEncarro[i].nombre}</p>
            </div>
            <div class="col-md-3">
            <p class="nombre__cantidad">Cantidad : ${productosEncarro[i].cantidad}</p>
            </div>
            <div class="col-md-3">
            <p class="precio__producto">$ ${productosEncarro[i].precio} ARS</p>
            </div>
            <div class="col-md-3">
            <a onclick="eliminarDelCarro(${i}), notificacionEliminar()"><i class="tacho__producto fa-solid fa-trash-can"></i></a>
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
      return null;
    }
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

function notificacionCompra() {
  Swal.fire({
    title: "Felicitaciones! <br> Has realizado tu compra",
    html: '<img src="../imagenes/carrito-check.jpg" class="carrito__check">',
    showClass: {
      popup: "animate__animated animate__backInDown",
    },
    hideClass: {
      popup: "animate__animated animate__backOutDown",
    },
    background: "#F5F5F5",
    color: "#212529",
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

// FUNCION SI HAY PRODUCTOS EN EL CARRO

function carroVacio() {
  if (productosEncarro.length === 0) {
    let aux = "";
    aux =
      aux +
      `<h3>NO HAY PRODUCTOS EN EL CARRO</h3>
      <a href="../index.html" class="seguir__comprando css-button-sliding-to-bottom--black">SEGUIR COMPRANDO</a>`;
    document.getElementById("carritoVacio").innerHTML = aux;
  } else {
    let aux = "";
    aux =
      aux +
      ` <a onclick="notificacionCompra()" class="finalizar__compra css-button-sliding-to-bottom--black">COMPRAR</a>`;
    document.getElementById("finalizarCompra").innerHTML = aux;
  }
}
// LOGICA ECOMMERCE

listaProductos();

carroVacio();
