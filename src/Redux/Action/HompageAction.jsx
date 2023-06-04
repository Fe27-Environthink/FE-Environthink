import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";

const actionFetch = (data) => {
  const payload = [];
  for (let i = 0; i < 3 && i < data.length; i++) {
    payload.push(data[i]);
  }

  return {
    type: FETCH_DATA,
    payload,
  };
};

export const FetchActicle = (indexs) => {
  return async (dispatch) => {
    axios
      .get("https://644b56f917e2663b9ded34b8.mockapi.io/article")
      .then((response) => {
        dispatch(actionFetch(response.data));
      });
  };
};
