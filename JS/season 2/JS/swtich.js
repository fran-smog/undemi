"use strict"
//switch

var edad = 25;
var imprime ="";
switch (edad) {
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "ya eres un adulto";
    break;
    case 40:
        imprime = "CRISIS DE LOS 40";
    break;
    case 70:
        imprime = "VIEJO";
    break;
    default:
        imprime = "TU EDAD ES NEUTRA";
        break;
}
console.log(imprime);