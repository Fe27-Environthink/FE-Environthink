import axios from "axios";
import Swal from "sweetalert2";
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

export const addKomentar = (newData, id, token) => async (dispatch) => {
  console.log("cek data yang dikirim", newData);
  console.log("cek token ", token);
  const json = JSON.stringify(newData);
  const url = `https://api-fe27be9-environthink.cyclic.app/komentar?artikelId=${id}`;
  try {
    await axios.post(url, newData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getKomentar(id));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: `${error}`,
    });
  }
};

export const deleteKomentar = (komentar_id, id, token) => async (dispatch) => {
  console.log("cek data yang dikirim", komentar_id);
  console.log("cek token ", token);


  const url = `https://api-fe27be9-environthink.cyclic.app/komentar/${komentar_id}`;

  try {
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getKomentar(id));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: `${error}`,
    });
    console.log(error);
  }

};

export const editKomentar = (data, id, token) => async (dispatch) => {
  const url = `${import.meta.env.VITE_API_ARTICLE}/${id}/komentar/${
    data.komentar_id
  }`;
  try {
    await axios.patch(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getKomentar(id));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: `${error}`,
    });
  }
};
