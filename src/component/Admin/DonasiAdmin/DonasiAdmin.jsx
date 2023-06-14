import "./DonasiAdmin.css";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataDonasi,
  fetchApiDonasi,
  updateDataDonasi,
} from "../../../Redux/Action/ActionDonasiAdmin";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import NavbarAdmin from "../Sidebar/NavbarAdmin";

const DonasiAdmin = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.DonasiReducerAdmin);

  console.log(result);

  const [updateValue, setUpdateValue] = useState({
    User_ID: "",
    Nama: "",
    Nomor_Telepon: "",
    Email: "",
    Nomor_Rekening: "",
    formattedValue: "",
    originalValue: null,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    Swal.fire({
      title: "Apakah anda yakin untuk menyimpan perubahan ?",
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setShow(false);
        dispatch(updateDataDonasi(updateValue));
        Swal.fire("Berhasil Update !", "", "success");
      }
    });
  };

  const handleFormModal = (event) => {
    setUpdateValue({
      ...updateValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = (
    user_id,
    nama,
    email,
    nomor_telepon,
    nomor_rekening,
    formatted_value,
    original_value
  ) => {
    setShow(true);

    const dataUpdate = {
      User_ID: user_id,
      Nama: nama,
      Email: email,
      Nomor_Telepon: nomor_telepon,
      Nomor_Rekening: nomor_rekening,
      formattedValue: formatted_value,
      originalValue: original_value,
    };

    setUpdateValue(dataUpdate);
  };

  useEffect(() => {
    dispatch(fetchApiDonasi());
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
                <div className="table-responsive-lg text-nowrap">
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
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center" scope="row">
                          {user.id}
                        </th>
                        <td>{user.Nama}</td>
                        <td>{user.Email}</td>
                        <td>{user.Nomor_Telepon}</td>
                        <td>{user.Nomor_Rekening}</td>
                        <td>{user.formattedValue}</td>
                        <td>{user.originalValue}</td>
                        <td>{user.createdAt}</td>
                        <td>
                          <div className="row justify-content-center">
                            <div className="col-4 px-1">
                              <FaPen
                                className="text-success w-100"
                                onClick={() =>
                                  handleUpdate(
                                    user.id,
                                    user.Nama,
                                    user.Email,
                                    user.Nomor_Telepon,
                                    user.Nomor_Rekening,
                                    user.formattedValue,
                                    user.originalValue
                                  )
                                }
                              />
                            </div>
                            <div className="col-4 px-1">
                              <FaTrashAlt
                                className="text-danger w-100 "
                                onClick={() =>
                                  dispatch(deleteDataDonasi(user.id))
                                }
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

        <Modal show={show} onHide={handleClose}>
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
                  name="User_ID"
                  value={updateValue.User_ID}
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
                  name="Nama"
                  value={updateValue.Nama}
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
                  name="Email"
                  value={updateValue.Email}
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
                  name="Nomor_Telepon"
                  value={updateValue.Nomor_Telepon}
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
                  name="Nomor_Rekening"
                  value={updateValue.Nomor_Rekening}
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
                  name="formattedValue"
                  value={updateValue.formattedValue}
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
                  name="originalValue"
                  value={updateValue.originalValue}
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
        </Modal>
      </div>
    </>
  );
};

export default DonasiAdmin;
