$(document).ready(function() {
    reload_links();

    $('#add_button').click(function() {
        $('#menu').append('<li><a href="' + $('#add_link').val() + '" </a></li>');
        reload_links();
    });



});

function reload_links() {
    $('a').each(function(index) {
        var that = $(this);
        var link = $(this).attr('href');
        that.text(link);
    });
}