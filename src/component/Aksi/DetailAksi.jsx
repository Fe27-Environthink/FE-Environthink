import { Link, useParams } from "react-router-dom";
import "./Aksi.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getDetail,  } from "../../Redux/Action/AksiAction";

import FormPetisi from "./FormPetisi";

function DetailAksi() {
  const { key } = useParams();
  const dispatch = useDispatch();
  const { detailAksi, isLoading } = useSelector(
    (state) => state.AksiReducer
  );

  let renderHeaderPetisi = () => {
    console.log(detailAksi.numberOfSupport);
    {
      if (detailAksi.numberOfSupport == 0) {
        return (
          <h5 className="fw-bold" id="heading-form">
            Belum ada dukungan 
          </h5>
        );
      } else if (detailAksi.numberOfSupport < detailAksi.target) {
        return (
          <h5 className="fw-bold" id="heading-form">
            {detailAksi.numberOfSupport} orang yang sudah mendukung
          </h5>
        );
      } else {
        return (
          <h5 className="fw-bold" id="heading-form">
            Petisi Mencapai Kemenangan
          </h5>
        );
      }
    }
  };
  let renderTextPetisi = () => {
    if (detailAksi.numberOfSupport < detailAksi.target) {
      return (
        <p className="fw-semibold paragraf" id="paragarfPetisi">
          {detailAksi.textPetisi}
        </p>
      );
    } else {
      return (
        <p className="fw-semibold paragraf " id="paragarfPetisi">
          mari kita lanjutkan perjuangan kita dengan bergabung dalam aksi-aksi
          lain yang sejenis untuk terus memperjuangkan hak-hak kita dan membawa
          perubahan positif bagi masyarakat. Bersama-sama kita bisa mewujudkan
          perubahan yang kita inginkan!
        </p>
      );
    }
  };
  const renderBar = () => {
    let Persentase =
      (detailAksi.numberOfSupport / detailAksi.target) * 100 + "%";
    console.log(Persentase);
    return { width: Persentase };
  };
  useEffect(() => {
    dispatch(getDetail(key));
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
          <span className="mx-2 h1">loading</span>
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div className="container pt-5 detail-aksi">
          <div className="row">
            <div className="col-md-8">
              <div id="aksi">
                <p className="hashTag  m-0 p-0">
                  <Link to={`/aksi/`} style={{ textDecoration: "none" }}>
                    <span id="cathegory">Petisi</span> <span id="dot"> </span>
                  </Link>
                  {detailAksi != 0 &&
                    detailAksi.hashtag.map((item) => (
                      <Link
                        to={`/aksi/terkait/${item}`}
                        style={{ textDecoration: "none" }}
                      >
                        <span id="hashTag" className="p-2 hashTag ">
                          # {item}
                        </span>
                      </Link>
                    ))}
                </p>

                <h3 id="title">{detailAksi.title}</h3>
                <img
                  className="img-fluid pt-3"
                  width="100%"
                  src={detailAksi.image}
                  alt="image content"
                  id="image"
                />
                <div className="paragraf pt-4">
                  <p className="mb-4 paragraf">{detailAksi.paragraf1}</p>
                  <p className="mb-4 paragraf">{detailAksi.paragraf2}</p>
                  <p id="paragraf-konklusi" className="fw-bold paragraf">
                    {detailAksi.paragrafKonklusi}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5">
              <div id="aksi">
                {renderHeaderPetisi()}
                {detailAksi.numberOfSupport < detailAksi.target ? (
                  <div>
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
                        style={renderBar()}
                      />
                    </div>
                    <figcaption
                      className="figure-caption text-end"
                      id="figcaption"
                    >
                      <span id="caption-bar" />
                      {detailAksi.numberOfSupport}/{detailAksi.target}
                      <span id="target" /> dukungan
                    </figcaption>
                  </div>
                ) : (
                  <span></span>
                )}
                {renderTextPetisi()}

                {detailAksi.numberOfSupport == detailAksi.target ? (
                  <Link className="link-aksi" to={`/aksi`}>
                    <button
                      className="btn btn-petisi btn-main w-100 mb-4 "
                      data-bs-toggle="modal1"
                      data-bs-target="#staticBackdrop1"
                    >
                      <i className="fa fa-pen-nib me-2"> </i> Ikuti Aksi Yang
                      Lainnya
                    </button>
                  </Link>
                ) : (
                  <FormPetisi />
                 
                )}
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}
export default DetailAksi;
