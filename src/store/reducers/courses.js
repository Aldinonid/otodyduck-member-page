import {
  STATUS_COURSES,
  FETCH_COURSES,
  WATCH_COURSE,
  MESSAGE_COURSE,
} from "constants/types/courses";

const initialState = {
  data: {},
  total: 0,
  status: "idle",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_COURSES:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_COURSES:
      return {
        ...state,
        data:
          action.payload?.reduce?.((acc, item) => {
            acc[item.course_id] = item;
            return acc;
          }, {}) ?? {},
        total: action.payload?.length ?? 0,
        status: "ok",
      };

    case WATCH_COURSE:
      return {
        ...state,
        status: action.payload,
      };

    case MESSAGE_COURSE:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };

    default:
      return state;
  }
}
