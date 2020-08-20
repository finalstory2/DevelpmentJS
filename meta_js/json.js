'use strict'

//JSON =- Javescript Object Model


var pelicula = {
    titulo: 'Batman comienza',
    year: 2018,
    pais: 'alemania'
}

var movies = [
    { titulo: 'jose perez', year: 2019, pais: francia },
    pelicula
];

var movie;
for (movie in movies) {
    movies[movie].titulo;
}

var country = pelicula.pais;