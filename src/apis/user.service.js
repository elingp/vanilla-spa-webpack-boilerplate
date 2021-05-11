import { get, post, put, destroy } from "./base.service";

const UserService = {
  getAll: () => get("/users"),
  get: (id) => get(`/users/${id}`),
  create: (params) => post("/users", params),
  update: (id, params) => put(`/users/${id}`, params),
  delete: (id) => destroy(`/users/${id}`),
};

export default UserService;
