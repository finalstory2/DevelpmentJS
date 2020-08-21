$(document).ready(function() {
    //Mouse over . Mouse Out
    console.log('JQ - EV Ok')
    var box = $('#box');
    var box_2 = $('#box-2');

    console.log(box_2);

    box.mouseover(function() {
        $(this).css('background', 'red')
            .css('color', 'turquoise');
    });

    box.mouseout(function() {
        $(this).css('background', 'turquoise')
            .css('color', 'red');

    });

    //Hover

    function change_red() {
        $(this).css('background', 'red')
            .css('color', 'turquoise');
    }

    function change_turquoise() {
        $(this).css('background', 'turquoise')
            .css('color', 'red');
    }

    $('#box-2').hover(function() {
        change_red();
    }, function() {
        change_turquoise();
    });

    box_2.hover(change_red(), change_turquoise());

    //click and double click

    box.click(function() {
        $(this).css('background', 'blue');
    });



});