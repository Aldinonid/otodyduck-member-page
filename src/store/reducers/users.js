import {
  POPULATE_PROFILE,
  STATUS_USER,
  FETCH_USER,
} from "constants/types/users";

const initialState = {
  data: {},
  userData: {},
  status: "idle",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POPULATE_PROFILE:
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };

    case STATUS_USER:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_USER:
      return {
        ...state,
        userData: action.payload,
        status: "ok",
      };

    default:
      return state;
  }
}
