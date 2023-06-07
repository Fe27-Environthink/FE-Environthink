import axios from "axios";
export const START_KOMENTAR = "START_KOMENTAR"
export const SUCCESS_GET_KOMENTAR = "SUCCESS_GET_KOMENTAR"

const startKomentar = () => {
    return {
        type: START_KOMENTAR
    }
}

const successGetKomentar = (payload) => {
    return {
        type: SUCCESS_GET_KOMENTAR,
        payload
    }
}

export const getKomentar = () => {
    return async (dispatch) => {
        dispatch(startKomentar()) 
        const url = "https://644b56f917e2663b9ded34b8.mockapi.io/komentar"
        const result = await axios(url) 
        dispatch(successGetKomentar(result.data)) 
    }
}
