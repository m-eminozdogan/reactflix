import axios from "axios";
import {
  createMovieFail,
  createMovieStart,
  createMovieSuccess,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFail,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieFail,
  updateMovieStart,
  updateMovieSuccess,
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
/////CREATE MOVIE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies/", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFail());
  }
};
/////UPDATE MOVIE
export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axios.put("/movies/" + movie._id, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFail());
  }
};
/////DELETE MOVIE
export const deleteMovie = async (dispatch, id) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(getMoviesFail());
  }
};
