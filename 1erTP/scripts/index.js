//1) Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

//2) Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World <br>");

//3) Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3 + 5, "<br>");

//4) Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
const name = prompt("¿Cuál es tu nombre?");
document.write(`Hola ${name} <br>`);

//5) Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
const num1 = parseInt(prompt("¿Cuál es el primer número?"));
const num2 = parseInt(prompt("¿Cuál es el segundo número?"));
document.write(`La suma es: ${num1 + num2} <br>`);

//6) Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const num3 = prompt("¿Cuál es el primer número?");
const num4 = prompt("¿Cuál es el segundo número?");
if (parseInt(num3) > parseInt(num4)) {
    document.write(`El mayor es: ${num3} <br>`);
} else if (parseInt(num3) < parseInt(num4)) {
    document.write(`El mayor es: ${num4} <br>`);
} else {
    document.write("Los dos números son iguales <br>");
}

//7) Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num5 = prompt("¿Cuál es el primer número?");
const num6 = prompt("¿Cuál es el segundo número?");
const num7 = prompt("¿Cuál es el tercer número?");
if (parseInt(num5) > parseInt(num6)) {
    if (parseInt(num5) > parseInt(num7)) {
        document.write(`El mayor es: ${num5} <br>`);
    }
} else if (parseInt(num7) > parseInt(num6)) {
    document.write(`El mayor es: ${num7} <br>`);
} else if (parseInt(num6) > parseInt(num7)) {
    document.write(`El mayor es: ${num6} <br>`);
} else {
    document.write("Los tres números son iguales <br>");
}

//8) Escribe un programa que pida un número y diga si es divisible por 2
const num8 = prompt("¿Cuál es el número?");
if (parseInt(num8) % 2 === 0) {
    document.write("El número es divisible por 2 <br>");
} else {
    document.write("El número no es divisible por 2 <br>");
}

//9) Escribe un programa que pida una frase y escriba las vocales que aparecen
// CON UN CONTADOR = i 
const frase = prompt("¿Cuál es la frase?");
let vocales = "";
let i = 0;
while (i < frase.length) {
    switch (frase[i].toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            vocales += frase[i];
            break;
        default:
            break;
    }
    i++;
}
document.write(`La frase es: ${frase} <br>`);
document.write(`Las vocales que aparecen son: ${vocales} <br>`);
document.write(`Hay ${vocales.length} vocales <br>`);

// OTRA FORMA DE HACERLO AL PUNTO 9
const frase2 = prompt("Escribe una frase");
frase2 = frase2.toLowerCase();
document.write(frase2);
for (let i = 0; i < frase2.length; i++) {
    if (
        // el metodo charAt devuelve el caracter en la posicion i
        frase2.charAt(i) == "a" ||
        frase2.charAt(i) == "e" ||
        frase2.charAt(i) == "i" ||
        frase2.charAt(i) == "o" ||
        frase2.charAt(i) == "u"
    ) {
        document.write(`Las vocales que aparecen son: ${frase2.charAt(i)}`);
    }
}

//10) Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
const num9 = parseInt(prompt("Ingrese un número"));
if (
    (num9) % 2 == 0 ||
    (num9) % 3 == 0 ||
    (num9) % 5 == 0 ||
    (num9) % 7 == 0
) {
    document.write(`El ${num9} es divisible por 2, 3, 5 o 7 <br>`);
} else {
    document.write(`El ${num9} NO es divisible por 2, 3, 5 o 7 <br>`);
}

// 11) Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
const num10 = parseInt(prompt("¿Cuál es el número?"));
let resultado = "";
if ((num10) % 2 == 0) {
    resultado += "2 - ";  // = resutado = resultado + "2 - ";
}
if ((num10) % 3 == 0) {
    resultado += "3 - ";  // = resutado = resultado + "3 - ";
}
if ((num10) % 5 == 0) {
    resultado += "5 - ";  // = resutado = resultado + "5 - ";
}
if ((num10) % 7 == 0) {
    resultado += "7 - ";  // = resutado = resultado + "7 - ";
}
if (resultado.length > 0) {
    resultado = resultado.slice(0, -2); // elimina la coma y el espacio al final
    document.write(`El ${num10} es divisible por ${resultado} <br>`);
} else {
    document.write(`El ${num10} NO es divisible por 2, 3, 5 y 7`);
}

// OTRA FORMA DE HACERLO AL PUNTO 11
const num11 = parseInt(prompt("¿Cuál es el número?"));
if (
    (num11) % 2 == 0 ||
    (num11) % 3 == 0 ||
    (num11) % 5 == 0 ||
    (num11) % 7 == 0
) {
    if ((num11) % 2 == 0) {
        document.write(`El ${num11} es divisible por 2 <br>`);
    }
    if ((num11) % 3 == 0) {
        document.write(`El ${num11} es divisible por 3 <br>`);
    }
    if ((num11) % 5 == 0) {
        document.write(`El ${num11} es divisible por 5 <br>`);
    }
    if ((num11) % 7 == 0) {
        document.write(`El ${num11} es divisible por 7 <br>`);
    }
} else {
    document.write(`El ${num11} NO es divisible por 2, 3, 5 o 7 <br>`);
}