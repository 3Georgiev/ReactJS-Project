import { createContext, useState } from "react";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");
    return {};
  });

  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(
      values.email,
      values.password,
      values.username
    );

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate(Path.Home);
    console.log(result);
  };

  const logoutHandler = async () => {
    await authService.logout();
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.email,
  };

  return (
    <>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </>
  );
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
