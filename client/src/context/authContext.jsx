import { createContext, useEffect, useState } from "react";
import * as authService from "../services/authService";
import { useLocation, useNavigate } from "react-router-dom";
import Path from "../paths";
import formValidator from "../utils/formValidator";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");
    return {};
  });
  const [authValidationErrors, setAuthValidationErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setAuthValidationErrors({});
  }, [location.pathname]);

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);

      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);
      navigate(Path.Home);
    } catch (err) {
      setAuthValidationErrors({ login: err.message });
    }
  };

  const registerSubmitHandler = async (values) => {
    const { validateValues } = formValidator(values, {
      email: { required: true },
      username: { required: true, minLength: 3 },
      password: { required: true, minLength: 6 },
      "confirm-password": { required: true, minLength: 6 },
    });

    const errors = validateValues();
    if (Object.keys(errors).length > 0) {
      setAuthValidationErrors(errors);
      return;
    }
    try {
      const result = await authService.register(
        values.email,
        values.password,
        values.username
      );

      setAuthValidationErrors({});
      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);
      navigate(Path.Home);
    } catch (err) {
      setAuthValidationErrors({ register: err.message });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setAuth({});
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    username: auth.username,
    userId: auth._id,
    isAuthenticated: !!auth.email,
    authValidationErrors,
  };

  return (
    <>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </>
  );
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
