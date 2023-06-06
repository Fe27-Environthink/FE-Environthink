import "./Donasi.css";
import ImgCreditCard from "../../assets/CardCredit.png";
import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { dataDonasi } from "../../Redux/Action/ActionDonasi";
import emailjs from "@emailjs/browser";

const Donasi = () => {
  // const state = useSelector((state) => state.DonasiReducer.Donasi);
  const dispatch = useDispatch();

  const ref = useRef();

  const [inputMoney, setInputMoney] = useState("");

  const [formData, setFormData] = useState({
    inputNama: "",
    inputTelepon: "",
    inputEmail: "",
    inputNorek: "",
  });

  const [data, setData] = useState({
    originalValue: null,
    formattedValue: null,
  });

  const handleInputMoney = (event) => {
    if (typeof event == "number") {
      const getButtonValue = event;
      const formattedValue = Number(getButtonValue).toLocaleString("id-ID");
      setInputMoney(formattedValue);

      setData({
        originalValue: getButtonValue,
        formattedValue: `Rp ${formattedValue}`,
      });
    } else if (event.target.value == "") {
      setInputMoney("");
    } else if (typeof event == "object") {
      const inputNumber = parseInt(event.target.value.replace(/\D/g, ""), 10);
      const formattedValue = inputNumber.toLocaleString("id-ID");
      setInputMoney(formattedValue);

      setData({
        originalValue: inputNumber,
        formattedValue: `Rp ${formattedValue}`,
      });
    }
  };

  const handleFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.inputEmail == "" ||
      formData.inputNama == "" ||
      formData.inputNorek == "" ||
      formData.inputTelepon == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Harap Periksa Inputan Anda !",
      });
    } else {
      setData((prevDatas) => {
        return {
          ...prevDatas,
          ...formData,
        };
      });
      dispatch(dataDonasi(data, formData));
      emailjs
        .sendForm(
          "service_coje9kr",
          "template_u1wvjal",
          ref.current,
          "XqGlpCTZBi29jsyGy"
        )
        .then(
          (result) => {
            Swal.fire("Cek email untuk instruksi pembayaran", "", "success");
            console.log(result.text);
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Terjadi Kesalahan !",
            });
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="container-fluid row p-0 m-0">
      <div className="highlight col bg-primary p-0">
        <div className="wrapperHighlightText d-flex flex-column text-white">
          <h2 className="titleHighlight">
            Yuk, jadi bagian dari EnvironThink!
          </h2>
          <p className="descHighlight">
            Mari bergabung dengan EnvironThink dengan cara berdonasi untuk
            mendukung sepenuhnya perjuangan masyarakat dalam memperoleh
            pengakuan atas Wilayah Kelola Rakyat (WKR). Donasi yang Anda berikan
            akan dialokasikan untuk kegiatan-kegiatan EnvironThink, termasuk
            pendidikan, penguatan kapasitas dan pemberdayaan masyarakat,
            pengembangan kapasitas penggiat lingkungan hidup, serta kegiatan
            lainnya dalam upaya memastikan daya dukung lingkungan hidup bagi
            kehidupan yang berkelanjutan bagi kita dan generasi mendatang.
          </p>
        </div>
      </div>

      <div className="colDonasi col p-0 m-0">
        <div className="wrapperInputDonasi ">
          <form ref={ref} onSubmit={handleSubmit}>
            <p className="DescDonasi">Masukan jumlah nominal donasi anda :</p>
            <div className="input-group">
              <span className="input-group-text text-white" id="basic-addon1">
                Rp
              </span>
              <input
                type="text"
                className="form-control m-0 shadow-none inputMoney"
                placeholder="0"
                aria-describedby="basic-addon1"
                onChange={handleInputMoney}
                value={inputMoney}
                required
              />
            </div>
            <div className="row mt-4 mb-5">
              <div className="col text-center ">
                <button
                  className="btn-50k btn w-100"
                  onClick={() => handleInputMoney(50000)}
                >
                  Rp 50.000
                </button>
              </div>
              <div className="col text-center ">
                <button
                  className="btn-100k btn w-100"
                  onClick={() => handleInputMoney(100000)}
                >
                  Rp 100.000
                </button>
              </div>
              <div className="col text-center">
                <button
                  className="btn-150k btn w-100"
                  onClick={() => handleInputMoney(150000)}
                >
                  Rp 150.000
                </button>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-12">
                <p className="titleInputName mb-1">Nama Lengkap</p>
                <input
                  type="text"
                  className="form-control m-0 shadow-none"
                  name="inputNama"
                  value={formData.inputNama}
                  onChange={handleFormData}
                  required
                />
              </div>
              <div className="col-12">
                {" "}
                <p className="titleInputNoTel mb-1">Nomor Telepon</p>
                <input
                  type="number"
                  className="form-control m-0 shadow-none"
                  name="inputTelepon"
                  value={formData.inputTelepon}
                  onChange={handleFormData}
                  required
                />
              </div>
              <div className="col-12">
                {" "}
                <p className="titleInputEmail mb-1">Alamat Email</p>
                <input
                  type="email"
                  className="form-control m-0 shadow-none"
                  name="inputEmail"
                  value={formData.inputEmail}
                  onChange={handleFormData}
                  required
                />
              </div>
              <div className="col-12">
                {" "}
                <p className="titleInputNorek mb-1">Nomor Rekening</p>
                <input
                  type="number"
                  className="form-control m-0 shadow-none"
                  name="inputNorek"
                  value={formData.inputNorek}
                  onChange={handleFormData}
                  required
                />
              </div>
            </div>
            <div className="text-center mt-5 mb-5">
              <button type="submit" className="btn-lanjut btn text-white">
                LANJUT
              </button>
            </div>
            <div className="mb-5 text-center">
              <img src={ImgCreditCard} alt="Payment via credit card!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donasi;
