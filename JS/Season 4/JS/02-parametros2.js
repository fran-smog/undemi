"use strict"
//parametros REST y SPREAD
//tipo ---REST---
function listadoFrutas(frut1, frut2, ...restodefrutas) {
    console.log("fruta 1; " + frut1)
    console.log("fruta 2; " + frut2)
    console.log(restodefrutas)
}

listadoFrutas("manzana","banana","pera","durazno","sandia")

//tipo ---SPREAD---

var frutas = ["manzana","banana"]
listadoFrutas(...frutas ,"pera","durazno","sandia" )