import { get, post, put, destroy } from "./base.service";

const TodoService = {
  getAll: () => get("/todos"),
  get: (id) => get(`/todos/${id}`),
  create: (params) => post("/todos", params),
  update: (id, params) => put(`/todos/${id}`, params),
  delete: (id) => destroy(`/todos/${id}`),
};

export default TodoService;
