'use strict'

//DOM - Document objecct model
//Section 16-64

var caja = document.getElementById('caja');
caja.innerHTML = "BOX";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.width = "200px";
caja.style.color = "white";

var my_box = document.querySelector('#my_box');
console.log(my_box);

console.log(caja);

//Section 16-65

//Conseguir elementos por su clase