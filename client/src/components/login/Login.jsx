import "./login.css";
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";
import Path from "../../paths";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <h2>Welcome home, player!</h2>
        <label htmlFor="email">Email</label>
        <input
          className="login-form-input"
          placeholder="Your email..."
          type="email"
          id="email"
          name={LoginFormKeys.Email}
          value={values[LoginFormKeys.Email]}
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="login-form-input"
          placeholder="Your password..."
          autoComplete="on"
          type="password"
          id="password"
          name={LoginFormKeys.Password}
          value={values[LoginFormKeys.Password]}
          onChange={onChange}
        />
        <div>
          <button className="login-form-btn" type="submit">
            Login
          </button>
        </div>
        <div className="login-extra-links">
          <Link to={Path.Register}>New to GameHaven?</Link>
          <span>|</span>
          <Link to={Path.Register}>Sign up now!</Link>
        </div>
      </form>
    </>
  );
}
