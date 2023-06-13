import React, { useEffect, useState } from 'react'
import { FaPen, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getDataAksi } from '../../../Redux/Action/AksiAction';
import { Spinner } from 'react-bootstrap';

function AksiAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {listAksi,isLoading} =useSelector((state)=>state.AksiReducer)
    const [showModal,setShowModal] =useState(false)
    useEffect(()=>{
        dispatch(getDataAksi())
    },[])
    useEffect(()=>{
        console.log(listAksi);
    },[listAksi])

    const handleShowModal= ()=>{
        setShowModal(true)
    }
  return (
    <div className="container">
        <div className="row pt-4">
          <div className="col-md-12 d-flex justify-content-end ">
            <button  className="btn bg-primary text-white text-sm px-5 py-2 d-flex gap-2 justify-content-end align-items-center" onclick={handleShowModal()}> 
             <FaPlus />  Tambah Aksi
            </button>
          </div>
        </div>

        <div
          className="card mt-4"
          style={{
            boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)",
            borderRadius: 9,
          }}
        >
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-md-2" className="imagesAdmin">
                      Image
                    </th>
                    <th scope="col-2">Title</th>
                    <th scope="col-2">Number Of Support</th>
                    <th scope="col-2">Target</th>
                
                    <th scope="col-4" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading?(
                    <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                        <span className="mx-2 h1" >loading   
                    </span>
                    <Spinner animation="border" variant="dark" />
                    </div>
                  ):listAksi.map((item) => (
                    <tr key={item.id}  
                      onClick={() => {
                        navigate(`/admin/article/${item.id}`);
                      }}>
                      <td className="me-5">
                        <img
                          src={item.url}
                          alt="name"
                          className="img-artikel w-100"
                          
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.numberofsupport}</td>
                      <td>{item.target}</td>
                    
                      <td>
                        <div className="row">
                          <div className="col-4 px-1">
                            <Link
                              to="/"
                              className="btn bg-success btn-update text-sm me-4 text-white w-100 px-2"
                            >
                              <FaPen />
                            </Link>
                          </div>
                          <div className="col-4 px-1">
                            <Link
                              to="/"
                              className="btn bg-danger btn-delete text-sm me-4 text-white w-100 px-2"
                            >
                              <FaTrashAlt/>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AksiAdmin