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
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

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
                path="/product/:productId"
                element={user ? <Product /> : <Navigate to="/login" />}
              />
              <Route
                path="/newProduct"
                element={user ? <NewProduct /> : <Navigate to="/login" />}
              />
              <Route
                path="/movies"
                element={user ? <MovieList /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
