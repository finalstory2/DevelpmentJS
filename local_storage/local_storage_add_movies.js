'use strict'

window.addEventListener('load', () => {
    var form = document.querySelector("#form_movies");
    form.addEventListener('submit', () => {
        var title = document.querySelector("#addmovie").value;
        if (true) {
            localStorage.setItem(title, title);
        } else {
            alert('The system can not save your movie');
            console.log(title.lenght);
        }

    });
    for (var i in localStorage) {
        console.log(localStorage[i]);
        var ul = document.querySelector('#movie_list');

        if (typeof(localStorage[i]) == 'string') {
            var li = document.createElement('li');
            li.append(localStorage[i]);
            ul.append(li);
        }

    }
})