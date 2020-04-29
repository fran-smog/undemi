"use strict"

window.addEventListener("load", function(){
  
    function cambiarColor(){
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
        }else {
            boton.style.background = "green"
        }
    }
      //timers
      //setInterval se ejecuta cada el tiempo indicadop abajo 1000 = 1segundo

    function intervalo() {
        var tiempo =  setInterval(() => {
            console.log("segundos")
            var boton= document.querySelector("#boton")
            boton = cambiarColor();
    
        }, 3000);
        return tiempo;
    }
    var tiempo = intervalo();
    //setTimeout se ejecuta solo una vez y no mas de eso

    var stop = this.document.querySelector("#stop")
    stop.addEventListener("click", function(){
        clearInterval(tiempo)
    })

    var start = this.document.querySelector("#start")
    start.addEventListener("click", function(){
        intervalo();
    })


})