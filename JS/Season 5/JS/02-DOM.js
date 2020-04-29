"use strict"

//        DOM - docuent objet model


//encuentra por id una parte del html
var caja = document.getElementById("micaja")

caja.innerHTML = "esto esta modificado desde JS"
caja.style.background = "red"
caja.style.padding = "20px"

console.log(caja);

//con esto podes cambiar el color desde la consola o mismo hacer un prompt
function color(color) {
    caja.style.background = color
}

var caja2 = document.querySelector("#micaja")
caja2.style.color = "white"


/*
CONSEGUIR ELEMENTOS POR SU ETIOQUETA Y POR SU CLASE
*/

var todosLosDiv = document.getElementsByTagName("div");
todosLosDiv[2].style.color = "blue"
todosLosDiv[2].innerHTML = "estoy cambiando este div";

console.log(todosLosDiv)

var divsrojos = document.getElementsByClassName("rojo")
var div
for (div in divsrojos) {
    if (divsrojos[div].className == "rojo" ) {
        divsrojos[div].style.background = "red";
    }
    
}

