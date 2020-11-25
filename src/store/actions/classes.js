import {
  STATUS_CLASS,
  FETCH_CLASS,
  CHANGE_STATUS,
} from "constants/types/classes";

export const statusClass = (status) => ({
  type: STATUS_CLASS,
  payload: status,
});

export const fetchClass = (classes) => ({
  type: FETCH_CLASS,
  payload: classes,
});

export const changeStatus = (status) => ({
  type: CHANGE_STATUS,
  payload: status,
});
