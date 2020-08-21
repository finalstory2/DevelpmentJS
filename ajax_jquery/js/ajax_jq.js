$(document).ready(function() {
    console.log('JQ - OK');
    // $('#data').load('https://reqres.in/api/users?page=2');

    //Method GET
    $.get('https://reqres.in/api/users', { page: 2 }, function(response) {
        response.data.forEach((element, index) => {
            $("#list").append('<li>' + element.first_name + ' ' + element.last_name + '</li>');
        });
    })

    var user = {
        first_name: 'maciel',
        last_name: 'galeano'
    }

    //Method POST

    $.post('https://reqres.in/api/users', user,
        function(response) {
            console.log(response);
            $("#list2").append('<li>' + response.first_name + ' ' + response.last_name + '</li>');
        }
    );

    //Method ayax

    $.$.ajax({
        type: "POST",
        url: "https://reqres.in/api/users",
        data: "user",
        dataType: "json",
        beforeSend: function() {

        },
        success: function(response) {

        },
        timeout: 2000
    });


});