import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const getAll = async () => {
  return await request.get(`${baseUrl}`);
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
