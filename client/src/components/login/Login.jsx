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
          <a href="#">Don't have an account yet?</a>
          <span>|</span>
          <a href="#">Register</a>
        </div>
      </form>
    </>
  );
}
