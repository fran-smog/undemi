"use strict"
// condicional if
//ejemplo  -si a es igual a b entonces haz algo-

/*
operadores relacionales
mayor; >
menor; <
mayor o igual; >=
menor o igual; <=
igual: ==
distinto !=
*/
var edad =18;
var nombre = " Franco Giraudo";

if (edad >= 18) {
    document.write(nombre+" es mayor de edad");
} else {
    document.write(nombre+" es menor de edad");
}

//operadores logicos
/*
and (Y):   &&
or (O):    ||
negacion:  !
*/

//negacion
var año = 2020;
if (año != 2016) {
    console.log("no es 2016");
}
//and
if (año >= 2000 && año <=2020 && año != 2018) {
    console.log ("estamos en la era actual");
}else{
    console.log("estamos en la era posmoderna")
}

//or
if (año == 2010 || año == 2020 ) {
    console.log("el año termina en 0")
}