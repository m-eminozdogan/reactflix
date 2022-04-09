const ListReducer = (state, action) => {
  switch (action.type) {
    ///LISTING MOVIES
    case "GET_LISTS_START":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    case "GET_LISTS_SUCCESS":
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_LISTS_FAIL":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };
    ///CREATE MOVIE
    // case "CREATE_MOVIE_START":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case "CREATE_MOVIE_SUCCESS":
    //   return {
    //     movies: [...state.movies, action.payload],
    //     isFetching: false,
    //     error: false,
    //   };
    // case "CREATE_MOVIE_FAIL":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };
    ///UPDATE MOVIE
    case "UPDATE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_LIST_SUCCESS":
      return {
        lists: state.lists.map(
          (list) => list._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_LIST_FAIL":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    ///DELETING MOVIE
    case "DELETE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_LIST_SUCCESS":
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_LIST_FAIL":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default ListReducer;
