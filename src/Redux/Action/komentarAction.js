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
        dispatch(startKomentar()) 
        const url = `${import.meta.env.VITE_API_ARTICLE}/${id}/komentar`
        const result = await axios(url) 
        dispatch(successGetKomentar(result.data)) 
    }
}

export const addKomentar = (newData, id) => async (dispatch) => {
    const url = `${import.meta.env.VITE_API_ARTICLE}/${id}//komentar`;
    await axios.post(url, newData);
    dispatch(getKomentar(id));
}

export const deleteKomentar = (data, id) => async (dispatch) => {
    const url = `${import.meta.env.VITE_API_ARTICLE}/${id}/komentar/${data}`;
    await axios.delete(url);
    dispatch(getKomentar(id));
};

export const editKomentar = (data, id) => async (dispatch) => {
    const url = `${import.meta.env.VITE_API_ARTICLE}/${id}//komentar/${data.id}`;
    await axios.put(url, data);
    dispatch(getKomentar(id));
};
