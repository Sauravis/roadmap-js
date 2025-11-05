let mascotas = [
  { nombre: "Luna", clase: "perro", edad: 4 },
  { nombre: "Misu", clase: "gato", edad: 2 },
  { nombre: "Nemo", clase: "pez", edad: 1 },
];

for (let i = 0; i < mascotas.length; i++) {
  console.log(
    `Mi mascota se llama ${mascotas[i].nombre}, es un ${mascotas[i].clase} y tiene ${mascotas[i].edad}.`
  );
}