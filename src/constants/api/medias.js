import axios from "configs/axios";
export default {
  upload: (data) => axios.post(`/media`, data),
};
