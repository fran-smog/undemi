"use strict"

//arrays multidimensionales

var categorias = ["aacion","terror","comedias"]
var peliculas = ["la verdad duele","la vida es bella","gran torino"]

var cine = [categorias,peliculas]

// console.log(cine[0][1]);
// console.log(cine[1][1]);

while (elemento != "end" ) {
    var elemento = prompt("introduzca nueva pelicula" , "abcd")
    peliculas.push(elemento);
}

var eliminar = peliculas.indexOf("end")
peliculas.splice(eliminar,1)

for (let i = 0; i < peliculas.length; i++) {
    document.write((i+1) + " - " + peliculas[i]+ "</br>")
}
//metodo join tranforma un array en un string

//convertir un string en un array - split -

//esto convierte por lo que esta entre la coma y el espacio

var cadena = "franco, emmanuel, giraudo";
var cadema_array= cadena.split(", ");

console.log(cadema_array);

/*        ///esto convierte letra por letra///


var cadena = "fran2611";
var cadema_array= cadena.split("");

console.log(cadema_array);
*/
