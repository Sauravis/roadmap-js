function presentarPersona(persona) {
  console.log(
    `Hola, me llamo ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`
  );
}

let persona1 = { nombre: "Carlos", edad: 30, ciudad: "Sevilla" };
let persona2 = { nombre: "Laura", edad: 25, ciudad: "Madrid" };
let persona3 = { nombre: "Javier", edad: 40, ciudad: "Valencia" };

presentarPersona(persona1);
presentarPersona(persona2);
presentarPersona(persona3);

let personas = [
  { nombre: "Carlos", edad: 30, ciudad: "Sevilla" },
  { nombre: "Laura", edad: 25, ciudad: "Madrid" },
  { nombre: "Javier", edad: 40, ciudad: "Valencia" },
];

for (let i = 0; i < personas.length; i++) {
  console.log(
    `Hola, me llamo ${personas[i].nombre}, tengo ${personas[i].edad} años y vivo en ${personas[i].ciudad}.`
  );
}
