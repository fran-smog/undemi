"use strict"
 /*
 utilizando u bucle, mustrar la suma y la media de los numeros introducidos hasta introcir un numero negativo y ahi mostrar resultado
 */

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("indroduce numero hasta que metas uno negativo" , 0))

    if (isNaN(numero)) {
        numero=0;
    }else if (numero >= 0) {
        suma = suma + numero;
        contador++;
    }
    console.log(suma)
    console.log(contador)
} while (numero >= 0);

document.write("la suma de todos los numeros es " + suma + "</br>");
document.write("la media de todos los numeros es " + (suma/contador));