import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDataAksi } from "../../Redux/Action/AksiAction";
import { FaUsers } from "react-icons/fa";
import "./Aksi.css"
import { Spinner } from "react-bootstrap";
function AksiTerkait() {
    const {hashtag}=useParams()
    const dispatch = useDispatch()
    const {listAksi,isLoading} = useSelector(state=>state.AksiReducer)
    const [aksiTerkait,setAksiTerkait] =useState([])
    useEffect(()=>{
        dispatch(getDataAksi())
    },[])
    useEffect(()=>{
        // setFilterData  (listAksi.filter((item)=>item.hashtag.include({hashtag})))
        // console.log(filterData);
        setAksiTerkait(listAksi.filter(item =>item.hashtag.includes(hashtag)))
        
       
    },[listAksi])
  return (

    <>
     <div className="container mt-4">
        <div className="artikel" id="artikel">
          <h3 className="text-start ">Aksi terkait &quot;{hashtag}&quot; </h3>
          
          <div style={{ border: "0.5px solid #bfbfbf" }}></div>

          <div className="row pt-2" id="articlesContent">
            {isLoading ? (
              <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                <span className="mx-2 h1">loading</span>
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
                aksiTerkait.map((item) => (
                <div className="col-md-4 col-sm-6  pt-4 pb-4" key={item.id}>
                  <div className="card card-aksi h-100">
                    <img
                      src={item.image}
                      className="card-img-top h-100"
                      alt=" "
                    />
                    <div className="card-body">
                      <h6 className="card-title title title-aksi">
                        {item.title}
                      </h6>
                      <p className="card-text sub-title d-flex align-items-center gap-2">
                        <FaUsers />
                        {item.numberOfSupport==0? (
                          <span className="fw-medium fs-6">
                            Belum ada dukungan
                          </span>
                        ) :item.numberOfSupport < item.target ? (
                          <span className="fw-medium fs-6">
                            {item.numberOfSupport} orang mendukung
                          </span>
                        ): (
                          <span className="fw-medium fs-6">
                           Petisi Mencapai Kemenangan
                          </span>
                        )
                        }
                      </p>
                      <Link className="link-aksi" to={`/aksi/${item.id}`}>
                        {item.numberOfSupport<item.target?<h5 className="btn btn-main d-block">
                          Pelajari Selengkapnya
                        </h5>:<h5 className="btn btn-secondary d-block">
                          Pelajari Selengkapnya
                        </h5>}
                        
                      </Link>
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
