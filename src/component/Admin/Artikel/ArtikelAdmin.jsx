import React from "react";
import { Link } from "react-router-dom";
import "./ArtikelAdmin.css";

function ArtikelAdmin() {
  return (
    <>
      <div
        className="card m-5"
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
                  {/* <th scope="col-md-2" className="artikelimage">
                    Image
                  </th> */}
                  <th scope="col-md-2">Title Article</th>
                  <th scope="col-md-2">Cathegory</th>
                  <th scope="col-md-2">HashTag</th>
                  <th scope="col-md-2">Author</th>
                  <th scope="col-md-2">Date</th>
                  <th scope="col-md-2" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td className="me-5">
                    <img
                      src="https://alamendah.files.wordpress.com/2014/08/kerusakan-lingkungan-1.jpg?w=300&h=225&zoom=2"
                      alt="name"
                      className="img-artikel w-100"
                    />
                  </td> */}
                  <td>Proyek Minyak Bumi dan Kesalahan yang Berulang</td>
                  <td>Cerita</td>
                  <td>#EnergiTerbarukan</td>
                  <td>Sherina Redjo</td>
                  <td>12 April 2023</td>
                  <td>
                    <div className="row">
                      <div className="col-6 px-1">
                        <Link
                          to="/"
                          className="btn bg-success btn-update text-sm me-4 text-white w-100 px-2"
                        >
                          Update
                        </Link>
                      </div>
                      <div className="col-6 px-1">
                        <Link
                          to="/"
                          className="btn bg-danger btn-delete text-sm me-4 text-white w-100 px-2"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtikelAdmin;
