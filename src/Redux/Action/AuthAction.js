import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export const AUTH = "AUTH";
export const REGISTER = "REGISTER";
export const GET_DATA = "GET_DATA";

const auth = (payload) => {
  return {
    type: AUTH,
    payload,
  };
};
const register = (payload) => {
  return {
    type: REGISTER,
    payload,
  };
};

export const sigInUser = (data) => async (dispatch) => {
  console.log("data", data);
  const json = JSON.stringify(data);
  console.log("convert json", json);
  
  const url = `${import.meta.env.VITE_API_LOGIN}/signin`;

  try {
    const res = await axios.post(url, data);
    console.log(res);
    Swal.fire("Sukses", "Login Success", "success").then(() =>
      dispatch(auth(res.data))
    );
  } catch (error) {
    console.log(error.response.data);
    Swal.fire("Login Failed", `${error.response.data.message}`, "error");
  }
};

export const sigUpUser = (data) => async (dispatch) => {
  console.log("data", data);
  const json = JSON.stringify(data);
  console.log("convert json", json);
  const url = `${import.meta.env.VITE_API_LOGIN}/signup`;

  try {
    const res = await axios.post(url, data);
    console.log(res);
    Swal.fire("Sukses", "Registrasi Berhasil !", "success").then(() =>
      dispatch(register(res.data)),
      window.location.href="/login"
    );
  } catch (error) {
    console.log(error.response.data);
    Swal.fire("Registrasi Gagal !", `${error.response.data.message}`, "error");
  }
};