function saludar() {
  console.log("¡Hola!");
}

saludar();

function saludar(nombre) {
  console.log(`¡Hola, ${nombre}`);
}

saludar("Lucía");
saludar("Pedro");

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(3, 5);
console.log(`La suma es: ${resultado}`);

function saludar(nombre) {
  console.log(`Hola, ${nombre}. ¡Bienvenido!`);
}

saludar("María");
saludar("Pedro");
saludar("Pere");

function saludar(nombre) {
  console.log(`Hola, ${nombre}. ¡Bienvenido!`);
}

saludar("Paula");
saludar("Antonio");
saludar("Policía");

function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(4, 5);
console.log(`El resultado es: ${resultado}`);

function multiplicar(a, b) {
  return a * b;
}

let resultado1 = multiplicar(5, 9);
let resultado2 = multiplicar(4, 6);
let resultado3 = multiplicar(9, 9);

console.log(`El resultado 1 es: ${resultado1}`);
console.log(`El resultado 2 es: ${resultado2}`);
console.log(`El resultado 3 es: ${resultado3}`);

// console.log() Muestra el resultado en pantalla, pero no lo devuelve //
// return devuelve el valor a quien llamó la función y puedes usarlo después //

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(15)); // false

function esMayorDeEdad(edad) {
  return edad >= 18 ? true : false;
}

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(15)); // false
console.log(esMayorDeEdad(18)); // true

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir entre 0";
  } else {
    return a / b;
  }
}

console.log(sumar(5, 3));
console.log(restar(10, 4));
console.log(multiplicar(2, 6));
console.log(dividir(8, 2));
console.log(dividir(5, 0));

function calculadora(operacion, a, b) {
  if (operacion === "sumar") {
    return sumar(a, b);
  } else if (operacion === "restar") {
    return restar(a, b);
  } else if (operacion === "multiplicar") {
    return multiplicar(a, b);
  } else if (operacion === "dividir") {
    return dividir(a, b);
  } else {
    return "Operación no válida";
  }
}

console.log(calculadora("sumar", 4, 2));
console.log(calculadora("restar", 10, 5));
console.log(calculadora("multiplicar", 3, 3));
console.log(calculadora("dividir", 8, 2));
console.log(calculadora("raiz", 9, 2));

function comprobarEdad(nombre, edad) {
  if (edad < 18) {
    return `Hola ${nombre}, eres menor de edad.`;
  } else if (edad >= 18 && edad <= 65) {
    return `Hola ${nombre}, eres adulto.`;
  } else {
    return `Hola ${nombre}, eres jubilado.`;
  }
}

console.log(comprobarEdad("Ana, 15"));
console.log(comprobarEdad("Carlos", 30));
console.log(comprobarEdad("Rebeca", 70));
