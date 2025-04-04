//1) Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

//2) Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");
// Salto de linea
document.write("<br>");

//3) Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3 + 5);
document.write("<br>");

//4) Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
const name = prompt("¿Cuál es tu nombre?");
document.write("Hola " + name);
// Salto de linea
document.write("<br>");

//5) Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
const num1 = prompt("¿Cuál es el primer número?");
const num2 = prompt("¿Cuál es el segundo número?");
document.write("La suma es: " + (parseInt(num1) + parseInt(num2)));
// Salto de linea
document.write("<br>");

//6) Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const num3 = prompt("¿Cuál es el primer número?");
const num4 = prompt("¿Cuál es el segundo número?");
if (parseInt(num3) > parseInt(num4)) {
    document.write("El mayor es: " + num3);
} else if (parseInt(num3) < parseInt(num4)) {
    document.write("El mayor es: " + num4);
} else {
    document.write("Los dos números son iguales");
}
// Salto de linea
document.write("<br>");

//7) Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num5 = prompt("¿Cuál es el primer número?");
const num6 = prompt("¿Cuál es el segundo número?");
const num7 = prompt("¿Cuál es el tercer número?");
if (parseInt(num5) > parseInt(num6)) {
    if (parseInt(num5) > parseInt(num7)) {
        document.write("El mayor es: " + num5);
    }
} else if (parseInt(num7) > parseInt(num6)) {
    document.write("El mayor es: " + num7);
} else if (parseInt(num6) > parseInt(num7)) {
    document.write("El mayor es: " + num6);
} else {
    document.write("Los tres números son iguales");
}
// Salto de linea
document.write("<br>");

//8) Escribe un programa que pida un número y diga si es divisible por 2
const num8 = prompt("¿Cuál es el número?");
if (parseInt(num8) % 2 === 0) {
    document.write("El número es divisible por 2");
} else {
    document.write("El número no es divisible por 2");
}
// Salto de linea
document.write("<br>");

//9) Escribe un programa que pida una frase y escriba las vocales que aparecen
// NO ENTIENDO
// CON UN CONTADOR = i
const frase = prompt("¿Cuál es la frase?");
let vocales = "";
let i = 0;
while (i < frase.length) {
    if (frase[i].match(/[aeiou]/i)) {
        vocales += frase[i];
    }
    i++;
}
document.write("Las vocales que aparecen son: " + vocales);
document.write("<br>");
// Salto de linea
document.write("Hay " + vocales.length + " vocales");
// Salto de linea
document.write("<br>");

//10) Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// NO ENTIENDO
const num9 = prompt("Ingrese un número");
if (
    parseInt(num9) % 2 === 0 ||
    parseInt(num9) % 3 === 0 ||
    parseInt(num9) % 5 === 0 ||
    parseInt(num9) % 7 === 0
) {
    document.write("El número es divisible por 2, 3, 5 o 7");
} else {
    document.write("El número no es divisible por 2, 3, 5 y 7");
}
// Salto de linea
document.write("<br>");

//11) Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// NO ENTIENDO
const num10 = prompt("¿Cuál es el número?");
let resultado = "";
if (parseInt(num10) % 2 === 0) resultado += "2 - ";
if (parseInt(num10) % 3 === 0) resultado += "3 - ";
if (parseInt(num10) % 5 === 0) resultado += "5 - ";
if (parseInt(num10) % 7 === 0) resultado += "7 - ";
if (resultado.length > 0) {
    resultado = resultado.slice(0, -2); // elimina la coma y el espacio al final
    document.write("El número es divisible por " + resultado);
} else {
    document.write("El número no es divisible por 2, 3, 5 o 7");
}
