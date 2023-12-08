import * as request from "./request";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password,
  });
  return result;
};

export const register = async (email, password, username) => {
  const result = await request.post(`${baseUrl}/register`, {
    email,
    password,
    username,
  });
  return result;
};

export const logout = async () => {
  await request.get(`${baseUrl}/logout`);
};
