import { combineReducers } from "redux";
import users from "./users";
import courses from "./courses";
import tools from "./tools";

export default combineReducers({
  users,
  courses,
  tools,
});
