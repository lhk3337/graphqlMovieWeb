let movies = [
  { id: 0, name: "holim", score: 20 },
  { id: 1, name: "Alex", score: 30 },
  { id: 2, name: "Lindsay", score: 30 },
  { id: 3, name: "Nathan", score: 25 },
  { id: 4, name: "Christine", score: 30 },
  { id: 5, name: "Kate", score: 24 },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterMovies = movies.filter((movie) => id === movie.id);
  return filterMovies[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  console.log(newMovie);
  return newMovie;
};
