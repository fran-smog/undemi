"use strict"

//evento funcion que se ejecuta cuando susede algo
//eventos de raton
//evento load espera a que cargue la pagina para evidar errores
window.addEventListener("load" , () => {

    function cambiarColor(){
        console.log("click")
        var bg = boton.style.background;
        boton.style.padding = "10px";
        if (bg == "green") {
            console.log("puto");
            boton.style.background = "red";
            
    
        }else {
            boton.style.background = "green"
        }
    }
    
    var boton = document.querySelector("#boton")
    //evento click
    boton.addEventListener("click",function(){
        cambiarColor()
    })
    
    //mouse over
    
    boton.addEventListener("mouseover",function(){
        boton.style.background = "#ccc";
    })
    
    //mouse out
    
    boton.addEventListener("mouseout",function(){
        boton.style.background = "yellow";
    })
    
    //focus es cunado haces foco
    var input = document.querySelector("#campo_nombre")
    input.addEventListener("focus",function(){
        console.log("estas en el imput")
    })
    
    //blur cuando dejas de hacer foco
    var input = document.querySelector("#campo_nombre")
    input.addEventListener("blur",function(){
        console.log("estas en el blur")
    })
    //keydown cuando pulsas alguna tecla
    var input = document.querySelector("#campo_nombre")
    input.addEventListener("keydown",function(){
        console.log("pulsando esta tecla",String.fromCharCode(event.keyCode))
    })
    //keypress
    input.addEventListener("keypress",function(event){
        console.log("tecla precionada",String.fromCharCode(event.keyCode))
    })
    //keyup
    input.addEventListener("keyup",function(event){
        console.log("tecla soltada",String.fromCharCode(event.keyCode))
    })
})


