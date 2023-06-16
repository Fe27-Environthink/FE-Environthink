import { useEffect } from "react";
import NavbarAdmin from "../Sidebar/NavbarAdmin";
import { Link } from "react-router-dom";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import "./InfografisAdmin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInfografis,
  getInfografis,
} from "../../../Redux/Action/infografisAction";
import { Spinner } from "react-bootstrap";
import InfografisVector from "../../../assets/InfografisVector.jpg";

function InfografisAdmin() {
  const dispatch = useDispatch();
  const { infografis, isLoading } = useSelector(
    (state) => state.infografisReducer
  );
  const { totalInfografis } = useSelector((state) => state.HomepageAdminReducer);

  console.log(infografis);

  useEffect(() => {
    dispatch(getInfografis());
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="container pt-4">
        <h2>Infografis</h2>
        <div className="row gx-4 gy-2 justify-content-start">
          <div className="col-6 w-auto">
            <div className="card mb-3" style={{ maxWidth: "30em" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={InfografisVector}
                    className="img-fluid rounded-start"
                    alt="Artikel "
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-title text-center m-0 text-dark fs-5">
                      Infografis
                    </p>
                    <hr className="my-2 p-0" />
                    <p className="total card-text text-dark m-0 fs-3">
                      {totalInfografis}
                    </p>
                    <p className="totalHomepageAdmin card-text text-dark m-0">
                      Total Infografis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <Link
              to="/admin/infografis/add-infografis"
              className="btn bg-primary text-white text-sm px-5 py-2"
            >
              Add Infografis
            </Link>
          </div>
        </div>

        <div
          className="card mt-4 my-5"
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
                    <th scope="col-md-3" className="text-center">
                      Title Article
                    </th>
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
                      <tr key={item.id}>
                        <td className="">
                          <img
                            src={item.url}
                            alt="name"
                            className="img-artikel w-100"
                            style={{ height: "20em" }}
                          />
                        </td>
                        <td className="text-center">{item.judul}</td>
                        <td>
                          <div className="row d-flex justify-content-center">
                            <div className="col-2 w-50">
                              <button className="btn bg-success btn-update text-sm text-white">
                                <FaPen />
                              </button>
                            </div>
                            <div className="col-2 w-50">
                              <button
                                onClick={() =>
                                  dispatch(deleteInfografis(item.id))
                                }
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
  );
}

export default InfografisAdmin;
