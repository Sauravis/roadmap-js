let temperatura = 40;

if (temperatura < 10) {
  console.log("Hace frío.");
} else if (temperatura < 25) {
  console.log("El clima es templado.");
} else {
  console.log("Hace calor.");
}

console.log(5 == "5");
console.log(5 === "5");
console.log(10 > 5);

const añoActual = 2025;
let añoNacimiento = 1994;

let edad = añoActual - añoNacimiento;

if (edad >= 18) {
  console.log(`Tienes ${edad} años. Eres mayor de edad.`);
} else {
  console.log(`Tienes ${edad} años. Eres menor de edad.`);
}
