import { FATCHING_AKSI, SUCCESS, SUCCESS_GET_DETAIL } from "../Action/AksiAction";

const initialState ={
     listAksi:[],
    isLoading :false,
    detailAksi:[]
    
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