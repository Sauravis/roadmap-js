let alumnos = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "María", nota: 6 },
  { nombre: "Carlos", nota: 9 },
  { nombre: "Sara", nota: 5 },
];

let aprobados = alumnos.filter(function (alumno) {
  return alumno.nota >= 5;
});

console.log(aprobados);

let nombresAprobados = aprobados.map(function (alumno) {
  return alumno.nombre;
});

console.log(nombresAprobados);

nombresAprobados.forEach(function (nombre) {
  console.log(`Alumno aprobado: ${nombre}`);
});
