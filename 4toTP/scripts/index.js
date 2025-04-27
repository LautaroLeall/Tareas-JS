// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
const auto = {
    color: "rojo",
    marca: "Ford",
    modelo: "Fiesta",
    encendido: false,
    // Método encender | Funcion para encender el auto
    encender() {
        // !encendido evalua si es true o false
        // Si es true, se cambia a false y viceversa
        if (!this.encendido) {
            this.encendido = true;
            console.log(`El auto ${this.marca} ${this.modelo} se encendio`);
        } else {
            console.log(`El auto ${this.marca} ${this.modelo} ya está encendido`);
        }
    },
    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`El auto ${this.marca} ${this.modelo} se apago`);
        } else {
            console.log(`El auto ${this.marca} ${this.modelo} ya está apagado`);
        }
    },
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
        if (!this.encendido) {
            this.encendido = true;
            console.log(`El auto ${this.marca} ${this.modelo} se encendio`);
        } else {
            console.log(`El auto ${this.marca} ${this.modelo} ya está encendido`);
        }
    }
    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`El auto ${this.marca} ${this.modelo} se apago`);
        } else {
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
    ingresar(cantidad) {
        this.saldo += cantidad;
        console.log(`Se ha ingresado $${cantidad} a la cuenta de ${this.titular}`);
    }
    extraer(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
            console.log(
                `Se ha extraído $${cantidad} de la cuenta de ${this.titular}`
            );
        } else {
            console.log(
                `Saldo insuficiente para realizar la extracción de $${cantidad}`
            );
        }
    }
    informar() {
        console.log(`El Titular de la Cuenta es ${this.titular}`);
        console.log(`Su Saldo es de: $${this.saldo}`);
    }
}
const cuenta1 = new Cuenta("Alex");
cuenta1.informar();

// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    modificar(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
        return (`El perimetro del rectangulo modificado es ${this.getPerimetro()} y su área es ${this.getArea()}`);
    }
    mostrar() {
        return `El Alto del Rectangulo es ${this.alto} y el Ancho es ${this.ancho}`;
    }
    getPerimetro() {
        return (this.alto + this.ancho) * 2;
    }
    getArea() {
        return this.alto * this.ancho;
    }
}
const rectangulo1 = new Rectangulo(
    parseInt(prompt("Ingrese el alto del rectangulo")),
    parseInt(prompt("Ingrese el ancho del rectangulo"))
);
console.log(rectangulo1.mostrar());
console.log(`Perímetro: ${rectangulo1.getPerimetro()}`);
console.log(`Área: ${rectangulo1.getArea()}`);

// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos() {
        console.log(`El código del producto es ${this.codigo}`);
        console.log(`El nombre del producto es ${this.nombre}`);
        console.log(`El precio del producto es ${this.precio}`);
    }
}
const producto1 = new Producto("01", "iPhone 12", 1500);
const producto2 = new Producto("02", "iPhone 13", 2000);
const producto3 = new Producto("03", "iPhone 14", 2500);
const productos = [producto1, producto2, producto3];
productos.forEach((producto) => producto.imprimeDatos());

// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.
class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.añoNacimiento = añoNacimiento,
        this.dni = this.generarDNI()
    };

    generarDNI() {
        return Math.floor(Math.random() * 10000000) + 10000000;
        // puede generar números enteros aleatorios entre 10000000 y 19999999.
    }

    calcularGeneracion() {
        if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
            return "Z: Expancion Masiva de Internet";
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
            return "Y: Inicio de Digitalización";
        } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
            return "X: Crisis del 73 y Transición Española";
        } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
            return "Baby Boom: Paz y Explocion Demografica";
        } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
            return "Silent Generation (Los niños de la Posguerra): Conflictos Belicos";
        }
    }

    mostarGeneracion() {
        const generacion = this.calcularGeneracion();
        let rasgoCaracteristico;
        switch (generacion) {
            case "Z: Expancion Masiva de Internet":
                rasgoCaracteristico = "Irreverencia";
                break;
            case "Y: Inicio de Digitalización":
                rasgoCaracteristico = "Frustración";
                break;
            case "X: Crisis del 73 y Transición Española":
                rasgoCaracteristico = "Obsesion por el Exito";
                break;
            case "Baby Boom: Paz y Explocion Demografica":
                rasgoCaracteristico = "Ambicion";
                break;
            case "Silent Generation (Los niños de la Posguerra): Conflictos Belicos":
                rasgoCaracteristico = "Austeridad";
                break;
            default:
                console.log(
                    "Por favor, verifica los datos ingresados. No se ha podido determinar tu Generación"
                );
                break;
        }
        console.log(
            `${this.nombre} pertenece a la Generacion ${generacion} y su Rasgo Caracteristico es ${rasgoCaracteristico}`
        );
    }

    esMayorDeEdad() {
        return this.edad >= 18;
        // return un valor booleano que indique si la persona es mayor de edad o no.
        // tre or false
    }

    mostrarDatos() {
        console.log(`Los datos de ${this.nombre} son:`);
        console.log({
            InformacionPersona: {
                Nombre: `El Nombre es ${this.nombre}`,
                Edad: `La Edad es ${this.edad}`,
                Sexo: `El Sexo es ${this.sexo}`,
                Peso: `El Peso es ${this.peso}`,
                Altura: `La Altura es ${this.altura}`,
                AñoNacimiento: `El Año de Nacimiento es ${this.añoNacimiento}`,
                DNI: `El DNI es ${this.dni}`,
            },
        });
    }
}
const persona1 = new Persona("Lautaro Leal Del Prete", 20, "H", 110, 1.7, 2004);
console.log(persona1);

// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN | Título | Autor | Páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
class Libro {
    constructor(isbn, titulo, autor, paginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
}
// FALTA TERMINAR
