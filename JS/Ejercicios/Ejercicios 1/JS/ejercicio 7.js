"use strict"

/*
tabla de multiplicar de un numero introducido por pantalla
*/

do {
    var num = 0;
    num = parseInt(prompt("introduzca el numero que desee",0))
} while (isNaN(num));

for (let i = 0; i<=10; i++) {
    var result = num * i;
    document.write(num + " x " + i + "  = " + result + "</br>");
}