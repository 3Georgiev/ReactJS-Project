import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  const values = {
    loginSubmitHandler,
  };

  return (
    <>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthContext;
