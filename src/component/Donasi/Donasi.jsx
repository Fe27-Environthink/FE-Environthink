import "./Donasi.css";
import ImgCreditCard from "../../assets/CardCredit.png";
import { useState } from "react";

const Donasi = () => {
  const buttonStyleBackgrouned = {
    backgroundColor: "#14ae5c",
    color: "white",
  };

  const buttonOutlined = {
    border: "1px solid #14ae5c",
  };

  const [styleButton, setStyleButton] = useState(false);
  const [titleDonation, setTitleDonation] = useState("Donasi Bulanan");

  const [inputMoney, setInputMoney] = useState("");

  const handleInputMoney = (event) => {
    // console.log(typeof event);
    if (typeof event == "number") {
      // console.log(event);
      const getButtonValue = event;
      const formattedValue = Number(getButtonValue).toLocaleString("id-ID");
      setInputMoney(formattedValue);
      // const inputNumber = parseInt(event.replace(/\D/g, ""), 10);
      // console.log(inputNumber);
    } else if (event.target.value == "") {
      setInputMoney("");
      // const formattedValue = inputNumber.toLocaleString("id-ID");
      // setInputMoney(formattedValue);
    } else if (typeof event == "object") {
      const inputNumber = parseInt(event.target.value.replace(/\D/g, ""), 10);
      const formattedValue = inputNumber.toLocaleString("id-ID");
      setInputMoney(formattedValue);
    }
  };

  const handleCathegoryDonation = (cathegoryDonation) => {
    cathegoryDonation == "Donasi Bulanan"
      ? setStyleButton(false)
      : setStyleButton(true);
    setTitleDonation(cathegoryDonation);
  };

  const ppp = () => {
    const formatedNumber = parseInt(inputMoney.replace(/\D/g, ""), 10);
    console.log(formatedNumber);
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
          <div className="wrapperButton mb-5 row">
            <div className="col bg-warnings">
              <button
                style={
                  styleButton == false ? buttonStyleBackgrouned : buttonOutlined
                }
                className="btnBulanan btn w-100"
                onClick={() => handleCathegoryDonation("Donasi Bulanan")}
              >
                Donasi bulanan
              </button>
            </div>
            <div className="col bg-dangers">
              <button
                className="btnSatuKali btn w-100"
                style={styleButton ? buttonStyleBackgrouned : buttonOutlined}
                onClick={() => handleCathegoryDonation("Donasi Satu Kali")}
              >
                Donasi satu kali
              </button>
            </div>
          </div>
          <p className="TitleDonasi">{titleDonation}</p>
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
              <input type="text" className="form-control m-0 shadow-none" />
            </div>
            <div className="col-12">
              {" "}
              <p className="titleInputNoTel mb-1">Nomor Telepon</p>
              <input type="text" className="form-control m-0 shadow-none" />
            </div>
            <div className="col-12">
              {" "}
              <p className="titleInputEmail mb-1">Alamat Email</p>
              <input type="text" className="form-control m-0 shadow-none" />
            </div>
          </div>
          <div className="text-center mt-5" onClick={ppp}>
            <button className="btn-lanjut btn text-white">LANJUT</button>
          </div>
          <img src={ImgCreditCard} alt="Payment via credit card!" />
        </div>
      </div>
    </div>
  );
};

export default Donasi;
