import axios from "axios";
import { getListsFail, getListsStart, getListsSuccess } from "./ListActions";
///GET MOVIES
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFail());
  }
};
// /////CREATE MOVIE
// export const createMovie = async (movie, dispatch) => {
//   dispatch(createMovieStart());
//   try {
//     const res = await axios.post("/movies/", movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(createMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(createMovieFail());
//   }
// };
// /////UPDATE MOVIE
// export const updateMovie = async (movie, dispatch) => {
//   dispatch(updateMovieStart());
//   try {
//     const res = await axios.put("/movies/" + movie._id, movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(updateMovieFail());
//   }
// };
// /////DELETE MOVIE
// export const deleteMovie = async (dispatch, id) => {
//   dispatch(deleteMovieStart());
//   try {
//     await axios.delete("/movies/" + id, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(deleteMovieSuccess(id));
//   } catch (err) {
//     dispatch(getMoviesFail());
//   }
// };
