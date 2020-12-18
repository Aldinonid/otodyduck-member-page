import axios from "configs/axios";
export default {
  create: (data) => axios.post("/lessons", data),
  delete: (id) => axios.delete(`/lessons/${id}`),
};
