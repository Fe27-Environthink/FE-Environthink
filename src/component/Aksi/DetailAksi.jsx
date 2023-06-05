import { useParams } from "react-router-dom";
import "./Aksi.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDataAksi, getDetail } from './../../Redux/Reducer/AksiReducer';
function DetailAksi() {
const {key}=useParams();
const dispatch =useDispatch()
const {detailAksi,listAksi,isLoading} = useSelector((state)=>state.AksiReducer)
const [detail,setDetail]=useState([])
useEffect(()=>{
  dispatch(getDetail(key));
},[onload])
console.log("detail on detail",detailAksi);
console.log("listAksi on detail",listAksi);
  return (
    <>
     <div className="container pt-5 detail-aksi">
        <div className="row">
          <div className="col-md-8">
            <div id="aksi">
              <p className="hashTag  m-0 p-0">
                <span id="cathegory" >Petisi</span> <span id="dot" > </span>
                <span id="hashTag" >#Nelayan #Perbudakan</span>
              </p>

              <h3 id="title" >{detailAksi.nama}</h3>
              <img
                className="img-fluid pt-3"
                width="100%"
                src= {detailAksi.image}
                alt="image content"
                id="image"
              />
              <div className="paragraf pt-4">
                <p className="mb-4 paragraf">
                 {detailAksi.paragraf1}
                </p>
                <p className="mb-4 paragraf">
                {detailAksi.paragraf2}
                </p>
                <p id="paragraf-konklusi" className="fw-bold paragraf">
                {detailAksi.paragrafKonklusi}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div id="aksi">
              <h5 className="fw-bold" id="heading-form">
                belum ada dukungan
              </h5>
              <div
                className="progress"
                id="bar"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success"
                  id="bar-petisi"
                  style={{ width: "1%" }}
                />
              </div>
              <figcaption className="figure-caption text-end" id="figcaption">
                <span id="caption-bar" />
                {detailAksi.jumlahDukungan}/{detailAksi.Target}
                <span id="target" /> dukungan
              </figcaption>
              <p className="fw-semibold paragraf" id="paragarfPetisi">
              {detailAksi.paragrafPetisi}
              </p>
              <form className="form-group" id="form-petisi">
                <div className="mb-3">
                  <label htmlFor="namaLengkap" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="namaLengkap"
                    required
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
                    menerima pemberitahuan pembaruan tentang kampanye ini dan
                    kampanye lainnya.
                  </label>
                </div>
                <button
                  className="btn btn-petisi btn-danger w-100 m-2"
                  data-bs-toggle="modal1"
                  data-bs-target="#staticBackdrop1"
                >
                  <i className="fa fa-pen-nib me-2"> </i> Tanda Tangani Petisi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailAksi;
