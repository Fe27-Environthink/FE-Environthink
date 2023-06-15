import React from 'react'
import NavbarAdmin from '../Sidebar/NavbarAdmin';
import { Link } from 'react-router-dom';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import './InfografisAdmin.css'

function InfografisAdmin() {
  return (
    <>
    <NavbarAdmin />
      <div className="container pt-4">
        <h2>Article</h2>
        

        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <Link
              to=""
              className="btn bg-primary text-white text-sm px-5 py-2"
            >
              Add Infografis
            </Link>
          </div>
        </div>

        <div
          className="card mt-4"
          style={{
            boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)",
            borderRadius: 9,
          }}
        >
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-md-4" className="imgInfografisAdmin">
                      Image
                    </th>
                    <th scope="col-md-4">Title Article</th>
                    <th scope="col-md-4" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                
                      <tr
                        // key={item.id}
                        // onClick={() => {
                        //   navigate(`/admin/article/${item.id}`);
                        // }}
                      >
                        <td className="me-5">
                          <img
                            src=""
                            alt="name"
                            className="img-artikel w-100"
                          />
                        </td>
                        <td>ddd</td>
                        <td>
                        <div className="row d-flex justify-content-center">
                            <div className="col-2 ">
                              <Link
                                to="/"
                                className="btn bg-success btn-update text-sm text-white "
                              >
                                <FaPen />
                              </Link>
                            </div>
                            <div className="col-2">
                              <button
                                to="/"
                                className="btn bg-danger btn-delete text-sm  text-white "
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfografisAdmin