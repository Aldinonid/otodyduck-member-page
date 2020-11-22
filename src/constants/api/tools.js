import axios from "configs/axios";
export default {
  getTool: (id) => axios.get(`/tools/${id}`),
  getDetail: (course_id) =>
    axios.get("/tools", { params: { course_id: course_id } }),
  create: (data) => axios.post("/tools", data),
  edit: (id, data) => axios.put(`/tools/${id}`, data),
  get: () => axios.get("/tools"),
  delete: (id) => axios.delete(`/tools/${id}`),
};
