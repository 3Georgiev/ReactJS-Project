import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/offers";

export const getAll = async (viewmore) => {
  if (viewmore) {
    return await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);
  } else {
    return await request.get(
      `${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=6`
    );
  }
};

export const getOne = async (offerId) => {
  const result = await request.get(`${baseUrl}/${offerId}`);
  return result;
};

export const create = async (offerData) => {
  const result = await request.post(baseUrl, {
    ...offerData,
  });
  return result;
};

export const remove = async (offerId) => {
  const result = await request.remove(`${baseUrl}/${offerId}`);
  return result;
};

export const edit = async (offerId, offerData) => {
  const result = await request.put(`${baseUrl}/${offerId}`, {
    ...offerData,
  });
  return result;
};

export const getLatest = async () => {
  const result = await await request.get(
    `${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`
  );

  return result;
};

export const search = async (searchQuery) => {
  const result = await await request.get(
    `${baseUrl}?where=title LIKE %22${searchQuery}%22`
  );

  return result;
};
