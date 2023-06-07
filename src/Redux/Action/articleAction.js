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
    const url = "https://644b56f917e2663b9ded34b8.mockapi.io/article";
    const result = await axios(url);
    dispatch(successGetArticle(result.data));
  };
};

export const getArticleDetail = (id) => {
  return async (dispatch) => {
    dispatch(startFetching());
    const url = `https://644b56f917e2663b9ded34b8.mockapi.io/article/${id}`;
    const result = await axios(url);
    console.log(result.data);
    dispatch(successGetDetail(result.data));
  };
};

// export const addTodo = (newTodo) => async (dispatch) => {
//     const url = "https://643e1624c72fda4a0bed5b7f.mockapi.io/todo"
//     await axios.post(url, newTodo)

//     dispatch(getTodo())
// }
