import axios from "configs/axios";

export default {
  login: (credentials) => axios.post("/users/login", credentials),
  register: (payload) => axios.post("/users/register", payload),
  refresh: (credentials) => axios.post("/refresh-tokens", credentials),

  details: () => axios.get("/users"),
};
