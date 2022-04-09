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
export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});
export const updateListSuccess = (movie) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: movie,
});
export const updateListFail = () => ({
  type: "UPDATE_LIST_FAIL",
});
///DELETE MOVIE
export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});
export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});
export const deleteListFail = () => ({
  type: "DELETE_LIST_FAIL",
});
