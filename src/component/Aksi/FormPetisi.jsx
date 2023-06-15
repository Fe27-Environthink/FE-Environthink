import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { submitPetisi } from "../../Redux/Action/AksiAction";

function FormPetisi() {
    const { key } = useParams();
    const navigate =useNavigate()
    const [petisi, setPetisi] = useState({
        aksiId: key,
        name: "",
        email: "",
        city: "",
        tlp: "",
      });

      const dispatch = useDispatch();
      const {  isSuccess } = useSelector(
        (state) => state.AksiReducer
      );
    
    
  // handle change petisi
  const handleChangePetisi = (event) => {
    setPetisi({
      ...petisi,
      [event.target.name]: event.target.value,
    });
  
  };

  const handleSubmitPetisi = (e) => {
    e.preventDefault();
    console.log("cek local storage",localStorage.length);
    if (localStorage.length==0) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan !",
        text: "Anda Harus Login Terlebih Dahulu",
        confirm: {
          text: 'OK',
          value: true,
        },
      }).then((value) => {
        if (value) {
          navigate("/login");
        }
      });
     
    }else {
      Swal.fire({
        title: "Konfirmasi Data",
        text: "Apakah data yang diisi sudah benar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Konfirmasi",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          submitDataPetisi();
        }
      });
    }
   
  };

  const submitDataPetisi = () => {
    dispatch(submitPetisi(petisi, key));

  };
  useEffect(()=>{
    if (isSuccess) {
      setPetisi("")
    } 
    
  },[submitDataPetisi])

    return (
        <>
        <form
                    className="form-group mb-4"
                    id="form-petisi"
                    onSubmit={handleSubmitPetisi}
                  >
                    <div className="mb-3">
                      <label htmlFor="namaLengkap" className="form-label">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaLengkap"
                        required
                        value={petisi.name}
                        name="name"
                        onChange={handleChangePetisi}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={petisi.email}
                        name="email"
                        onChange={handleChangePetisi}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nomorTelepone" className="form-label">
                        Nomor Telepon
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nomorTelepone"
                        required
                        value={petisi.tlp}
                        name="tlp"
                        onChange={handleChangePetisi}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="kota" className="form-label">
                        Kota
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="kota"
                        required
                        value={petisi.city}
                        name="city"
                        onChange={handleChangePetisi}
                      />
                    </div>
                    <div className="form-check text-secondary">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Saya setuju untuk membagikan nama dan alamat email untuk
                        menerima pemberitahuan pembaruan tentang kampanye ini
                        dan kampanye lainnya.
                      </label>
                    </div>
                    <button
                      className="btn btn-petisi btn-danger w-100 "
                      data-bs-toggle="modal1"
                      data-bs-target="#staticBackdrop1"
                    >
                      <i className="fa fa-pen-nib me-2"> </i> Tanda Tangani
                      Petisi
                    </button>
                  </form>
        </>
    )
}
export default FormPetisi