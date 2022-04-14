const UserReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS_START":
      return {
        users: null,
        isFetching: true,
        error: false,
      };
    case "GET_USERS_SUCCESS":
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_USERS_FAIL":
      return {
        users: null,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default UserReducer;
