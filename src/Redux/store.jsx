import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import AksiReducer from './Reducer/AksiReducer';

const rootReducer = combineReducers({ Reducer,AksiReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
