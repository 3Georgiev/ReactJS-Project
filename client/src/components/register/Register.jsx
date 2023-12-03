export default function Register() {
  return (
    <>
      <form className="container">
        <h2>Register</h2>
        <label htmlFor="username">Username:</label>
        <input
          className="form-input"
          type="text"
          id="username"
          name="username"
        />
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

        <label htmlFor="confirm-password">Confirm password:</label>
        <input
          className="form-input"
          autoComplete="on"
          type="password"
          id="confirm-password"
          name="confirm-password"
        />
        <div>
          <button className="form-btn" type="submit">
            Register
          </button>
        </div>
        <div className="extra-links">
          <a href="#">Already have an account?</a>
          <span>|</span>
          <a href="#">Login</a>
        </div>
      </form>
    </>
  );
}
