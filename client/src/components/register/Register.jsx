import "./register.css";

import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";
import Path from "../../paths";
import ErrorMessage from "../error-message/ErrorMessage";

const RegisterFormKeys = {
  Email: "email",
  Username: "username",
  Password: "password",
  PasswordConfirm: "confirm-password",
};

export default function Register() {
  const { registerSubmitHandler, authValidationErrors } =
    useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.PasswordConfirm]: "",
  });

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <h2>Become family member!</h2>
        <label htmlFor="username">Username</label>
        <input
          className="register-form-input"
          placeholder="Username..."
          autoComplete="on"
          type="text"
          id="username"
          name={RegisterFormKeys.Username}
          value={values[RegisterFormKeys.Username]}
          onChange={onChange}
        />
        <ErrorMessage
          typeError={RegisterFormKeys.Username}
          authValidationErrors={authValidationErrors}
        />
        <label htmlFor="email">Email</label>
        <input
          className="register-form-input"
          placeholder="example@gamehaven.com"
          autoComplete="on"
          type="email"
          id="email"
          name={RegisterFormKeys.Email}
          value={values[RegisterFormKeys.Email]}
          onChange={onChange}
        />
        <ErrorMessage
          typeError={RegisterFormKeys.Email}
          authValidationErrors={authValidationErrors}
        />
        <label htmlFor="password">Password</label>
        <input
          className="register-form-input"
          placeholder="Password..."
          autoComplete="on"
          type="password"
          id="password"
          name={RegisterFormKeys.Password}
          value={values[RegisterFormKeys.Password]}
          onChange={onChange}
        />
        <ErrorMessage
          typeError={RegisterFormKeys.Password}
          authValidationErrors={authValidationErrors}
        />
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          className="register-form-input"
          placeholder="Confirm Password..."
          autoComplete="on"
          type="password"
          id="confirm-password"
          name={RegisterFormKeys.PasswordConfirm}
          value={values[RegisterFormKeys.PasswordConfirm]}
          onChange={onChange}
        />
        <ErrorMessage
          typeError={RegisterFormKeys.PasswordConfirm}
          authValidationErrors={authValidationErrors}
        />
        <ErrorMessage
          typeError={"register"}
          authValidationErrors={authValidationErrors}
        />
        <div>
          <button className="register-form-btn" type="submit">
            Register
          </button>
        </div>
        <div className="register-extra-links">
          <Link to={Path.Login}>Already have an account?</Link>
          <span>|</span>
          <Link to={Path.Login}>Login</Link>
        </div>
      </form>
    </>
  );
}
