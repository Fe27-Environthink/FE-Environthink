import axios from "axios";
export const START_FETCHING = "START_FETCHING"
export const SUCCESS_GET_ARTICLE = "SUCCESS_GET_ARTICLE"

const startFetching = () => {
    return {
        type: START_FETCHING
    }
}
  
const successGetArticle = (payload) => {
    return {
        type: SUCCESS_GET_ARTICLE,
        payload
    }
}
  
export const getArticle = () => {
    return async (dispatch) => {
        // mulai loading
        dispatch(startFetching()) 
        
        // ambil data todo
        const url = "https://644b56f917e2663b9ded34b8.mockapi.io/article"
        const result = await axios(url) 

        // kirim todo ke reducer
        dispatch(successGetArticle(result.data)) 
    }
}

// export const addTodo = (newTodo) => async (dispatch) => {
//     const url = "https://643e1624c72fda4a0bed5b7f.mockapi.io/todo"
//     await axios.post(url, newTodo)

//     dispatch(getTodo())
// }