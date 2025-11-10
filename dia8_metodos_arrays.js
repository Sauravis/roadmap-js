// forEach ejecuta la función una vez por cada elemento del array
// recorre el array pero no devuelve nada
let frutas = ["manzana", "banana", "pera", "sandía"];

frutas.forEach(function (fruta, indice) {
  console.log(`Fruta ${indice + 1}: ${fruta}`);
});

// map recorre el array y aplica la función a cada elemento
// transforma los datos y devuelve un nuevo array
let numeros = [1, 2, 3, 4, 5];

let dobles = numeros.map(function (numero) {
  return numero * 2;
});

console.log("Array original:", numeros);
console.log("Array de dobles:", dobles);

// filter selecciona elementos según una condición y devuelve solo los que cumplen

let edades = [12, 18, 25, 9, 30, 15];

let mayoresDeEdad = edades.filter(function (edad) {
  return edad >= 18;
});

console.log("Edades originales:", edades);
console.log("Mayores de edad:", mayoresDeEdad);
