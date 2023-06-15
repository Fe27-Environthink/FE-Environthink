import "./DonasiAdmin.css";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataDonasi,
  fetchApiDonasi,
} from "../../../Redux/Action/ActionDonasiAdmin";
import Swal from "sweetalert2";
import NavbarAdmin from "../Sidebar/NavbarAdmin";
import dayjs from "dayjs";
import "dayjs/locale/id";
import { useNavigate } from "react-router";

const DonasiAdmin = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.DonasiReducerAdmin);
  const roleLocalStorage = localStorage.getItem("role");
  const navigate = useNavigate();
  const handleDelete = (name, user_id) => {
    Swal.fire({
      title: `Apakah anda yakin ingin menghapus donasi dari ${name} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDataDonasi(user_id));
        Swal.fire("Berhasil!", "Berhasil Hapus Data Donasi", "success");
      }
    });
  };

  const formatTime = (dateTime) => {
    const indonesianTime = dayjs(dateTime)
      .locale("id")
      .format("D MMMM YYYY, HH:mm:ss");
    return indonesianTime;
  };

  useEffect(() => {
    if (roleLocalStorage ===null) {
      console.log(roleLocalStorage);
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
    }
    if(roleLocalStorage=='admin'){
      dispatch(fetchApiDonasi());
    }
   
    
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="container">
        <h1 className="text-center mt-3 titleDonasi">Donasi</h1>
        {result != null && result.length != 0 ? (
          result?.map((user) => (
            <div
              className="card my-4"
              key={user.id}
              style={{
                boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)",
                borderRadius: 9,
              }}
            >
              <div className="card-body">
                <div className="table-responsive text-nowrap">
                  <table className="table w-auto">
                    <thead>
                      <tr>
                        <th scope="col" className="">
                          ID
                        </th>
                        <th scope="col" className=" ">
                          Nama
                        </th>
                        <th scope="col" className="">
                          Email
                        </th>
                        <th scope="col" className="">
                          Nomor Telepon
                        </th>
                        <th scope="col" className="col-4">
                          Nomor Rekening
                        </th>
                        <th scope="col" className="">
                          Donasi
                        </th>
                        <th scope="col" className="">
                          Original Value
                        </th>
                        <th scope="col" className="">
                          createdAt
                        </th>
                        <th scope="col" className="">
                          updatedAt
                        </th>
                        <th scope="col" className="">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center" scope="row">
                          {user.id}
                        </th>
                        <td>{user.nama}</td>
                        <td>{user.email}</td>
                        <td>{user.nomor_hp}</td>
                        <td>{user.nomor_rekening}</td>
                        <td>{user.formated_value}</td>
                        <td>{user.original_value}</td>
                        <td>{formatTime(user.createdAt)}</td>
                        <td>{formatTime(user.updatedAt)}</td>
                        <td>
                          <div className="row justify-content-center">
                            <div className="col-4 px-1">
                              <FaTrashAlt
                                className="text-danger w-100 "
                                onClick={() => handleDelete(user.nama, user.id)}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center mt-5 notFoundDonasi">Tidak Ada Donasi </h2>
        )}

        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Update Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User_ID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukan Nama untuk di update !"
                  name="user_id"
                  value={updateValue.user_id}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Nama untuk di update !"
                  name="nama"
                  value={updateValue.nama}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukan Email untuk di update !"
                  name="email"
                  value={updateValue.email}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukan Nomor Telepon untuk di update !"
                  name="nomor_hp"
                  value={updateValue.nomor_hp}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nomor Rekening</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukan Nomor Rekening untuk di update !"
                  name="nomor_rekening"
                  value={updateValue.nomor_rekening}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Format Value</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Nomor Rekening untuk di update !"
                  name="formated_value"
                  value={updateValue.formated_value}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Original Value</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukan Nomor Rekening untuk di update !"
                  name="original_value"
                  value={updateValue.original_value}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Created At</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Nomor Rekening untuk di update !"
                  name="createdAt"
                  value={updateValue.createdAt}
                  onChange={handleFormModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Updated At</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Nomor Rekening untuk di update !"
                  name="updatedAt"
                  value={updateValue.updatedAt}
                  onChange={handleFormModal}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </>
  );
};

export default DonasiAdmin;
