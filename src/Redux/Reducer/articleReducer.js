import { START_FETCHING, SUCCESS_GET_ARTICLE, SUCCESS_GET_DETAIL_ARTICLE } from "../Action/articleAction";

const initialState = {
  article: [],
  isLoading: false,
  detailArticle: []
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
        case SUCCESS_GET_DETAIL_ARTICLE:
            console.log(action.payload)
            return{
                ...state,
                detailArticle:action.payload,
                isLoading:false
            } 
        default:
            return state;
        }
    }
  export default articleReducer;