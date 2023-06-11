import axios from "axios";
export const START_FETCHING = "START_FETCHING";
export const SUCCESS_GET_ARTICLE = "SUCCESS_GET_ARTICLE";
export const SUCCESS_GET_DETAIL_ARTICLE = "SUCCESS_GET_DETAIL_ARTICLE";

const startFetching = () => {
  return {
    type: START_FETCHING,
  };
};

const successGetArticle = (payload) => {
  return {
    type: SUCCESS_GET_ARTICLE,
    payload,
  };
};

export const successGetDetail = (payload) => ({
  type: SUCCESS_GET_DETAIL_ARTICLE,
  payload,
});

export const getArticle = () => {
  console.log("masuk ke get artikel");
  return async (dispatch) => {
    dispatch(startFetching());
    const url = import.meta.env.VITE_API_ARTICLE;
    const result = await axios(url);
    dispatch(successGetArticle(result.data));
  };
};

export const getArticleDetail = (id) => {
  return async (dispatch) => {
    dispatch(startFetching());
    const url = `${import.meta.env.VITE_API_ARTICLE}/${id}`;
    const result = await axios(url);
    console.log(result.data);
    dispatch(successGetDetail(result.data));
  };
};

