function comprobarEdad(nombre, edad) {
    if (edad < 18) {
        return `Hola ${nombre}, eres menor de edad.`;
    } else if (edad >= 18 && edad <= 65) {
        return `Hola ${nombre}, eres adulto.`;
    } else {
        return `Hola ${nombre}, eres jubilado.`;
    }
}

console.log(comprobarEdad("Ana, 15"));
console.log(comprobarEdad("Carlos", 30));
console.log(comprobarEdad("María", 70));