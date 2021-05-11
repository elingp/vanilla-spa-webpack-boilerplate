import { get, post, put, destroy } from "./base.service";

const AlbumService = {
  getAll: () => get("/albums"),
  get: (id) => get(`/albums/${id}`),
  create: (params) => post("/albums", params),
  update: (id, params) => put(`/albums/${id}`, params),
  delete: (id) => destroy(`/albums/${id}`),
};

export default AlbumService;
