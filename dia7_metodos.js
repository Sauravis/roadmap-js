let persona = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Sevilla",
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  },
};

persona.saludar();

let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,

  encender: function () {
    this.encendido = true;
    console.log(`El coche ${this.marca} ${this.modelo} está encendido.`);
  },

  apagar: function () {
    this.encendido = false;
    console.log(`El coche ${this.marca} ${this.modelo} está apagado.`);
  },

  estado: function () {
    if (this.encendido) {
      console.log("El coche está encendido");
    } else {
      console.log("El coche está apagado.");
    }
  },
};

coche.encender();
coche.estado();
coche.apagar();
coche.estado();
