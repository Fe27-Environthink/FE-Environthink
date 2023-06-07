import axios from "axios";
export const START_INFOGRAFIS = "START_INFOGRAFIS"
export const SUCCESS_GET_INFOGRAFIS = "SUCCESS_GET_INFOGRAFIS"

const startFetching = () => {
    return {
        type: START_INFOGRAFIS
    }
}
  
const successGetInfografis = (payload) => {
    return {
        type: SUCCESS_GET_INFOGRAFIS,
        payload
    }
}

export const getInfografis = () => {
    return async (dispatch) => {
        dispatch(startFetching()) 
        const url = "https://644d177e57f12a1d3dd777a1.mockapi.io/infografis"
        const result = await axios(url) 
        dispatch(successGetInfografis(result.data)) 
    }
}
