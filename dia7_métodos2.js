let telefono = {
  marca: "Samsung",
  modelo: "Galaxy S22",
  encendido: false,

  encender: function () {
    this.encendido = true;
    console.log(`El telefono ${this.marca} ${this.modelo} está encendido.`);
  },

  apagar: function () {
    this.encendido = false;
    console.log(`El telefono ${this.marca} ${this.modelo} está apagado.`);
  },
};

telefono.encender();
telefono.apagar();
