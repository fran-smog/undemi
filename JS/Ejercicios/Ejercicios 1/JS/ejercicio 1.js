/*
programa que pida dos numeros y nos 
diga cual es el mayor el menor y si son iguales
*/

var num1 = parseInt(prompt("introduzca un numero",0));
var num2 = parseInt(prompt("introduzca otro numero ",0));
/*
while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNa(num2) ) {
    alert("introduzca numeros correctos")
    num1 = parseInt(prompt("introduzca un numero",0));
    num2 = parseInt(prompt("introduzca otro numero ",0));
}
*/
if (num1 > num2) {
    document.write("el numero " + num1 + " es mayor que " + num2)
    
}else{

    if (num1 < num2) {
        document.write("el numero " + num2 + " es mayor que " + num1)
    } else {
        document.write("los numeros "+num1+ " y " + num2 + " son iguales")
    }
}
 