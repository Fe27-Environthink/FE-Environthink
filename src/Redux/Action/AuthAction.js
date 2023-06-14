import axios from "axios"
import Swal from "sweetalert2"

export const AUTH ="AUTH"
export const GET_DATA ="GET_DATA"

const auth =(payload)=>{
    
    return{
        type:AUTH,
        payload

    }
}


export const sigInUser=(data)=>async(dispatch)=>{
    console.log("data",data);
    const json = JSON.stringify(data);
    console.log("convert json",json);
    const url='https://api-fe27be9-environthink.cyclic.app/user/signin/'


  try {
   const res =await axios.post(url,data);
    console.log(res);
    Swal.fire("Sukses", "Login Success", "success").then(()=> dispatch(auth(res.data)));
   
  } catch (error) {
    console.log(error.response.data);
    Swal.fire(
        "Login Failed",
        `${error.response.data.message}`,
        "error"
      );

  }
// const res = await axios('https://api-fe27be9-environthink.cyclic.app/user')
// 

}