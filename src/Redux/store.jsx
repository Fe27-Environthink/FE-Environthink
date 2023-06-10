import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer/Reducer";
import AksiReducer from "./Reducer/AksiReducer";

import HomepageReducer from "./Reducer/HomepageReducer";

const rootReducer = combineReducers({ Reducer, AksiReducer, HomepageReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
