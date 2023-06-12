import axios from "axios";

export const GET_TOTAL = "GET_TOTAL";

const GetTotalContent = (
  lengthArticle,
  lengthAksi,
  lengthInfografis,
  lengthDonasi
) => {
  const data = { lengthArticle, lengthAksi, lengthInfografis, lengthDonasi };
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
    const urlDonasi = import.meta.env.VITE_API_DONASI;

    const resultArticle = await axios(urlArticle);
    const resultAksi = await axios(urlAksi);
    const resultInfografis = await axios(urlInfografis);
    const resultDonasi = await axios(urlDonasi);

    dispatch(
      GetTotalContent(
        resultArticle.data.length,
        resultAksi.data.length,
        resultInfografis.data.length,
        resultDonasi.data.length
      )
    );
  };
};
