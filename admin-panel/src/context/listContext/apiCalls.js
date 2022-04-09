import axios from "axios";
import {
  deleteListFail,
  deleteListStart,
  deleteListSuccess,
  getListsFail,
  getListsStart,
  getListsSuccess,
  updateListStart,
  updateListSuccess,
  updateListFail,
} from "./ListActions";
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
/////UPDATE MOVIE
export const updateList = async (list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put("/lists/" + list._id, list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFail());
  }
};
/////DELETE MOVIE
export const deleteList = async (dispatch, id) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFail());
  }
};
