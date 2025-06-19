// Redux/store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
// import { postsReducer } from "./postReduser";
import { userReducer } from "./reducer";

// var rootReducer = combineReducers({
//   users: userReducer,
// });

var store = createStore(userReducer, applyMiddleware(thunk));

export default store;
