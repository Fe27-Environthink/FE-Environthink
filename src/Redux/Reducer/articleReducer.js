import { START_FETCHING, SUCCESS_GET_ARTICLE } from "../Action/articleAction";

const initialState = {
  article: [],
  isLoading: false,
};

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case SUCCESS_GET_ARTICLE:
            return {
                article: [...action.payload],
                isLoading: false,
        };

        default:
            return state;
        }
    }
  export default articleReducer;