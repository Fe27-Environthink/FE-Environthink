import { Link } from "react-router-dom";
import "./Aksi.css";
import { FaUsers } from "react-icons/fa";
function Aksi() {
  const item = [1, 2, 3, 4];

  return (
    <>
      <div className="container">
        <div className="artikel" id="artikel">
          <h3 className="text-start mb-3">Tanpa Aksi, Tidak Ada Perubahan</h3>
          <p className="sub-title">
            Ayo Bergabung dan Beraksi untuk Masa Depan Bumi yang Lebih Baik!
          </p>
          <div style={{ border: "0.5px solid #bfbfbf" }}></div>
          <div className="row pt-2" id="articlesContent">
            {item.map(item=>(
            
              <div className="col-md-4 col-sm-6 mb-4 pt-4 pb-4">
              <div className="card card-aksi h-100" key={item}>
                <img src="https://i.ibb.co/hVRwTrJ/perbudakan-modern-di-laut-terus-berlanjut-polri-gagal-lindungi-abk-ikan-indonesia.jpg" className="card-img-top" alt=" " />
                <div className="card-body">
                  <h5 className="card-title title-aksi">Hentikan Perbudakan Modern di Laut!</h5>
                  <p className="card-text sub-title d-flex align-items-center gap-2">
                   <FaUsers/> <span className="fw-medium fs-6"> 2,984 orang mendukung</span>
                  </p>
                  <Link className="link-aksi" to="/aksi/detail">
                                    <h5 className="btn btn-main d-block">Pelajari Selengkapnya</h5>
                                </Link>
                
                </div>
              </div>
            </div>
          ))}
          
          </div>
        </div>
        <div className="d-flex justify-content-center pb-3">
          <button className="btn btn-lainnya " id="">
            Aksi Lainnya
          </button>
        </div>
      </div>
    </>
  );
}
export default Aksi;
