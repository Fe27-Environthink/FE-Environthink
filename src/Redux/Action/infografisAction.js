import axios from "axios";
export const START_INFOGRAFIS = "START_INFOGRAFIS";
export const SUCCESS_GET_INFOGRAFIS = "SUCCESS_GET_INFOGRAFIS";

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

export const addInfografisAdmin = (addData) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");

      const formData = new FormData();
      formData.append("judul", addData.judul);
      formData.append("gambar", addData.gambar);

      const response = await axios.post(
        "https://api-fe27be9-environthink.cyclic.app/infografis",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // Dispatch action lainnya jika diperlukan
      // dispatch(namaAction(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
