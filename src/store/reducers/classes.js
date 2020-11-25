import {
  STATUS_CLASS,
  FETCH_CLASS,
  CHANGE_STATUS,
} from "constants/types/classes";

const initialState = {
  data: {},
  status: "idle",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_CLASS:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_CLASS:
      return {
        data: action.payload,
        status: "ok",
      };

    case CHANGE_STATUS:
      return {
        data: {
          ...state.data,
          status: action.payload,
        },
        status: "ok",
      };

    default:
      return state;
  }
}
