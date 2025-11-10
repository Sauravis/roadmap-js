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

//forEach se usa para acciones
// map y filter se usan para transformar y filtrar arrays, pero necesitan console.log para mostrar resultados
// return en map y filter son obligatorios.

//| Método    | Devuelve algo | Lo que ves en consola                                  |
//| --------- | ------------- | ------------------------------------------------------ |
//| `forEach` | ❌ No          | Solo si usas `console.log()`                           |
//| `map`     | ✅ Sí          | Solo si usas `console.log()` o guardas en una variable |
//| `filter`  | ✅ Sí          | Solo si usas `console.log()` o guardas en una variable |
