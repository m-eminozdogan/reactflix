import axios from "axios";
import { getUsersFail, getUsersStart, getUsersSuccess } from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
    //console.log(res.data);
   // res.data.isAdmin && dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFail());
  }
};
