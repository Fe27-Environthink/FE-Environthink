import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import HomepageReducer from "./Reducer/HomepageReducer";

const rootReducer = combineReducers({ Reducer, HomepageReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
