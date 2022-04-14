import UserReducer from "./UserReducer";
import { createContext, useEffect, useReducer } from "react";
const INITIAL_STATE = {
  users: null,
  isFetching: false,
  error: false,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.user));
  // }, [state.user]);
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
