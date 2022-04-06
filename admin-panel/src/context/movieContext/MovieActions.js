// GET ALL MOVIES
export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});
export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});
export const getMoviesFail = () => ({
  type: "GET_MOVIES_FAIL",
});
// CREATE MOVIE
export const createMovieStart = () => ({
  type: "CREATE_MOVIESSTART",
});
export const createMovieSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});
export const createMovieFail = () => ({
  type: "CREATE_MOVIE_FAIL",
});
///DELETE MOVIE
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});
export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});
export const deleteMovieFail = () => ({
  type: "DELETE_MOVIE_FAIL",
});
