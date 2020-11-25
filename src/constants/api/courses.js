import axios from "configs/axios";
export default {
  details: (slug) => axios.get(`/courses/${slug}`).then((res) => res.data),
  create: (data) => axios.post("/courses", data),
  edit: (id, data) => axios.put(`/courses/${id}`, data),
  delete: (id) => axios.delete(`/courses/${id}`),
  getBasedOnMentor: (mentor_id) =>
    axios.get("/courses", { params: { mentor_id: mentor_id } }),

  join: (id) => axios.post("/my-courses", { course_id: id }),
  mine: () => axios.get("/my-courses"),
};
