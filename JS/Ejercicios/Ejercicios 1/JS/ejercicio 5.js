"use strict"

/*
mostrar todos los numeros divisores de un numero introducido en un prompt
*/

var num1 = parseInt( prompt("escribir primer numero",0));

document.write("los numeros divisores son:" + "</br>" );

for (var i  = 1 ; i <= num1 ; i++){   
     if (num1%i == 0) {
        document.write("Numero " , i , "</br>" );
     }
}