import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";

const rootReducer = combineReducers({ Reducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
