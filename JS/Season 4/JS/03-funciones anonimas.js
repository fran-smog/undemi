"use strict"

//funcion anonima
//es una funcion que no tiene nombre

var pelucula = function (nombre) {
    return "la pelicula es: " + nombre
}

function sumame(num1 , num2 , sumaymuestra, sumapordos) {
    var sumar = num1 + num2;
    sumaymuestra(sumar);
    sumapordos(sumar);

    return sumar;
}
// funcion de calback es una funcion anonima dentro de otra como las dos de abajo

sumame( 5, 7, function(dato) {
    console.log(dato)
},
function(dato){
    console.log("la suma es: "+ (dato*2))
});

//funciones flecha
//es una funcion de calback pero se escribe distinto
/*
sumame( 5, 7, dato => {
    console.log(dato)
},
dato => {
    console.log("la suma es: "+ (dato*2))
});
*/
