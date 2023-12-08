import * as request from "./request";

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async (offerId) => {
  return await request.get(`${baseUrl}?where=offerId%3D%22${offerId}%22`);
};
export const create = async (offerId, commentData) => {
  const result = await request.post(baseUrl, {
    ...commentData,
    offerId,
  });
  return result;
};

export const remove = async (commentId) => {
  const result = await request.remove(`${baseUrl}/${commentId}`);
  return result;
};
