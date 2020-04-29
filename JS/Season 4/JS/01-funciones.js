"use strict"
/*
FUNCIONES
son un grupo de ordenes agrupados con un nombre concreto
*/

function hola() {
    console.log( "hola soy la calculadora");
    console.log("si soy yo")
}

hola();

/*
PARAMETROS

*/
var numero1 = 10;
var numero2 = 15;

function calculadora(num1, num2) {
    console.log( "suma: " + (num1+num2));
    console.log( "Resta: " + (num1-num2));
    console.log( "Division: " + (num1*num2));
    console.log( "Multiplicacion: " + (num1/num2));
}

calculadora(10, 15);

calculadora(numero1, numero2);

for (let i = 0; i <= 10; i++) {
    calculadora(i, numero1) 
}

/*
PARAMTROS OPCIONALES
*/
function calculadora2(num1, num2 , mostrar = false) {
    if (mostrar == false) {
        console.log( "suma: " + (num1+num2));
        console.log( "Resta: " + (num1-num2));
        console.log( "Division: " + (num1*num2));
        console.log( "Multiplicacion: " + (num1/num2));
    }else{
        document.write( "suma: " + (num1+num2) + "</br>");
        document.write( "Resta: " + (num1-num2)+ "</br>");
        document.write( "Division: " + (num1*num2)+ "</br>");
        document.write( "Multiplicacion: " + (num1/num2)+ "</br>");
    }
}

calculadora2(10, 15, true);

/*
Funciones dentro de otras
*/

function calculadora2(num1, num2 , mostrar = false) {
    if (mostrar == false) {
        consola(num1,num2);
    }else{
        pantalla(num1,num2);
    }
}

function consola(num1,num2) {
        console.log( "suma: " + (num1+num2));
        console.log( "Resta: " + (num1-num2));
        console.log( "Division: " + (num1*num2));
        console.log( "Multiplicacion: " + (num1/num2));
}

function pantalla(num1, num2) {
        document.write( "suma: " + (num1+num2) + "</br>");
        document.write( "Resta: " + (num1-num2)+ "</br>");
        document.write( "Division: " + (num1*num2)+ "</br>");
        document.write( "Multiplicacion: " + (num1/num2)+ "</br>");
}

calculadora2(10,15,true);