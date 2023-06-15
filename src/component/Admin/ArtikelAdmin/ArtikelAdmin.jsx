import { useEffect } from "react";
import "./ArtikelAdmin.css";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { getArticle } from "../../../Redux/Action/articleAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";
import ArticleVector from "../../../assets/ArticleVector.jpg";
import { getAPI } from "../../../Redux/Action/HomepageAdminAction";
import NavbarAdmin from "../Sidebar/NavbarAdmin";
import Swal from "sweetalert2";

function ArtikelAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { article, isLoading } = useSelector((state) => state.articleReducer);
  const { totalArticle } = useSelector((state) => state.HomepageAdminReducer);

  useEffect(() => {
    dispatch(getAPI());
  }, []);
  useEffect(() => {

      if (localStorage.getItem("role") == null) {
        Swal.fire({
          icon: "error",
          title: "Terjadi Kesalahan !",
          text: "Anda Harus Login Terlebih Dahulu",
          confirm: {
            text: "OK",
            value: true,
          },
        }).then((value) => {
          if (value) {
            navigate("/login");
          }
        });
      } else if (localStorage.getItem("role") === "user") {
        Swal.fire({
          icon: "error",
          title: "Anda Bukan Admin !",
          text: "User Tidak Bisa Akses Ke Halaman Admin!",
          confirm: {
            text: "OK",
            value: true,
          },
        }).then((value) => {
          if (value) {
            navigate("/");
          }
        });
      }
    
    if (localStorage.getItem("role") == "admin") {
      dispatch(getArticle());
    }
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="container pt-4">
        <h2>Article</h2>
        <div className="row gx-4 gy-2 justify-content-start">
          <div className="col-6 w-auto">
            <div className="card mb-3" style={{ maxWidth: "30em" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={ArticleVector}
                    className="img-fluid rounded-start"
                    alt="Artikel "
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-title text-center m-0 text-dark fs-5">
                      Artikel
                    </p>
                    <hr className="my-2 p-0" />
                    <Link
                      to="/admin/article"
                      className="total card-text text-dark m-0 fs-3"
                      style={{ textDecoration: "none" }}
                    >
                      {totalArticle}
                    </Link>
                    <p className="totalHomepageAdmin card-text text-dark m-0">
                      Total Artikel
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
              to="/admin/article/add-article"
              className="btn bg-primary text-white text-sm px-5 py-2"
            >
              Add Artikel
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
                    <th scope="col-md-2" className="imagesAdmin">
                      Image
                    </th>
                    <th scope="col-md-2">Title Article</th>
                    <th scope="col-md-2">Cathegory</th>
                    <th scope="col-md-2">Author</th>
                    <th scope="col-md-2">Date</th>
                    <th scope="col-md-2" className="text-center">
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
                    article.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => {
                          navigate(`/admin/article/${item.id}`);
                        }}
                      >
                        <td className="me-5">
                          <img
                            src={item.url}
                            alt="name"
                            className="img-artikel w-100"
                          />
                        </td>
                        <td>{item.titleArticle}</td>
                        <td>{item.category}</td>
                        <td>{item.author}</td>
                        <td>{item.date}</td>
                        <td>
                          <div className="row">
                            <div className="col-4 px-1">
                              <Link
                                to="/"
                                className="btn bg-success btn-update text-sm me-4 text-white w-100 px-2"
                              >
                                <FaPen />
                              </Link>
                            </div>
                            <div className="col-4 px-1">
                              <button
                                to="/"
                                className="btn bg-danger btn-delete text-sm me-4 text-white w-100 px-2"
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

export default ArtikelAdmin;
