'use strict'

//DOM - Document objecct model
//Section 16-64

// var caja = document.getElementById('caja');
// caja.innerHTML = "BOX";
// caja.style.background = "red";
// caja.style.padding = "20px";
// caja.style.width = "200px";
// caja.style.color = "white";

// var my_box = document.querySelector('#my_box');
// console.log(my_box);

// console.log(caja);

//Section 16-65

//Conseguir elementos por su clase

var all_cajas = document.getElementsByTagName('div');
console.log(all_cajas);


function tranformacionCajas() {
    for (let index = 0; index < all_cajas.length; index++) {
        console.log(all_cajas[index]);
        all_cajas[index].innerHTML = index + 1;
        all_cajas[index].padding = "20px";
        all_cajas[index].width = "200px";
        all_cajas[index].color = "white";
    }
}

function cajas_foreach_listado_textos() {
    var valor;
    //all_cajas.forEach((valor, indice) => {
    for (valor in all_cajas) {
        if (typeof all_cajas[valor].textContent == 'string') {
            var parrafo = document.createElement('p');
            var texto = document.createTextNode(all_cajas[valor].textContent);
            parrafo.appendChild(texto);
            document.querySelector("#miseccion").appendChild(parrafo);
        }
    }
    //});
}

//Section 16-66
//Practicando por color

var divsRojo = document.getElementsByClassName('rojo');
var divAmarillo = document.getElementsByClassName('amarillo');

function colorearRojos() {
    var div;
    for (div in divsRojo) {
        if (divsRojo[div].className == "rojo") {
            divsRojo[div].style.background = "red";
            console.log(div);
        }
    }
}

colorearRojos();