import axios from "axios";
export const START_KOMENTAR = "START_KOMENTAR"
export const SUCCESS_GET_KOMENTAR = "SUCCESS_GET_KOMENTAR"
export const SET_DATA = "SET_DATA";

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

export const addKomentar = (newData) => async (dispatch) => {
    const url = "https://644b56f917e2663b9ded34b8.mockapi.io/komentar";
    await axios.post(url, newData);
    dispatch(addKomentar());
}

