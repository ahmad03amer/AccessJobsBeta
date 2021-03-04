import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import jobReducer from "./jobReducer";//3

export default combineReducers({
  errors: errorReducer,
  job: jobReducer
});
