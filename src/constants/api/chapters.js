import axios from "configs/axios";
export default {
  create: (data) => axios.post("/chapters", data),
  delete: (id) => axios.delete(`/chapters/${id}`),
};
