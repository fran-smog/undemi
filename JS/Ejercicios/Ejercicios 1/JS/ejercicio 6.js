"use strict"
/*
hacer un programa que nos diga si un numero es par o impar
1. ventana prompt
2. si no es valido que pida de nuevo el numero
*/
do {
    var num = parseInt(prompt("introduzca el numero que desee",0))
} while (isNaN(num));

if (num%2 == 0) {
    document.write("el numero es PAR");
} else {
    document.write("el numero es IMPAR");
}

