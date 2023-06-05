import { Link } from "react-router-dom";
import "./Aksi.css";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDataAksi } from "../../Redux/Reducer/AksiReducer";
function Aksi() {
  const dispatch = useDispatch();
  const { listAksi, isLoading } = useSelector((state) => state.AksiReducer);
  const [limit, setLimit] = useState(3);
  const [showButton,setShowButton]=useState(true)
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    dispatch(getDataAksi());
  }, []);

  useEffect(() => {
    setFilterData(listAksi.slice(0, 3));
  }, [listAksi]);
  console.log("filter", filterData);
  // const handleMore = () => {
  //   setFilterData(listAksi.slice(0, ));
  //   console.log("limit",limit,",listaksi:",listAksi.length);
  //   if (limit>=listAksi.length) {
  //     // setShoeButton(false)
  //     console.log("cek");
  //   }else{
  //     console.log("gagal coi");
  //   }
  // };
 
  useEffect(()=>{
    setFilterData(listAksi.slice(0,limit ));
      console.log("limit",limit,",listaksi:",listAksi.length);
      if (listAksi.length>0 && limit>=listAksi.length) {
        console.log("berhasil");
        setShowButton(false)
        
      }
  },[limit])



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
            {filterData.map((item) => (
              <div className="col-md-4 col-sm-6 mb-4 pt-4 pb-4" key={item.id}>
                <div className="card card-aksi h-100">
                  <img
                    src="https://i.ibb.co/hVRwTrJ/perbudakan-modern-di-laut-terus-berlanjut-polri-gagal-lindungi-abk-ikan-indonesia.jpg"
                    className="card-img-top"
                    alt=" "
                  />
                  <div className="card-body">
                    <h6 className="card-title title title-aksi">{item.nama}</h6>
                    <p className="card-text sub-title d-flex align-items-center gap-2">
                      <FaUsers />{" "}
                      <span className="fw-medium fs-6">
                        {" "}
                        {item.jumlahDukungan}orang mendukung
                      </span>
                    </p>
                    <Link className="link-aksi" to={`/aksi/${item}`}>
                      <h5 className="btn btn-main d-block">
                        Pelajari Selengkapnya
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center pb-3">
          {showButton && (
            <button className="btn btn-lainnya "  onClick={()=>setLimit(limit+3)}>
              Aksi Lainnya
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Aksi;
