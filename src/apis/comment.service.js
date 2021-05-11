import { get, post, put, destroy } from "./base.service";

const CommentService = {
  getAll: () => get("/comments"),
  get: (id) => get(`/comments/${id}`),
  create: (params) => post("/comments", params),
  update: (id, params) => put(`/comments/${id}`, params),
  delete: (id) => destroy(`/comments/${id}`),
};

export default CommentService;
