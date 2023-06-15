import { useEffect } from 'react'
import NavbarAdmin from '../Sidebar/NavbarAdmin';
import { Link } from 'react-router-dom';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import './InfografisAdmin.css';
import { useDispatch, useSelector } from "react-redux";
import { getInfografis } from '../../../Redux/Action/infografisAction';
import { Spinner } from 'react-bootstrap';

function InfografisAdmin() {
  const dispatch = useDispatch();
  const { infografis, isLoading } = useSelector(
    (state) => state.infografisReducer
  );

  useEffect(() => {
    dispatch(getInfografis());
  }, []);
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
                    <th scope="col-md-6" className="imgInfografisAdmin">
                      Image
                    </th>
                    <th scope="col-md-3" className="text-center">Title Article</th>
                    <th scope="col-md-3" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                {isLoading ? (
                  <tr>
                    <td>
                      <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                        <span className="mx-2 h1">loading</span>
                        <Spinner animation="border" variant="dark" />
                      </div>
                    </td>
                  </tr> 
                  ) : (
                    infografis.map((item) => (
                      <tr
                        key={item.id}
                      >
                        <td className="me-5">
                          <img
                            src={item.url}
                            alt="name"
                            className="img-artikel w-100"
                          />
                        </td>
                        <td className="text-center">{item.judul}</td>
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
                    ))
                  )}
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