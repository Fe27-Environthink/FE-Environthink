import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import articleReducer from "./Reducer/articleReducer";
import infografisReducer from './Reducer/infografisReducer';
import komentarReducer from './Reducer/komentarReducer';

const rootReducer = combineReducers({ Reducer, articleReducer, infografisReducer, komentarReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
