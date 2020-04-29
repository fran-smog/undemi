"use strict"
//pruevas con let y var

//prueva con VAR
var numero = 40;
console.log(numero); //valor 40

if (true) {
    var numero =50;
    console.log(numero);
}

console.log(numero);

//prueva con LET
//la variable let solo funciona dentro del bloque
 var texto ="curso de javasript";
 console.log(texto);

 if (true) {
     let texto = "curso de c#"
     console.log(texto);
 }

 console.log(texto);
