export default function Login() {
  return (
    <>
      <form className="container">
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input className="form-input" type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input
          className="form-input"
          autoComplete="on"
          type="password"
          id="password"
          name="password"
        />
        <div>
          <button className="form-btn" type="submit">
            Login
          </button>
        </div>
        <div className="extra-links">
          <a href="#">New to GameShop?</a>
          <span>|</span>
          <a href="#">Sign up now!</a>
        </div>
      </form>
    </>
  );
}
