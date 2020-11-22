import { STATUS_TOOLS, FETCH_TOOLS } from "constants/types/tools";

export const statusTools = (status) => ({
  type: STATUS_TOOLS,
  payload: status,
});

export const fetchTools = (tools) => ({
  type: FETCH_TOOLS,
  payload: tools,
});
