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

export const getKomentar = (id) => {
    return async (dispatch) => {
        console.log(id)
        dispatch(startKomentar()) 
        const url = `https://644b56f917e2663b9ded34b8.mockapi.io/article/${id}/komentar`
        const result = await axios(url) 
        dispatch(successGetKomentar(result.data)) 
    }
}

export const addKomentar = (newData, id) => async (dispatch) => {
    const url = `https://644b56f917e2663b9ded34b8.mockapi.io/article/${id}/komentar`;
    await axios.post(url, newData);
    dispatch(getKomentar());
}

export const deleteKomentar = (data, id) => async (dispatch) => {
    const url = `https://644b56f917e2663b9ded34b8.mockapi.io/article/${data}/komentar`;
    await axios.delete(url);
    dispatch(getKomentar());
};

export const editKomentar = (data, id) => async (dispatch) => {
    const url = `https://644b56f917e2663b9ded34b8.mockapi.io/article/${data.id}/komentar`;
    await axios.put(url, data);
    dispatch(getKomentar());
};
