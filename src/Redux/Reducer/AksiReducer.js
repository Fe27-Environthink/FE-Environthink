import axios  from 'axios';
const initialState ={
     listAksi:[],
    isLoading :false,
    
}
const FATCHING_AKSI = "FATCHING_AKSI"
const SUCCESS = "SUCCESS"
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


export const getDataAksi = ()=> async(dispatch)=>{
    dispatch(fatchingAksi)
   const url="https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi"
   const result =await axios(url)
   dispatch(success(result.data))
//    console.log(result.data)

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
                    listAksi:[...action.payload],
                    isLoading:false,
                   
                }       
            default:
                return state;
    }
    
    
}
export default AksiReducer;