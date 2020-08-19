'use strict';

window.addEventListener('load', () => {
    var tiempo = setInterval(() => {

        var encabezado = document.querySelector("h1");
        if (encabezado == "50px") {
            encabezado.style.fontSize = "30px";
        } else {
            encabezado.style.fontSize = "50px";
        }

        console.log("executed Set Interval");
    }, 1000000);

    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");

    stop.addEventListener('click', () => {
        alert("The system stoped the interval");
        clearInterval(tiempo);
    });

    start.addEventListener('click', () => {
        alert("The system started the interval");
        clearInterval(tiempo);
    });

});