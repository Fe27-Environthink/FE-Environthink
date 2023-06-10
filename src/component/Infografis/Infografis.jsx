import { useEffect, useState } from 'react'
import "./Infografis.css"
import { useDispatch, useSelector } from 'react-redux';
import { getInfografis } from '../../Redux/Action/infografisAction';
import Spinner from "react-bootstrap/Spinner";

function Infografis() {
    const dispatch = useDispatch();
    const { infografis, isLoading } = useSelector((state) => state.infografisReducer)
    const [limit, setLimit] = useState(3);
    const [showButton, setShowButton] = useState(true);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        dispatch(getInfografis());
      }, []);

      useEffect(() => {
        setFilterData(infografis.slice(0, 3));
    }, [infografis]);

    useEffect(() => {
        setFilterData(infografis.slice(0, limit));
        if (infografis.length > 0 && limit >= infografis.length) {
            setShowButton(false);
        }
    }, [limit]);

  return (
    <>
        <div className="container pt-5">
            <div className="infografis" id="infografis">
                <h3 className="text-start mb-3">Infografis</h3>
                <div style={{border: "0.5px solid #bfbfbf"}}></div>

                <div className="row pt-4" id="infografisContent">
                    {isLoading?(
                        <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                            <span className="mx-2 h1" >loading   
                        </span>
                        <Spinner animation="border" variant="dark" />
                        </div>
                    ): filterData.map((item) => (
                            <div key={item.id} className="col-md-6 col-lg-4 mb-3 pb-4">
                                <div className="card card-infografis h-100">
                                    <img src={item.images} style={{cursor: "pointer"}} className="card-img-top" data-bs-toggle="modal" data-bs-target="#${data[i].id}Backdrop" alt="artikel"/>
                                    <div className="card-body">
                                        <h1 className="card-title fs-6 title-infografis" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            {item.titleInfografis}
                                        </h1>
                                        <div className="modal fade" id="${data[i].id}Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">sfdgfh</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src="" className="card-img-top" alt="infografis"/>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                </div>
            </div>
            {!isLoading&&
                <div className="d-flex justify-content-center pb-3">
                {showButton && (
                    <button
                        className="btn" id="infografis-lainnya"
                        onClick={() => setLimit(limit + 3)}
                    >
                        Infografis Lainnya
                    </button>
                )}
                </div>
            }
        </div>
    </>
  )
}

export default Infografis