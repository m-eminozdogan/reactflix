import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <input type="email" placeholder="email" className="loginInput" />
        <input type="password" placeholder="password" className="loginInput" />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}
