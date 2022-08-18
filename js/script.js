"use strict";

const numberOfFilms= +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    private: false,

};
let filmName;
let filmPoint;
for(let i=0; i<2; i++){
    filmName=prompt("Один из последних просмотренных фильмов?");
    filmPoint=+prompt("На сколько оцените его?");
    personalMovieDB.movies[filmName]=filmPoint;
};

console.log(personalMovieDB);