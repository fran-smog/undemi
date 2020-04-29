"use strict"

//un bucle es una estructura de control que se repite varias veces
// bucle for

var numeros = 100;

for(var i = 0; i <= numeros; i++){
    console.log("numero " + i);
}

// bucle while

var year = 2018;

while (year <= 2051 & year >= 1991) {
    console.log("estamos en el año " + year);
    year++;
}

//do while

var years = 25;

do {
    alert("SOLO CUANDO SEA DIFERENTE A "+years);
    years--;
} while (years > 20);

//bracke

var year2=2018
while (year2 <= 2051 & year2 >= 1991) {

    console.log("estabamos en el año " + year2);
    
    if (year2 == 2030) {
        break;
    }
    year2++;
}
