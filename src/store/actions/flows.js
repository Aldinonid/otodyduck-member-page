import { STATUS_FLOWS, FETCH_FLOWS, MESSAGE_FLOW } from "constants/types/flows";

export const statusFlows = (status) => ({
  type: STATUS_FLOWS,
  payload: status,
});

export const fetchFlows = (flows) => ({
  type: FETCH_FLOWS,
  payload: flows,
});

export const messageFlow = (message) => ({
  type: MESSAGE_FLOW,
  payload: message,
});
