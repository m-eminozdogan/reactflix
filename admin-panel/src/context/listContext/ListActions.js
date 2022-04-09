// GET ALL MOVIES
export const getListsStart = () => ({
  type: "GET_LISTS_START",
});
export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});
export const getListsFail = () => ({
  type: "GET_LISTS_FAIL",
});
// // CREATE MOVIE
// export const createMovieStart = () => ({
//   type: "CREATE_MOVIE_START",
// });
// export const createMovieSuccess = (movie) => ({
//   type: "CREATE_MOVIE_SUCCESS",
//   payload: movie,
// });
// export const createMovieFail = () => ({
//   type: "CREATE_MOVIE_FAIL",
// });
// // UPDATE MOVIE
// export const updateMovieStart = () => ({
//   type: "UPDATE_MOVIE_START",
// });
// export const updateMovieSuccess = (movie) => ({
//   type: "UPDATE_MOVIE_SUCCESS",
//   payload: movie,
// });
// export const updateMovieFail = () => ({
//   type: "UPDATE_MOVIE_FAIL",
// });
// ///DELETE MOVIE
// export const deleteMovieStart = () => ({
//   type: "DELETE_MOVIE_START",
// });
// export const deleteMovieSuccess = (id) => ({
//   type: "DELETE_MOVIE_SUCCESS",
//   payload: id,
// });
// export const deleteMovieFail = () => ({
//   type: "DELETE_MOVIE_FAIL",
// });
