import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/register" />}
          />

          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {user && (
            <>
              <Route
                path="/series"
                element={!user ? <Login /> : <Home type="series" />}
              />
              <Route
                path="/movies"
                element={!user ? <Login /> : <Home type="movie" />}
              />
              <Route path="/watch" element={!user ? <Login /> : <Watch />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
