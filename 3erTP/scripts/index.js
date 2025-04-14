// // 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write(`Listas de meses`);
document.write(`<ul>`);
for (let i = 0; i < meses.length; i++) {
    document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ul>`);    

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
let ciudadesArreglo = [];
while (true) {
    const ciudad = prompt("Introduce un nombre de ciudad (pulsa Cancelar para finalizar):");
    if (ciudad === null) {
        // Si el usuario pulsa "Cancelar", se rompe el bucle
        break;
    }
    if (ciudad === "") {
        // Si el usuario deja el campo vacío, también salimos del bucle
        alert("Entrada vacía. Finalizando ingreso de ciudades.");
        break;
    }
    ciudadesArreglo.push(ciudad);
}
// Mostrar el arreglo generado
document.write(`Arreglo de ciudades`);
document.write(`<br>${ciudadesArreglo}<br>`);
// Longitud del arreglo
document.write(`La longitud del arreglo es: ${ciudadesArreglo.length}<br>`);
// Mostrar primera, tercera y última ciudad
const primera = ciudadesArreglo[0];
const tercera = ciudadesArreglo[2]; // Puede ser undefined si hay menos de 3 elementos
const ultima = ciudadesArreglo[ciudadesArreglo.length - 1];
document.write(`Primera ciudad: ${primera || "No disponible"}<br>`);
document.write(`Tercera ciudad: ${tercera || "No disponible"}<br>`);
document.write(`Última ciudad: ${ultima || "No disponible"}<br>`);
// Añadir 'París' al final
ciudadesArreglo.push("París");
// Mostrar la segunda ciudad
const segunda = ciudadesArreglo[1];
document.write(`La segunda ciudad es: ${segunda || "No disponible"}<br>`);
// Sustituir la segunda ciudad por 'Barcelona'
if (ciudadesArreglo.length >= 2) {
    ciudadesArreglo[1] = "Barcelona";
}
// Mostrar arreglo final
document.write(`Arreglo de ciudades final`);
document.write(`<br>${ciudadesArreglo}<br>`);

// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
const resultados = Array(13).fill(0);// es una forma de crear un arreglo de 13 elementos, donde cada elemento es inicializado con el valor 0.
for (let i = 0; i < 50; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;
    resultados[suma]++;
}
// Mostramos las apariciones de cada suma (del 2 al 12)
document.write("<br><table border='1'>");
document.write("<tr><th>Suma</th><th>Veces</th></tr>");
for (let i = 2; i < 12; i++) {
    document.write(`<tr><td>${i}</td><td>${resultados[i]}</td></tr>`);
}
document.write("</table>");

