import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    const [inputLogin,setInputLogin] = useState({
        username:"",
        password:"",
    })
   const handleChangeLogin =(e)=>{
    setInputLogin({
        ...inputLogin,
        [e.target.name ]: e.target.value
    })
   }
   console.log(inputLogin);
  return (
    <>
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-12 col-md-9">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            <div className="col-lg-6">
              <div className="p-5">
                <h1>Silahkan Masuk</h1>
                <p className="text-secondary">
                  Belum Punya Akun <Link to="/register">register</Link>
                </p>
                <form id="login-form">
                  <div className="form-group ">
                    <label htmlFor="username" className="mb-2 fw-bold ">Username:</label>
                    <input type="text" id="username" name="username" value={inputLogin.username} onChange={handleChangeLogin} className="form-control" required />
                  </div>
                  <div className="form-group mb-3" >
                    <label htmlFor="password" className="mb-2 fw-bold ">Password:</label>
                    <input type="password" id="password" name="password" value={inputLogin.password} onChange={handleChangeLogin}  className="form-control" required />
                  </div>
                  <button type="submit " className="btn  btn-main w-100">
                    Masuk
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block bg-login-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Login