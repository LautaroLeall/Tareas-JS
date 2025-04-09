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
}

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
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
