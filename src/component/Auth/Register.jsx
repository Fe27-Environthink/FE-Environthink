import React from 'react'

function Register() {
  return (
    <>
   <div className="container ">
  {/* Outer Row */}
  <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-12 col-md-9">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            <div className="col-lg-6">
              <div className="p-5">
                <h1>Daftarkan Akun</h1>
                <form id="register-form">
                  <div className="form-group">
                    <label htmlFor="username" className="mb-2 fw-bold ">Username:</label>
                    <input type="text" id="username" name="username" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="mb-2 fw-bold ">Emaill:</label>
                    <input type="email" id="email" name="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="kota" className="mb-2 fw-bold ">Kota:</label>
                    <input type="text" id="kota" name="kota" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telepon" className="mb-2 fw-bold ">telepon:</label>
                    <input type="text" id="telepon" name="telepon" className="form-control" required />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="mb-2 fw-bold ">Password:</label>
                    <input type="password" id="password" name="password" className="form-control" required />
                  </div>
                  <button type="submit " className="btn btn-main  w-100">Buat Akun</button>
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

export default Register