import { SEARCH_ARTICLE } from "../Action/SearchAction";

const initialState = {
  result: [],
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLE:
      //   console.log(action.searchResult);
      return {
        result: action.searchResult,
      };
    default:
      return state;
  }
};

export default SearchReducer;
