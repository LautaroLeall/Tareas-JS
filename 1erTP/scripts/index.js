// Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");
document.write("<br><br>");

// Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("3 + 5 = 8");
document.write("<br><br>");

// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
const name = prompt("¿Cuál es tu nombre?");
document.write("Hola " + name);
document.write("<br><br>");

// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
const num1 = prompt("¿Cuál es el primer número?");
const num2 = prompt("¿Cuál es el segundo número?");
const resultado = parseInt(num1) + parseInt(num2);
document.write("La suma es: " + resultado);

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const num3 = prompt("¿Cuál es el primer número?");
const num4 = prompt("¿Cuál es el segundo número?");
if (parseInt(num3) > parseInt(num4)) {
    document.write("El mayor es: " + num3);
}else if (parseInt(num3) < parseInt(num4)) {
    document.write("El mayor es: " + num4);
}else {
    document.write("Los dos números son iguales");
}

// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num5 = prompt("¿Cuál es el primer número?");
const num6 = prompt("¿Cuál es el segundo número?");
const num7 = prompt("¿Cuál es el tercer número?");
if (parseInt(num5) > parseInt(num6)) {
    if (parseInt(num5) > parseInt(num7)) {
        document.write("El mayor es: " + num5);
    }
}else if (parseInt(num7) > parseInt(num6)) {
    document.write("El mayor es: " + num7);
}else if (parseInt(num6) > parseInt(num7)) {
    document.write("El mayor es: " + num6);
}else{
    document.write("Los tres números son iguales");
}

// Escribe un programa que pida un número y diga si es divisible por 2
const num8 = prompt("¿Cuál es el número?");
if (parseInt(num8) % 2 === 0) {
    document.write("El número es divisible por 2");
}else {
    document.write("El número no es divisible por 2");
}

// Escribe un programa que pida una frase y escriba las vocales que aparecen
// CON UN CONTADOR
const frase = prompt("¿Cuál es la frase?");
let vocales = "";
for (let i = 0; i < frase.length; i++) {
    if (frase[i].match(/[aeiou]/i)) {
        vocales += frase[i];
    }
}
document.write("Las vocales que aparecen son: " + vocales);
document.write("<br><br>");
document.write("Hay " + vocales.length + " vocales");

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
const num9 = prompt("¿Cuál es el número?");
if (parseInt(num9) % 2 === 0) {
    document.write("El número es divisible por 2");
}else if (parseInt(num9) % 3 === 0) {
    document.write("El número es divisible por 3");
}else if (parseInt(num9) % 5 === 0) {
    document.write("El número es divisible por 5");
}else if (parseInt(num9) % 7 === 0) {
    document.write("El número es divisible por 7");
}else {
    document.write("El número no es divisible por 2, 3, 5 o 7");
}

// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// NO TERMINADO
const num10 = prompt("¿Cuál es el número?");
if (parseInt(num10) % 2 === 0 ){
    if (parseInt(num10) % 3 === 0) {
        if (parseInt(num10) % 5 === 0) {
            if (parseInt(num10) % 7 === 0) {
                document.write("El número es divisible por 2, 3, 5 y 7");
            }else {
                document.write("El número es divisible por 2, 3 y 5");
            }
        }else {
            document.write("El número es divisible por 2 y 3");
        }
    }else {
        document.write("El número es divisible por 2");
    }
}