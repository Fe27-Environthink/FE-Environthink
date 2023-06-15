import axios from "axios";
import Swal from "sweetalert2";
export const FATCHING_AKSI = "FATCHING_AKSI";
export const SUCCESS = "SUCCESS";
export const SUCCESS_GET_DETAIL = "SUCCESS_GET_DETAIL";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";
export const fatchingAksi = () => ({
  type: FATCHING_AKSI,
});

export const success = (payload) => ({
  type: SUCCESS,
  payload,
});
export const successGetDetail = (payload,payload2) => ({
  type: SUCCESS_GET_DETAIL,
  payload,
  payload2,
});

export const getDataAksi = () => async (dispatch) => {
  dispatch(fatchingAksi());
  const url =import.meta.env.VITE_API_AKSI
  const result = await axios(url);
  dispatch(success(result.data));
};

export const submitSuccess = () => {
  Swal.fire("Sukses", "Petisi Berhasil Ditandatangani", "success");
  return {
    type: SUBMIT_SUCCESS,
  };
};

// Action creator untuk permintaan POST gagal
export const submitFailure = () => {
  Swal.fire(
    "Email Sudah Digunakan",
    "Silahkan gunakan email yang lain untuk menandatangai petisi ini",
    "error"
  );
  return {
    type: SUBMIT_FAILURE,
  };
};

export const getDetail = (id) => async (dispatch) => {
  console.log("id", id);
  dispatch(fatchingAksi());
  const url = `${import.meta.env.VITE_API_AKSI}/${id}`;

  const result = await axios(url);
  console.log("result get",result.data.result);
  const result1=[]
  if(localStorage.length!=0){
  const url1 = `${import.meta.env.VITE_API_KONTRIBUTOR}?aksiId=${id}`;
  const token =localStorage.getItem('accessToken')
  const result1 = await axios(url1, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  console.log("cek result1",result1);
  dispatch(successGetDetail(result.data.result,result1.data));
}else{
  dispatch(successGetDetail(result.data.result,result1));
}
  
};
export const submitPetisi = (data, id,token) => async (dispatch) => {
  // get data detail
  // const urlDetail = `${import.meta.env.VITE_API_AKSI}${id}`;
  const url = `https://api-fe27be9-environthink.cyclic.app/kontribusi?aksiId=${id}`;
  // const result = await axios(urlDetail);
  console.log(data);
  const json = JSON.stringify(data);
  console.log(json);
try {
  await axios.post(url, data, {
    headers: {
      'Authorization':`Bearer ${token} `
    }
  })
  dispatch(getDetail(id));
  dispatch(submitSuccess());
} catch (error) {
  console.log(error);
  Swal.fire("Submit Failed", `${error.response.data.message}`, "error");
}
  // validasi email yang sama
  // const cekEmail = await axios(url);
  // const emailData = cekEmail.data.find((item) => item.email === data.email);
  // if (emailData) {
  //   dispatch(submitFailure());
  // } else {
  //   //    mengupdate jumlah orang yang mendukung
  //   const dataUpdate = {
  //     numberOfSupport: result.data.numberOfSupport + 1,
  //   };
  //   // mensubmit ke kontributor
  //   await axios.put(urlDetail, dataUpdate);
  //   console.log("cek result", result);

   
  
};

