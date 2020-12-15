import { combineReducers } from "redux";
import users from "./users";
import courses from "./courses";
import tools from "./tools";
import classes from "./classes";
import orders from "./orders";

export default combineReducers({
  users,
  courses,
  tools,
  classes,
  orders,
});
