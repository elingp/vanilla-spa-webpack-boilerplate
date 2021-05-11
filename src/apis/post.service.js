import { get, post, put, destroy } from "./base.service";

const PostService = {
  getAll: () => get("/posts"),
  get: (id) => get(`/posts/${id}`),
  create: (params) => post("/posts", params),
  update: (id, params) => put(`/posts/${id}`, params),
  delete: (id) => destroy(`/posts/${id}`),
};

export default PostService;
