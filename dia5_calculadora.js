// Definimos las funciones básicas
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
  }
  return a / b;
}

// Función principal calculadora
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

// Pruebas
console.log(calculadora("sumar", 4, 2)); // 6
console.log(calculadora("restar", 10, 5)); // 5
console.log(calculadora("multiplicar", 3, 3)); // 9
console.log(calculadora("dividir", 8, 2)); // 4
console.log(calculadora("raiz", 9, 2)); // Operación no válida
