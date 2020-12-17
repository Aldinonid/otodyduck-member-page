import axios from "configs/axios";
export default {
  details: (slug) => axios.get(`/flow/${slug}`),
  get: () => axios.get("/flow"),
  create: (data) => axios.post("/flow", data),
  edit: (id, data) => axios.put(`/flow/${id}`, data),
  delete: (id) => axios.delete(`/flow/${id}`),
};
