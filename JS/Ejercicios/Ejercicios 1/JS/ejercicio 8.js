"use strict"

/*
calculadora 
que pida dos numeros por pantalla
que si da null que pida de nuevo
en el cuerpo de la pagina, en una alerta en la consola el rsultado de suma rest multiplicacion y divicion de la pagina
*/


do {
    var num1 = parseInt(prompt("introduzca primer numero",0));
    var num2 = parseInt(prompt("introduzca segundo numero",0));

} while (isNaN(num1||num2));

var suma = num1+num2;
var rest = num1-num2;
var divicion = num1/num2;
var multiplicacion = num1*num2;

console.log(suma);
console.log(rest);
console.log(divicion);
console.log(multiplicacion);

alert("la suma es: "+suma);
alert("la resta es: " + rest);
alert("la multimplicacion es: " + multiplicacion);
alert("la divicion es: "+divicion);

document.write("la suma es: "+suma+"</br>");
document.write("la resta es: " + rest+"</br>");
document.write("la multimplicacion es: " + multiplicacion+"</br>");
document.write("la divicion es: "+divicion+"</br>");
