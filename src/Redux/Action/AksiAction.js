import axios  from 'axios';
export const FATCHING_AKSI = "FATCHING_AKSI"
export const SUCCESS = "SUCCESS"
export const SUCCESS_GET_DETAIL = "SUCCESS_GET_DETAIL"
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

export const  getDetail=(id)=>async(dispatch)=>{
    console.log("id",id);
    dispatch(fatchingAksi())
    const url=`https://647ef495c246f166da8fbfec.mockapi.io/aksi/${id}`
    console.log(url);
    const result =await axios(url)
    dispatch(successGetDetail(result.data))
}
