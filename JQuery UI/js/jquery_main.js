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
});