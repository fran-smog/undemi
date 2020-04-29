"use srtict"
/*
Arrays, arreglos, matrices
*/

//podemos definir arreeglos con corchetes y comas entre los distintos datos
var nombres = ["franco", "emmanuel", "melisa", "agostina", " puto el que lee"];
//tambien definirlos en forma de objetos
var lenguajes = new Array("PHP","JS","go","java");

console.log(nombres[0]);
//nombres.lenght vemos la cantidad de elementos


var elemento = parseInt(prompt("que elemento del array quieres", 0))

while (nombres[elemento] == null) {

    if(elemento>=nombres.length){
        alert("introduce un numero valido el maximo es: "+ nombres.length)
        var elemento = parseInt(prompt("que elemento del array quieres", 0))
    }
}
alert("la persona es: " + nombres[elemento])


//recorrer un array
document.write("<h1> Lengaujes de programacion 2018 </h1>");

for (var i = 0; i < nombres.length; i++) {

    document.write((i+1) + " - " + nombres[i] + "<br>")

}
