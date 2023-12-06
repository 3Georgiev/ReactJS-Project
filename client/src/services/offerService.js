import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/offers";

export const getAll = () => {
  const result = request.get(baseUrl);
  return result;
};

export const getOne = (offerId) => {
  const result = request.get(`${baseUrl}/${offerId}`);
  return result;
};

export const create = (offerData) => {
  const result = request.get(baseUrl, {
    ...offerData,
  });
  return result;
};

export const remove = (offerId) => {
  const result = request.remove(`${baseUrl}/${offerId}`);
  return result;
};

export const edit = (offerId, offerData) => {
  const result = request.put(`${baseUrl}/${offerId}`, {
    ...offerData,
  });
  return result;
};
