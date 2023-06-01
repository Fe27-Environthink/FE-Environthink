import React from 'react'
import "./Infografis.css"

const Infografis = () => {
  return (
    <>
        <div className="container pt-5">
            <div className="infografis" id="infografis">
                <h3 className="text-start mb-3">Infografis</h3>
                <div style={{border: "0.5px solid #bfbfbf"}}></div>
                <div className="row pt-4" id="infografisContent">
                    <div className="col-md-6 col-lg-4 mb-3 pb-4">
                        <div className="card card-infografis h-100">
                            <img src="" style={{cursor: "pointer"}} className="card-img-top" data-bs-toggle="modal" data-bs-target="#${data[i].id}Backdrop" alt="artikel"/>
                            <div className="card-body">
                                <h1 className="card-title fs-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    gdhgj
                                </h1>
                                <div className="modal fade" id="${data[i].id}Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">sfdgfh</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src="" className="card-img-top" alt="infografis"/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center pb-5">
                <button className="btn" id="infografis-lainnya">Infografis Lainnya</button>
            </div>
        </div>
    </>
  )
}

export default Infografis