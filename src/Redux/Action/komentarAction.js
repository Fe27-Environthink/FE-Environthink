import axios from "axios";
export const START_KOMENTAR = "START_KOMENTAR";
export const SUCCESS_GET_KOMENTAR = "SUCCESS_GET_KOMENTAR";

const startKomentar = () => {
  return {
    type: START_KOMENTAR,
  };
};

const successGetKomentar = (payload) => {
  return {
    type: SUCCESS_GET_KOMENTAR,
    payload,
  };
};

export const getKomentar = (id) => {
  return async (dispatch) => {
    dispatch(startKomentar());
    const url = `${import.meta.env.VITE_API_ARTICLE}/${id}/komentar`;
    const result = await axios(url);
    dispatch(successGetKomentar(result.data.result));
  };
};

export const addKomentar = (newData, id,token) => async (dispatch) => {
  console.log("cek data yang dikirim",newData);
  console.log("cek token ",token);
  const json = JSON.stringify(newData);
  const url = `https://api-fe27be9-environthink.cyclic.app/komentar?artikelId=${id}`;
  await axios.post(url, newData, {
    headers: {
      'Authorization':`Bearer ${token} `
    }
  })
  dispatch(getKomentar(id));
  console.log(newData);
};

export const deleteKomentar = (data, id) => async (dispatch) => {
  const url = `${import.meta.env.VITE_API_ARTICLE}/${id}/komentar/${data}`;
  await axios.delete(url);
  dispatch(getKomentar(id));
};

export const editKomentar = (data, id) => async (dispatch) => {
  const url = `${import.meta.env.VITE_API_ARTICLE}/${id}/komentar/${data.id}`;
  await axios.patch(url, data);
  dispatch(getKomentar(id));
};
