import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);

  const LoginCheck = ({ children }) => {
    return user ? children : "";
  };

  return (
    <>
      <Router>
        <div className="App">
          <LoginCheck>
            <Topbar />
          </LoginCheck>
          <div className="container">
            <LoginCheck>
              <Sidebar />
            </LoginCheck>
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/users"
                element={user ? <UserList /> : <Navigate to="/login" />}
              />
              <Route
                path="/user/:userId"
                element={user ? <User /> : <Navigate to="/login" />}
              />
              <Route
                path="/newUser"
                element={user ? <NewUser /> : <Navigate to="/login" />}
              />
              <Route
                path="/movie/:movieId"
                element={user ? <Movie /> : <Navigate to="/login" />}
              />
              <Route
                path="/newMovie"
                element={user ? <NewMovie /> : <Navigate to="/login" />}
              />
              <Route
                path="/movies"
                element={user ? <MovieList /> : <Navigate to="/login" />}
              />
               <Route
                path="/list/:listId"
                element={user ? <List /> : <Navigate to="/login" />}
              />
              <Route
                path="/newList"
                element={user ? <NewList /> : <Navigate to="/login" />}
              /> 
              <Route
                path="/lists"
                element={user ? <ListList /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
