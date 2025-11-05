let nombre = "Ana";
let edad = 25;
let ciudad = "Madrid";

let persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid",
};

console.log(persona.nombre); // Ana
console.log(persona["edad"]); // 25

persona.ciudad = "Barcelona";
console.log(persona.ciudad); // Barcelona

let persona = {
  nombre: "Carlos",
  edad: 30,
  profesion: "Diseñador",
};

console.log(persona);
console.log(`Hola, soy ${persona.nombre} y tengo ${persona.edad} años.`);

persona.edad = 31; // Cambiamos la edad
persona.ciudad = "Sevilla"; // añadimos una nueva propiedad

console.log(persona);

function presentarPersona(persona) {
  console.log(
    `Hola, me llamo ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`
  );
}

presentarPersona(persona);
