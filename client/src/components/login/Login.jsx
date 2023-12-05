import "./login.css";

export default function Login() {
  return (
    <>
      <form className="container">
        <h2>Welcome home, player!</h2>
        <label htmlFor="email">Email:</label>
        <input
          className="login-form-input"
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          className="login-form-input"
          autoComplete="on"
          type="password"
          id="password"
          name="password"
        />
        <div>
          <button className="login-form-btn" type="submit">
            Login
          </button>
        </div>
        <div className="login-extra-links">
          <a href="#">New to GameShop?</a>
          <span>|</span>
          <a href="#">Sign up now!</a>
        </div>
      </form>
    </>
  );
}
