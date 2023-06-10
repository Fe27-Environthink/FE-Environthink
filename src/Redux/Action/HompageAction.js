import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";

const actionFetch = (data, index) => {
  if (typeof index == "undefined") {
    // console.log("masuk ke undefined");
    const payload = [];
    for (let i = 0; i < 3 && i < data.length; i++) {
      payload.push(data[i]);
    }

    return {
      type: FETCH_DATA,
      payload,
    };
  } else {
    const payload = [];
    for (let i = 0; i < 3 + index && i < data.length; i++) {
      payload.push(data[i]);
    }

    return {
      type: FETCH_DATA,
      payload,
    };
  }
};

export const FetchActicle = (index) => {
  return async (dispatch) => {
    axios
      .get("https://644b56f917e2663b9ded34b8.mockapi.io/article")
      .then((response) => {
        dispatch(actionFetch(response.data, index));
      });
  };
};
