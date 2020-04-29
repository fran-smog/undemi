"use strict"
/*
hacer un programa que:
1- pida 6 numeros por pantalla y los meta en un array
2- tiene que mostrar el array entero, todos sus elementos en cuerpo y consola
3- ordenarlo y mostrarlo
4- invertir su orden y mostrarlo
5- mostrar cuantos elementos tiene el array
6- hacer una busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

//Parte 1
var elementos;
var numeros = [];


for (let i = 0; i <= 5; i++) {
    elementos = parseInt(prompt("introduzca" + i + "elemento del arreglo", 0));
    numeros.push(elementos);

}
//Parte 2

for (let i = 0; i < numeros.length; i++) {
    document.write("<li>"+ numeros[i]+"</li>")
}
console.log(numeros);
//Parte 3

document.write("<h2>"+" ordenado "+"</h2>"+"</br>");
numeros.sort(function(a, b){return a-b});
for (let i = 0; i < numeros.length; i++) {
    document.write("<li>"+ numeros[i]+"</li>")
}
console.log(numeros);
//Parte 4

document.write("<h2>"+" de reveversa mami "+"</h2>"+ "</br>");
numeros.reverse()
for (let i = 0; i < numeros.length; i++) {
    document.write("<li>"+ numeros[i]+"</li>")
}
console.log(numeros);
//PARTE 5

document.write("</br>"+"EL ARRAY NUMEROS TIENE: "+numeros.length+" NUMEROS"+"</br>")
//PARTE 6

var busqueda = parseInt(prompt("introdusca valor a buscar",0));

numeros.find(numero => numero == busqueda)
var busqueda2 = numeros.findIndex(numero => numero == busqueda)
if (busqueda == true) {
    alert("el numero fue encontrado en la columna: " + busqueda2)
}else{
    alert("el numero no existe")
}