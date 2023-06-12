import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import SearchReducer from "./Reducer/SearchReducer";
import AksiReducer from "./Reducer/AksiReducer";
import HomepageReducer from "./Reducer/HomepageReducer";
import DonasiReducer from "./Reducer/DonasiReducer";
import articleReducer from "./Reducer/articleReducer";
import infografisReducer from "./Reducer/infografisReducer";
import komentarReducer from "./Reducer/komentarReducer";

const rootReducer = combineReducers({
  SearchReducer,
  AksiReducer,
  HomepageReducer,
  DonasiReducer,
  articleReducer,
  infografisReducer,
  komentarReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
