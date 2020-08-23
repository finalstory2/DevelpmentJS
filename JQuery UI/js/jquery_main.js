$(document).ready(function() {


    //Mover elemento por la pagina
    $('.element').draggable();

    $('#resizable').resizable();

    //Elemts selectables
    // $('.list').selectable();
    $('.list').sortable({
        update: function(event, ui) {
            console.log('List changed');
            console.log(event + '_' + ui);
            console.log(event);
        }
    });
    $('#moved_elemnt').draggable();
    $('#area').droppable({
        drop: function() {
            console.log("Has soltado algo dentro");
            $('#moved_elemnt').css('display', 'none');
        }
    });
});