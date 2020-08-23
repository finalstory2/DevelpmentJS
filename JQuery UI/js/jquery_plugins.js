$(document).ready(function() {
    //tooltip
    $(document).tooltip();
    //dialog

    $('#btn_see_popup').click(function() {
        $('#popup').dialog();
    });

    //date picker
    $('#calendar').datepiker();
});