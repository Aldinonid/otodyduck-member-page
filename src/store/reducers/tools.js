import { STATUS_TOOLS, FETCH_TOOLS } from "constants/types/tools";

const initialState = {
  data: {},
  status: "idle",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_TOOLS:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_TOOLS:
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };

    default:
      return state;
  }
}
