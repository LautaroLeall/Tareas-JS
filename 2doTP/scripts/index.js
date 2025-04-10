// // 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
const edad = prompt("¿Cuál es tu edad?");
if (isNaN(edad)) {
    alert("La edad no es válida");
} else if (edad >= 18) {
    alert("Ya puede conducir");
} else {
    alert("Aún no puede conducir");
}

// // 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// // 0-2: Muy deficiente
// // 3-4: Insuficiente
// // 5-6: Suficiente
// // 7: Bien
// // 8-9: Notable
// // 10: Sobresaliente
// // Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
const nota = prompt("¿Cuál es tu nota?");
if (isNaN(nota)) {
    alert("Introduce un número válido");
} else if (nota < 0 || nota > 10) {
    alert("Número erróneo - Introduce un número entre 0 y 10");
} else if (nota >= 0 && nota <= 10) {
    switch (parseInt(nota)) {
        case 0 || 1 || 2:
            alert("Muy deficiente");
            break;
        case 3 || 4:
            alert("Insuficiente");
            break;
        case 5 || 6:
            alert("Suficiente");
            break;
        case 7:
            alert("Bien");
            break;
        case 8 || 9:
            alert("Notable");
            break;
        case 10:
            alert("Sobresaliente");
            break;
    }
}

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let texto = "";
while (true) {
    const input = prompt("Introduce una cadena de texto ('cancelar' para salir)");
    if (input === null) {
        // input es null si se pulsa cancelar y sale del bucle
        if (texto !== "") {
            // es verdadera si la variable texto contiene algún texto
            // comprueba si la variable texto no es una cadena vacía
            texto = texto.slice(0, -3); // elimina el guión y el espacio al final
            document.write(`Las cadenas de texto ingresadas son: ${texto}`);
        } else {
            alert("No se introdujeron cadenas de texto");
        }
        break;
    }
    texto += input + " - ";
    // Si apretas "cancelar" y tenias una cadena de texto, ESA NO SE MUESTRA EN LA VARIABLE "texto"
}

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma = 0;
while (true) {
    const num = prompt("Introduce un número ('cancelar' para salir)");
    if (num === null) {
        // num es null si se pulsa cancelar y sale del bucle
        document.write(`La suma total de los números ingresados es: ${suma}`);
        break;
    } else if (isNaN(num)) {
        alert("No es un número válido. Por favor, introduce un número.");
    } else {
        suma += parseInt(num);
    }
}

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// SIN HACER EL PUNTO 5

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// . . .
for (let i = 1; i <= 30; i++) {
    let fila = "";
    for (let j = 0; j < i; j++) {
        fila += i;
    }
    document.write(`${fila}<br>`);
}

// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// . . .
// 333
// 22
// 1
let num;
while (true) {
    num = parseInt(prompt("¿Cuál es el número?"));
    if (num > 50) {
        alert("El número no puede ser mayor de 50");
    } else if (isNaN(num)) {
        alert("No es un número válido. Por favor, introduce un número.");
    } else {
        break;
    }
}
for (let i = num; i >= 1; i--) {
    let fila = "";
    for (let j = 0; j < i; j++) {
        fila += i;
    }
    document.write(`${fila}<br>`);
}

// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
// 1
// 12
// 123
// 1234
// 12345
// 123456
// . . .
let numero;
while (true) {
    numero = parseInt(prompt("¿Cuál es el número?"));
    if (numero > 50) {
        alert("El número no puede ser mayor de 50");
    } else if (isNaN(numero)) {
        alert("No es un número válido. Por favor, introduce un número.");
    } else {
        break;
    }
}
for (let i = 1; i <= numero; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += j;
    }
    document.write(`${fila}<br>`);
}

// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5
// ————————————————————
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10
// ————————————————————
// .... 
for (let i = 1; i <= 500; i++) {
    let texto = "";
    if (i % 4 === 0) {
        texto += `(Múltiplo de 4)`;
    }
    if (i % 9 === 0) {
        texto += `(Múltiplo de 9)`;
    }
    document.write(`${i} ${texto}<br>`);
    if (i % 5 === 0) {
        document.write(`——————————————————————<br>`);
    }
}

// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// SIN HACER EL PUNTO 10

// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
let edad1, nombre1, edad2, nombre2, edad3, nombre3;
function pedirEdad() {
    while (true) {
        let edad = parseInt(prompt("Introduce tu edad"));
        if (isNaN(edad) || edad < 0) {
            alert("La edad debe ser un número entero positivo");
        } else {
            return edad;
        }
    }
}
function pedirNombre() {
    while (true) {
        let nombre = prompt("Introduce ahora tu nombre");
        if (nombre.trim() === "") {
            alert("El nombre no puede estar vacío");
        } else {
            return nombre;
        }
    }
}
edad1 = pedirEdad();
nombre1 = pedirNombre();
edad2 = pedirEdad();
nombre2 = pedirNombre();
edad3 = pedirEdad();
nombre3 = pedirNombre();
const edades = [edad1, edad2, edad3];
const nombres = [nombre1, nombre2, nombre3];
const mayor = Math.max(...edades);
// Se utiliza la función Math.max() para encontrar el valor máximo en el arreglo edades.
// ... se llama "operador de propagación" y se utiliza para "desempaquetar" el arreglo edades en una lista de argumentos individuales que se pasan a la función Math.max().
const indice = edades.indexOf(mayor);
alert(`El nombre del mayor es ${nombres[indice]}`);