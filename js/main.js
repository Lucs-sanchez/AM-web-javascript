// PRIMERA ENTREGA TRABAJO FINAL

function comprar(nombre, email, carrito) {
  let cant = carrito.reduce((acc, item) => item.precio + acc, 0);
  alert(`Felicidades ${nombre} \nEl total de tu compra es: \n $ ${cant} ARS`);
}

class producto {
  constructor(id, nombre, color, categoria, precio) {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
    this.categoria = categoria;
    this.precio = precio;
  }
}
let productos = [
  new producto(10, "Classic logo", "Negro", "ropa", 4000),
  new producto(11, "Oscilloscope logo", "Blanco", "ropa", 6500),
  new producto(12, "Monkeys", "Negro", "ropa", 5000),
  new producto(13, "Classic logo", "Blanco", "ropa", 6000),
  new producto(20, "Double cd gatefold sleeve", "Marron", "discos", 3000),
  new producto(21, "Vinil gategold sleeve + poster", "Marron", "discos", 7000),
];

let categorias = [" ropa", "discos"];

let carrito = [];
let categoria = "";

alert("Hola! Bienvenido a la tienda de Arctic Monkeys");

while (categoria != "salir" && categoria != null) {
  let arraycat = categorias.join("\n ");
  categoria = prompt(
    `Ingrese una categoria para comprar o ingrese "salir":\n\n${arraycat} `
  );

  if (categoria != "salir" && categoria != null) {
    let filtroCategoria = productos.filter(
      (item) => item.categoria == categoria
    );
    console.log(filtroCategoria);

    let cartel = "";
    for (let i = 0; i < filtroCategoria.length; i++) {
      cartel += ` id: ${filtroCategoria[i].id} \n
        nombre: ${filtroCategoria[i].nombre}
        precio: ${filtroCategoria[i].precio}
        \n`;
    }
    let idSeleccionado = parseInt(
      prompt(
        `"Seleccione el ID del producto que quiere comprar: \n\n ${cartel}`
      )
    );
    let productoParaCarro = filtroCategoria.find(
      (item) => item.id == idSeleccionado
    );
    if (productoParaCarro) {
      carrito.push(productoParaCarro);
      console.log(carrito);
    }
  }
}

if (carrito.length > 0) {
  alert("Ingrese sus datos para terminar la compra");
  let nombre = prompt("Ingrese su nombre");
  let email = prompt("Ingrese su email");
  comprar(nombre, email, carrito);
}
