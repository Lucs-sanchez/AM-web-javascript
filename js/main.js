// SIMULADOR INTERACTIVO

// VARIABLES GLOBALES
let precio1 = 6000;
let precio2 = 6000;
let precio3 = 4500;
let precio4 = 7000;
let opcion;
let cuotas;

// FUNCIONES
function pagarCuotas1() {
  let validacion = prompt(
    "quieres pagar con tarjeta? escribe si o no para volver"
  );
  if (validacion == "si") {
    cuotas = Number(
      prompt(
        "Elige el numero de cuotas a pagar: \n\n-1: 3 cuotas \n-2: 6 cuotas \n-3: 9 cuotas \n-4: 12 cuotas"
      )
    );
    switch (cuotas) {
      case 1:
        resultado = precio1 / 3;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 2:
        resultado = precio1 / 6;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 3:
        resultado = precio1 / 9;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 4:
        resultado = precio1 / 12;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      default:
        alert("Opcion incorrecta");
        break;
    }
  } else {
    stop;
  }
}

function pagarCuotas2() {
  let validacion = prompt(
    "quieres pagar con tarjeta? escribe si o no para volver"
  );
  if (validacion == "si") {
    cuotas = Number(
      prompt(
        "Elige el numero de cuotas a pagar: \n\n-1: 3 cuotas \n-2: 6 cuotas \n-3: 9 cuotas \n-4: 12 cuotas"
      )
    );
    switch (cuotas) {
      case 1:
        resultado = precio3 / 3;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 2:
        resultado = precio3 / 6;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 3:
        resultado = precio3 / 9;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 4:
        resultado = precio3 / 12;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      default:
        alert("Opcion incorrecta");
        break;
    }
  } else {
    stop;
  }
}

function pagarCuotas3() {
  let validacion = prompt(
    "quieres pagar con tarjeta? escribe si o no para volver"
  );
  if (validacion == "si") {
    cuotas = Number(
      prompt(
        "Elige el numero de cuotas a pagar: \n\n-1: 3 cuotas \n-2: 6 cuotas \n-3: 9 cuotas \n-4: 12 cuotas"
      )
    );
    switch (cuotas) {
      case 1:
        resultado = precio4 / 3;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 2:
        resultado = precio4 / 6;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 3:
        resultado = precio4 / 9;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      case 4:
        resultado = precio4 / 12;
        alert(`Deberas abonar ${resultado} ARS por mes`);
        break;
      default:
        alert("Opcion incorrecta");
        break;
    }
  } else {
    stop;
  }
}

// MENU

alert("Hola! Bienvenido a la tienda de Arctic Monkeys");

do {
  opcion = Number(
    prompt(
      "Selecciona el producto: \n\n1 - Remera Classic logo Black\n2 - Remera oscilloscope logo blanco\n3 - Gorro Monkeys\n4 - Doble CD Vinilo y poster combo\n5 - Salir "
    )
  );
  switch (opcion) {
    case 1:
      alert(`El precio de este producto es de ${precio1} ARS`);
      pagarCuotas1();
      break;
    case 2:
      alert(`El precio de este producto es de ${precio2} ARS`);
      pagarCuotas1();
      break;
    case 3:
      alert(`El precio de este producto es de ${precio3} ARS`);
      pagarCuotas2();
      break;
    case 4:
      alert(`El precio de este producto es de ${precio4} ARS`);
      pagarCuotas3();
      break;
    case 5:
      alert("Hasta luego!");
      break;
    default:
      alert("Opcion incorrecta");
      break;
  }
} while (opcion !== 5);
