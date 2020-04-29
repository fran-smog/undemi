"use strict"
/*
mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var num1 = parseInt( prompt("escribir primer numero",0));
var num2 = parseInt( prompt("escribir segundo numero",0));

document.write("los numeros primos entre medio son " + "</br>" );

for (let i = num1; num1 <= num2; num1++){   
     if (num1%2 != 0) {
        document.write("Numero " + num1 + "</br>" );
     }
}