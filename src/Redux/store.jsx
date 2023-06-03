import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import articleReducer from "./Reducer/articleReducer";

const rootReducer = combineReducers({ Reducer, articleReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
