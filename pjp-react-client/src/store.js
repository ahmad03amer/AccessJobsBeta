import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//first thing in the store is the initial state
const initialState = {};

//second the middleware
const middleware = [thunk];

let store;

//if the user open from chrome browser
if (window.navigator.userAgent.includes("Chrome")) {
  //create store parameters are reducer ,initial state and middleware _-_ ... means array es6 syntax
  store = createStore(
    rootReducer,
    initialState, //press inspect element then in redux , instrutions
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState, //press inspect element then in redux , instrutions
    compose(applyMiddleware(...middleware))
  );
}

export default store;
