import axios from "configs/axios";
export default {
  details: (slug) => axios.get(`/courses/${slug}`).then((res) => res.data),

  join: (id) => axios.post("/my-courses", { course_id: id }),
  mine: () => axios.get("/my-courses"),
};
