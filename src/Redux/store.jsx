import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import DonasiReducer from "./Reducer/DonasiReducer";

const rootReducer = combineReducers({ Reducer, DonasiReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
