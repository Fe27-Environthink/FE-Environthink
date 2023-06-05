import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import SearchReducer from "./Reducer/SearchReducer";

const rootReducer = combineReducers({ Reducer, SearchReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
