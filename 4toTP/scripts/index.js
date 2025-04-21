// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
const auto  = {
    color: "rojo",
    marca: "Ford",
    modelo: "Fiesta",
    encendido : false,
    // Método encender | Funcion para encender el auto
    encender() {
        // !encendido evalua si es true o false
        // Si es true, se cambia a false y viceversa
        if(!this.encendido) {
            this.encendido = true;
            console.log(`El auto ${this.marca} ${this.modelo} se encendio`);
        }else{
            console.log(`El auto ${this.marca} ${this.modelo} ya está encendido`);
        }
    },
    apagar() {
        if(this.encendido) {
            this.encendido = false;
            console.log(`El auto ${this.marca} ${this.modelo} se apago`);
        }else{
            console.log(`El auto ${this.marca} ${this.modelo} ya está apagado`);
        }
    }
};
console.log(auto);

// Punto 1 con Class Constructor
class Auto {
    constructor(color, marca, modelo, encendido) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = encendido;
    }
    encender() {
        if(!this.encendido) {
            this.encendido = true;
            console.log(`El auto ${this.marca} ${this.modelo} se encendio`);
        }else{
            console.log(`El auto ${this.marca} ${this.modelo} ya está encendido`);
        }
    }
    apagar() {
        if(this.encendido) {
            this.encendido = false;
            console.log(`El auto ${this.marca} ${this.modelo} se apago`);
        }else{
            console.log(`El auto ${this.marca} ${this.modelo} ya está apagado`);
        }
    }
}
const auto1 = new Auto("verde", "Wolkswagen", "Suran", false);
console.log(auto1);

// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
class Cuenta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ingresar(cantidad){
        this.saldo += cantidad;
        console.log(`Se ha ingresado $${cantidad} a la cuenta de ${this.titular}`);
    }
    extraer(cantidad){
        if(this.saldo >= cantidad) {
            this.saldo -= cantidad;
            console.log(`Se ha extraído $${cantidad} de la cuenta de ${this.titular}`);
        }else{
            console.log(`Saldo insuficiente para realizar la extracción de $${cantidad}`);
        }
    }
    informar(){
        console.log(`El Titular de la Cuenta es ${this.titular}`);
        console.log(`Su Saldo es de: $${this.saldo}`);
    }
}
const cuenta1 = new Cuenta("Alex");
cuenta1.informar();