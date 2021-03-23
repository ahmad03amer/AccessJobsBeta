import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import jobReducer from "./jobReducer";//3
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  job: jobReducer,
  security: securityReducer
});
