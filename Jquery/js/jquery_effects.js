$(document).ready(function() {
    console.log('JQ - OK')

    $('#button_show').hide();
    var caja = $('#box');

    $('#button_show').click(function() {
        $(this).hide();
        $('#button_hide').show();
        $('#box').show('Normal');

    });

    $('#button_hide').click(function() {
        $(this).hide();
        $('#button_show').show();
        $('#box').hide('Normal');
    });
    //personalized animations
    $('#anime').click(function() {
        caja.animate({
            marginLeft: '500px',
            fontSize: '70px',
            height: '200px'
        }, 'slow').animate({
            marginTop: '50px',
            borderRadius: '500px',
            fontSize: '30px',
            height: '250px',
        }, 'slow', function() {
            console.log('Callback fucntion')
        });
    });

    //Callback de efectos

    //Fast
    //Normal
    //Slow
});