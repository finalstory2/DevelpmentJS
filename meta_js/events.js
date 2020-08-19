//Mouse envents

var boton = document.querySelector('#boton');
boton.style.background = "green";
boton.style.padding = "20px";
boton.style.border = "solid 1px blue";
var input = document.querySelector('#nombre');

function mouseEvents() {

}

function mouseOver() {
    var bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }


    return true;
}

boton.addEventListener('click', function() {
    alert('nada');
});

boton.addEventListener('mouseover', function() {
    boton.style.background = 'white';
});

boton.addEventListener('mouseout', function() {
    boton.style.background = 'grey';
});


function Events() {
    input.addEventListener('focus', function() {
        console.log('FOCUS - Estas dentro del input');
    })
    input.addEventListener('blor', function() {
        console.log('BLUR - Estas fuera del input');
    })
    input.addEventListener('keydown', function() {
        console.log('KEYDOWN - Estas pulsando una tecla = ', String.fromCharCode(event.keyCode));
    })

}
Events();