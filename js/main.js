let productos = [
  {
    nombre: `CLASSIC LOGO BLACK T-SHIRT`,
    precio: 8250,
    img: "../imagenes/foto1.png",
  },
  {
    nombre: `CLASSIC LOGO WHITE T-SHIRT`,
    precio: 8250,
    img: "../imagenes/foto2.webp",
  },
  {
    nombre: `OSCILLOSCOPE LOGO BLACK UNISEX T-SHIRT`,
    precio: 8250,
    img: "../imagenes/foto3.png",
  },
  {
    nombre: `OSCILLOSCOPE LOGO WHITE UNISEX T-SHIRT`,
    precio: 8250,
    img: "../imagenes/foto4.png",
  },
  { nombre: `MONKEYS T-SHIRT`, precio: 8250, img: "../imagenes/foto5.png" },
  {
    nombre: `HEAVYWEIGHT CLEAR VINYL20 TRACKS GATEFOLD SLEEVE EXCLUSIVE A2 POSTER`,
    precio: 9900,
    img: "../imagenes/foto6.png",
  },
  {
    nombre: `DOUBLE CD 20 TRACKS GATEFOLD SLEEVE`,
    precio: 3960,
    img: "../imagenes/foto7.png",
  },
  { nombre: `MONKEYS BEANIE HAT`, precio: 6650, img: "../imagenes/foto8.png" },
];

let informacionDeUsuario = localStorage.getItem("productosEncarro");
let productosEncarro;

if (!informacionDeUsuario) {
  productosEncarro = [];
  console.log(productosEncarro);
} else {
  productosEncarro = JSON.parse(informacionDeUsuario);
  productosCarrito();
}

// Funciones

function meterAlCarrito(objproducto) {
  productosEncarro.push(objproducto);
  localStorage.setItem("productosEncarro", JSON.stringify(productosEncarro));
  productosCarrito();
  console.log(productosEncarro);
}

function eliminarDelCarro(nombre) {
  productosEncarro.splice(nombre, 1);
  localStorage.setItem("productosEncarro", JSON.stringify(productosEncarro));
  productosCarrito();
}

function listaProductos() {
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
          <a onclick="meterAlCarrito({nombre: '${productos[i].nombre}', precio: '${productos[i].precio}'})" class="css-button-sliding-to-bottom--black">Agregar al carro</a>
          </div>
      </div>
  </div>`;
  }
  document.getElementById("div-productos").innerHTML = aux;
}
listaProductos();

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
            <a onclick="eliminarDelCarro(${i})" ><i class="fa-solid fa-trash-can"></i></a>
            </div>
        </div>`;
  }
  document.getElementById("div-carrito").innerHTML = aux;
}

function finalCompra() {
  let compraProductos = document.getElementById("finalizarCompra");

  finalizarCompra = `<div>
  <a class="css-button-sliding-to-bottom--black">Finalizar compra</a>
 </div>`;

  compraProductos.innerHTML = finalizarCompra;
}
