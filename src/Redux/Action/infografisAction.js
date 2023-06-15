import axios from "axios";
import Swal from "sweetalert2";
export const START_INFOGRAFIS = "START_INFOGRAFIS"
export const SUCCESS_GET_INFOGRAFIS = "SUCCESS_GET_INFOGRAFIS"


const startInfografis = () => {
  return {
    type: START_INFOGRAFIS,
  };
};

const successGetInfografis = (payload) => {
  return {
    type: SUCCESS_GET_INFOGRAFIS,
    payload,
  };
};

export const getInfografis = () => {
  return async (dispatch) => {
    dispatch(startInfografis());
    const url = import.meta.env.VITE_API_INFOGRAFIS;
    const result = await axios(url);
    dispatch(successGetInfografis(result.data));
  };
};



export const addInfografis = (newData, id, token) => async (dispatch) => {
    console.log("cek data yang dikirim", newData);
    console.log("cek token ", token);
    const url = import.meta.env.VITE_API_INFOGRAFIS;
    try {
      await axios.post(url, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getInfografis(id));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan!",
        text: `${error}`,
      });
      console.log(error)
    }
  };
  
