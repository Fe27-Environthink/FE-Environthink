import axios  from 'axios';
import Swal from 'sweetalert2';
export const FATCHING_AKSI = "FATCHING_AKSI"
export const SUCCESS = "SUCCESS"
export const SUCCESS_GET_DETAIL = "SUCCESS_GET_DETAIL"
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS"
export const SUBMIT_FAILURE = "SUBMIT_FAILURE"
export const fatchingAksi = ()=>(
    {
        type:FATCHING_AKSI
    }
)

export const success =(payload)=>(
    {
        type:SUCCESS,
        payload
    }
)
export const successGetDetail =(payload)=>(
    {
        type:SUCCESS_GET_DETAIL,
        payload
    }
)


export const getDataAksi = ()=> async(dispatch)=>{
    dispatch(fatchingAksi())
   const url="https://647ef495c246f166da8fbfec.mockapi.io/aksi"
   const result =await axios(url)
   dispatch(success(result.data))

}






export const submitSuccess = () => {
    Swal.fire('Sukses', 'Petisi Berhasil Ditandatangani', 'success');
    return {
      type: SUBMIT_SUCCESS
    };
  };
  
  // Action creator untuk permintaan POST gagal
  export const submitFailure = () => {
    Swal.fire('Email Sudah Digunakan', 'Silahkan gunakan email yang lain untuk menandatangai petisi ini', 'error');
    return {
      type: SUBMIT_FAILURE
    };
  };





export const  getDetail=(id)=>async(dispatch)=>{
    console.log("id",id);
    dispatch(fatchingAksi())
    const url=`https://647ef495c246f166da8fbfec.mockapi.io/aksi/${id}`
   
    const result =await axios(url)
    dispatch(successGetDetail(result.data))
}
export const submitPetisi=(data,id)=>async(dispatch)=>{
    // get data detail
    const urlDetail=`https://647ef495c246f166da8fbfec.mockapi.io/aksi/${id}`
    const url=`https://647ef495c246f166da8fbfec.mockapi.io/aksi/${id}/kontributor`
    const result =await axios(urlDetail)

    // validasi email yang sama
    const cekEmail = await axios(url)
    const emailData = cekEmail.data.find(item=>item.email===data.email)
    if (emailData){
        dispatch(submitFailure())
  
    }
    else{
             //    mengupdate jumlah orang yang mendukung
    const dataUpdate ={
        numberOfSupport:result.data.numberOfSupport+1
    }
    // mensubmit ke kontributor
  await axios.put(urlDetail,dataUpdate)
    console.log("cek result",result);
    
     await axios.post(url, data);
    dispatch(getDetail(id))
    dispatch(submitSuccess());
    }

    
   
}
