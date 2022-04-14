export const getUsersStart = () => ({
  type: "GET_USERS_START",
});
export const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: users,
});
export const getUsersFail = () => ({
  type: "GET_USERS_FAIL",
});