import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDataAksi } from "../../Redux/Action/AksiAction";
import { FaUsers } from "react-icons/fa";
import "./Aksi.css";

import { Spinner } from "react-bootstrap";
function AksiTerkait() {
  const { hashtag } = useParams();
  const dispatch = useDispatch();
  const { listAksi, isLoading } = useSelector((state) => state.AksiReducer);
  const [aksiTerkait, setAkasiTerkait] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDataAksi());
  }, []);
  useEffect(() => {
    // setFilterData  (listAksi.filter((item)=>item.hashtag.include({hashtag})))
    // console.log(filterData);
    setAkasiTerkait(listAksi.filter((item) => item.hashtag.includes(hashtag)));

    console.log(aksiTerkait);
  }, [listAksi]);

  return (
    <>
      <div className="container mt-4">
        <div className="aksi">
          <h3 className="text-start ">Aksi terkait &quot;{hashtag}&quot; </h3>

          <div style={{ border: "0.5px solid #bfbfbf" }}></div>

          <div className="row pt-2">
            {isLoading ? (
              <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                <span className="mx-2 h1">loading</span>
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
              aksiTerkait.map((item) => (
                <div key={item.id} className="aksiContent">
                  <div className="row ms-1 me-1 mt-5 mb-5">
                    <div className="col-md-4 p-0 me-4">
                      <img id="aksiImage" src={item.image} alt="Images " />
                    </div>
                    <div className="col-md-7 ps-0 pe-0 mt-2">
                      <p className="hashTag  m-0 p-0">
                        <Link to={`/aksi/`} style={{ textDecoration: "none" }}>
                          <span id="cathegory">Petisi</span>{" "}
                          <span id="dot"> </span>
                        </Link>
                        {item != 0 &&
                          item.hashtag.map((item) => (
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
                      <a
                        className="wrapperLinkTitleAksi"
                        onClick={() => navigate(`/aksi/${item.id}`)}
                      >
                        <h3 className="titleAksi">{item.title}</h3>
                      </a>
                      <p className="descAksi text-dark wrapText">
                        {item.paragraf1}
                      </p>
                      <p className="card-text  kontributorAksi sub-title d-flex align-items-center gap-2">
                        <FaUsers />
                        {item.numberOfSupport == 0 ? (
                          <span className="fw-medium fs-6">
                            Belum ada dukungan
                          </span>
                        ) : item.numberOfSupport < item.target ? (
                          <span className="fw-medium fs-6">
                            {item.numberOfSupport} orang mendukung
                          </span>
                        ) : (
                          <span className="fw-medium fs-6">
                            Petisi Mencapai Kemenangan
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AksiTerkait;
