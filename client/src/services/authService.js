import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => {
  const result = request.post(`${baseUrl}/login`, {
    email,
    password,
  });
  return result;
};

export const register = (email, password, username) => {
  const result = request.post(`${baseUrl}/register`, {
    email,
    password,
    username,
  });
  return result;
};

export const logout = () => {
  const result = request.get(`${baseUrl}/logout`);
  return result;
};
