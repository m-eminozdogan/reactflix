import { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isFetching, dispatch } = useContext(AuthContext);
  function handleLogin(e) {
    e.preventDefault();
    login({ email, password }, dispatch);
  }
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="email"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}
