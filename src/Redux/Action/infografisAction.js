import axios from "axios";
export const START_INFOGRAFIS = "START_INFOGRAFIS"
export const SUCCESS_GET_INFOGRAFIS = "SUCCESS_GET_INFOGRAFIS"

const startInfografis = () => {
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
        dispatch(startInfografis()) 
        const url = import.meta.env.VITE_API_INFOGRAFIS
        const result = await axios(url) 
        dispatch(successGetInfografis(result.data)) 
    }
}
