import axios from "configs/axios";

export default {
  login: (credentials) => axios.post("/users/login", credentials),
  register: (payload) => axios.post("/users/register", payload),
  refresh: (credentials) => axios.post("/refresh-tokens", credentials),

  details: () => axios.get("/users/user"),
  all: () => axios.get("/users"),
  get: (id) => axios.get(`/users/${id}`),
  edit: (id, data) => axios.put(`/users/${id}`, data),
  delete: (id) => axios.delete(`/users/${id}`),
  update: (data) => axios.put("/users", data),
  logout: () => axios.post("/users/logout"),
};
