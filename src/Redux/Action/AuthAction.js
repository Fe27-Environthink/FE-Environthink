import axios from "axios"

export const AUTH ="AUTH"

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
    const url="https://api-fe27be9-environthink.cyclic.app/user/signin"
 const res =await axios.post(url,json);

// const res = await axios('https://api-fe27be9-environthink.cyclic.app/user')
//  dispatch(auth(res))
 console.log(res.data);
}