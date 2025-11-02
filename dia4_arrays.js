let frutas = ["manzana", "plátano", "naranja"];

console.log(frutas[0]); // manzana
console.log(frutas[2]); // naranja

frutas.push("fresa"); // añadir al final
frutas.unshift("uva"); // Añadir al principio
frutas.pop(); // Quitar el último
frutas.shift(); // Quitar el primero

let frutas = ["manzana", "plátano", "naranja"];
frutas.push("fresa");
console.log(frutas); // ["manzana", "plátano", "naranja", "fresa"]

let frutas = ["manzana", "plátano", "naranja", "kiwi"];
frutas.pop();
console.log(frutas);

// Ejemplo con For
let frutas = ["manzana", "plátano", "naranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}

let comidas = ["fresa", "damasco", "filete", "níspero", "aguacate"];

for (let i = 0; i < comidas.length; i++) {
  console.log("Comida", comidas[i]);
}

let animales = ["elefante", "tigre", "tiburón"];
animales.push("orca");
console.log(animales);

let animales = ["elefante", "tigre", "tiburón"];
animales.shift();
console.log(animales);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log("Número par:", numeros[i]);
  }
}

let temperaturas = [18, 22, 25, 30, 28, 19, 26, 21, 31];

for (let i = 0; i < temperaturas.length; i++) {
  if (temperaturas[i] >= 25) {
    console.log(`Dia ${i + 1}: hace calor (${temperaturas[i]}ºC)`);
  }
}

let nombre = "Elena";
console.log(`Hola ${nombre}, ¿como estás?`);
