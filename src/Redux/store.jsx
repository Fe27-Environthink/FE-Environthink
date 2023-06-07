import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import articleReducer from "./Reducer/articleReducer";
import infografisReducer from './Reducer/infografisReducer';

const rootReducer = combineReducers({ Reducer, articleReducer, infografisReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
