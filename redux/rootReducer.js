import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  userList: UserReducer,
});

export default rootReducer;
