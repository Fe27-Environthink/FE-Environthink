import axios from "axios";

export const GET_TOTAL = "GET_TOTAL";

const GetTotalContent = (lengthArticle, lengthAksi, lengthInfografis) => {
  const data = { lengthArticle, lengthAksi, lengthInfografis };
  return {
    type: GET_TOTAL,
    data,
  };
};

export const getAPI = () => {
  return async (dispatch) => {
    const urlArticle = import.meta.env.VITE_API_ARTICLE;
    const urlAksi = import.meta.env.VITE_API_AKSI;
    const urlInfografis = import.meta.env.VITE_API_INFOGRAFIS;

    const resultArticle = await axios(urlArticle);
    const resultAksi = await axios(urlAksi);
    const resultInfografis = await axios(urlInfografis);

    dispatch(
      GetTotalContent(
        resultArticle.data.length,
        resultAksi.data.length,
        resultInfografis.data.length
      )
    );
  };
};
