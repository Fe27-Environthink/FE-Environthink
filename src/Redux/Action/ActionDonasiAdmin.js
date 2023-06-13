import axios from "axios";
import Swal from "sweetalert2";

export const FETCH_DONASI = "FETCH_DONASI";
export const UPDATE_DONASI = "UPDATE_DONASI";

const resultApiDonasi = (data) => {
  return {
    type: FETCH_DONASI,
    data,
  };
};

export const fetchApiDonasi = () => {
  return async (dispatch) => {
    const result = await axios(import.meta.env.VITE_API_DONASI);
    dispatch(resultApiDonasi(result.data));
  };
};

export const updateDataDonasi = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_DONASI}/${data.User_ID}`,
        data
      );
      dispatch(fetchApiDonasi());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan !",
        text: `${error.message}`,
      });
    }
  };
};

export const deleteDataDonasi = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_DONASI}/${id}`);
      dispatch(fetchApiDonasi());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan !",
        text: `${error.message}`,
      });
    }
  };
};
