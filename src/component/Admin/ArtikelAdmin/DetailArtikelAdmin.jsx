import React from 'react'

function DetailArtikelAdmin() {
  return (
    <div>
        <div className="row mb-4">
            <div className="col-md-12 d-flex justify-content-end">
            <Link
                to=""
                className="btn bg-success text-white text-sm me-4 px-5 py-2"
            >
                Update
            </Link>
            <button
                className="btn bg-error text-white text-sm me-5 px-5 py-2"
            >
                Delete
            </button>
            </div>
        </div>
      
        <div className="row mb-4">
            <div className="col-12 col-md-12 col-lg-12">
                <div className="row mb-3">
                    <div className="col-md-6 col-lg-6 p-3">

                    </div>

                    <div className="col-md-6 col-lg-6 p-3">
                        <h3 className="text-primary-dark pt-3">
                            
                        </h3>
                        <div className="d-flex align-items-center pt-4">
                            <div>
                            <h3 className="text-md"></h3>
                            </div>
                        </div>

                        <div className="d-flex align-items-center pt-4">
                            <h3 className="text-md"></h3>
                        </div>
                        <div className="d-flex align-items-center pt-4">
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="descriptions pt-3 mb-3">
            <h3 className="text-primary-dark">Descriptions</h3>
            <p>deskripsi</p>
        </div>
    </div>
    )
}

export default DetailArtikelAdmin