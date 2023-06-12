import { GET_TOTAL } from "../Action/HomepageAdminAction";

const initialState = {
  totalArticle: null,
  totalAksi: null,
  totalInfografis: null,
};

const HomepageAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      return {
        ...state,
        totalArticle: action.data.lengthArticle,
        totalAksi: action.data.lengthAksi,
        totalInfografis: action.data.lengthInfografis,
      };

    default:
      return state;
  }
};

export default HomepageAdminReducer;
