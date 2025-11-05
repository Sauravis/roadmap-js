let mascotas = [
  { nombre: "Luna", clase: "perro", edad: 4 },
  { nombre: "Misu", clase: "gato", edad: 2 },
  { nombre: "Nemo", clase: "pez", edad: 1 },
];

for (let i = 0; i < mascotas.length; i++) {
  console.log(
    `Mi mascota se llama ${mascotas[i].nombre}, es un ${mascotas[i].clase} y tiene ${mascotas[i].edad} años.`
  );
}

// Lista de coches
let coches = [
  { marca: "Toyota", modelo: "Corolla", año: 2018 },
  { marca: "Ford", modelo: "Fiesta", año: 2020 },
  { marca: "Tesla", modelo: "Model 3", año: 2022 },
];

// Añadir otro coche (opcional)
coches.push({ marca: "Seat", modelo: "Ibiza", año: 2019 });

// Recorrer la lista y mostrar cada coche
for (let i = 0; i < coches.length; i++) {
  console.log(
    `Tengo un ${coches[i].marca} ${coches[i].modelo} del año ${coches[i].año}.`
  );
}

// Lista de coches (otra forma de realizarlo)
let coches = [
  { marca: "Toyota", modelo: "Corolla", año: 2018 },
  { marca: "Ford", modelo: "Fiesta", año: 2020 },
  { marca: "Tesla", modelo: "Model 3", año: 2022 },
  { marca: "Seat", modelo: "Ibiza", año: 2019 },
];

// Recorremos el array con for...of
for (let coche of coches) {
  console.log(`Tengo un ${coche.marca} ${coche.modelo} del año ${coche.año}.`);
}
