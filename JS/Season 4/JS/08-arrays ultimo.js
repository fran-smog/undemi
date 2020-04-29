"use strict"

//arrays ordenar

var categorias = ["aacion","terror","comedias"]
var peliculas = ["la verdad duele","la vida es bella","gran torino"]

peliculas.sort(); // ordena por orden alfabetico
peliculas.reverse(); // orden inverso

console.log(peliculas);

// otra forma de recorrer un arreglo

for (let pelicula in peliculas) {
    document.write("<li>"+ peliculas[pelicula]+"</li>")
}
document.write("</ul>");

//BUSQUEDAS
// 1 - permite buscar el texto
var busqeuda =  peliculas.find(pelicula => pelicula == "la vida es bella");

var busqeuda2 =  peliculas.findIndex(pelicula => pelicula == "la vida es bella");

console.log(busqeuda);
console.log(busqeuda2);

//metodo para encontrar si hay valores de un tipo u otro
//busca que cumplan una condicion completa

var precios = [10,20,30,50]

var busqeuda3 =  precios.some(precio => precio < 10);

console.log(busqeuda3);