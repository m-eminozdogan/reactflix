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
    // ///UPDATE MOVIE
    // case "UPDATE_MOVIE_START":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case "UPDATE_MOVIE_SUCCESS":
    //   return {
    //     movies: state.movies.map(
    //       (movie) => movie._id === action.payload._id && action.payload
    //     ),
    //     isFetching: false,
    //     error: false,
    //   };
    // case "UPDATE_MOVIE_FAIL":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };
    // ///DELETING MOVIE
    // case "DELETE_MOVIE_START":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };
    // case "DELETE_MOVIE_SUCCESS":
    //   return {
    //     movies: state.movies.filter((movie) => movie._id !== action.payload),
    //     isFetching: false,
    //     error: false,
    //   };
    // case "DELETE_MOVIE_FAIL":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };
    default:
      return { ...state };
  }
};
export default ListReducer;
