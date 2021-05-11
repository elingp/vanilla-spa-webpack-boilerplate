import { get, post, put, destroy } from "./base.service";

const PhotoService = {
  getAll: () => get("/photos"),
  get: (id) => get(`/photos/${id}`),
  create: (params) => post("/photos", params),
  update: (id, params) => put(`/photos/${id}`, params),
  delete: (id) => destroy(`/photos/${id}`),
};

export default PhotoService;
