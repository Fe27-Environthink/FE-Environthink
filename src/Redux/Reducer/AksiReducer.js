import axios  from 'axios';
const initialState ={
     listAksi:[],
    isLoading :false,
    detailAksi:[]
    
}
const FATCHING_AKSI = "FATCHING_AKSI"
const SUCCESS = "SUCCESS"
const SUCCESS_GET_DETAIL = "SUCCESS_GET_DETAIL"
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
   const url="https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi"
   const result =await axios(url)
   dispatch(success(result.data))

}

export const  getDetail=(id)=>async(dispatch)=>{
    console.log("id",id);
    dispatch(fatchingAksi())
    const url=`https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${id}`
    console.log(url);
    const result =await axios(url)
    dispatch(successGetDetail(result.data))
}




function AksiReducer(state = initialState , action) {
    switch (action.type) {
        case FATCHING_AKSI:
            return {
                ...state,
                isLoading:true
            }  
            case SUCCESS:
                return{

                    ...state,
                    listAksi:[...action.payload],
                    isLoading:false
                   
                }       
            case SUCCESS_GET_DETAIL:
                return{
                    ...state,
                    detailAksi:action.payload,
                    isLoading:false
                   
                }       
            default:
                return state;
    }
    
    
}
export default AksiReducer;