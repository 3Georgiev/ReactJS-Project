import useForm from "../../hooks/useForm";
import "./login.css";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const loginSubmitHandler = () => {
    console.log(values);
  };

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <h2>Welcome home, player!</h2>
        <label htmlFor="email">Email:</label>
        <input
          className="login-form-input"
          type="email"
          id="email"
          name={LoginFormKeys.Email}
          value={values[LoginFormKeys.Email]}
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="login-form-input"
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
          <a href="#">New to GameShop?</a>
          <span>|</span>
          <a href="#">Sign up now!</a>
        </div>
      </form>
    </>
  );
}
