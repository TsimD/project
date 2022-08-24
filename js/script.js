"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB(hiden) {
    if (!hiden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGeneres() {
    for (let i = 0; i < 3; i++) {
      let gener = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase();
      if (gener == "" || gener === null) {
        console.log("Вы ввели не коректные данные");
        i--;
      } else {
        personalMovieDB.genres[i] = gener;
      }
    }

    personalMovieDB.genres.forEach((item, i)=>{
      console.log(`Любимыйжанр жанр № ${i+1} - это ${item}`);
    });
  },
  start() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
};
personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGeneres();

personalMovieDB.showMyDB(personalMovieDB.privat);
