/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies) {
  this.name = name;
  this.watchedMovies = watchedMovies;
  this.watchedMovies.toString = function () {
    return watchedMovies.reduce((a, el, ind) => a + (ind + 1) + " " + el.title, '');
  }
}

Person.prototype.watchMovie = function (movie) {
  if (!this.watchedMovies.includes(movie)) {
    this.watchedMovies.push(movie);
  }
  movie.play();
};

// Person.prototype.toString = function () {
//   return this.watchedMovies.reduce((a, el, ind) => a + (ind + 1) + " " + el.title, '')
// }

module.exports = { Person };


// const emma = new Person('Emma', ['rapunces', 'frozen']);
// let prettyString = 'The movies which Emma has watched:\n' + emma.watchedMovies;
// // console.log(emma.watchedMovies.toString());
// console.log(prettyString);
