

/*
hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var num1 = 0;
var num2 = 0;

parseInt( num1 = prompt("escribir primer numero",0));
parseInt( num2 = prompt("escribir segundo numero",0));

document.write("los numeros entre medio son " + "</br>" );

for(var i = num1 ; num1 <= num2 ; num1++){
    document.write("Numero " + num1 + "</br>" );
}