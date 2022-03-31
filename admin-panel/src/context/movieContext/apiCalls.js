import axios from "axios";
import {
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFail,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";
///GET MOVIES
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFail());
  }
};
/////DELETE MOVIE
export const deleteMovie = async (dispatch,id) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/"+id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(getMoviesFail());
  }
};


