$(document).ready(function() {
    console.log('JQ - Ok');
    var green = $('#green').css('color', 'green')
        .css('text-decoration', 'underline');
    var blue = $('#blue').css('color', 'blue');

    var border = $('.border').css('border', '3px dashed black');

    //Class selector
    $('#green').click(() => {
        $(this).css('background', 'red');
        $(this).addClass('person');
        console.log('click');
    });

    //Tag selector
    var paragraphs = $('p');
    paragraphs.click(() => {
        var that = $(this);
        if ($(that).hasClass('person')) {
            $(that).removeClass('person');
        }
    });

    //Atributes
    $("[title='fruit']").css('color', 'skyblue');

    //Parent and find
    $('p, a').addClass('margin_top');

});


//$ == JQuery
//$(selector)