import { STATUS_FLOWS, FETCH_FLOWS, MESSAGE_FLOW } from "constants/types/flows";

const initialState = {
  data: {},
  status: "idle",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_FLOWS:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_FLOWS:
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };

    case MESSAGE_FLOW:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };

    default:
      return state;
  }
}
