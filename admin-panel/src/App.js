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
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        {window.location.pathname !== "/login" ? <Topbar /> : ""}
        <div className="container">
          {window.location.pathname !== "/login" ? <Sidebar /> : ""}
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/movies" element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
