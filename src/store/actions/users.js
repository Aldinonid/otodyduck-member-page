import {
  POPULATE_PROFILE,
  STATUS_USER,
  FETCH_USER,
} from "constants/types/users";

export const populateProfile = (profile = {}) => ({
  type: POPULATE_PROFILE,
  payload: profile,
});

export const statusUser = (status) => ({
  type: STATUS_USER,
  payload: status,
});

export const fetchUser = (user) => ({
  type: FETCH_USER,
  payload: user,
});
