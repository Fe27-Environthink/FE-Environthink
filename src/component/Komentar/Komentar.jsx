import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getKomentar } from '../../Redux/Action/komentarAction';

function Komentar() {
    const dispatch = useDispatch();
    const { komentar, isLoading } = useSelector((state) => state.komentarReducer)

    useEffect(() => {
        dispatch(getKomentar());
      }, []);
  return (
    <>
        <div className="container p-5">
            <div className="komentar" id="komentar">
                <h3 className="text-start mb-3">Komentar</h3>
                <div style={{border: "0.5px solid #bfbfbf"}}></div>
                <form className="add-post-form">
                    <div className="row pt-5">
                        <div className="col-lg-8 col-md-8 col-sm-12 field">
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                id="email-value"
                                className="form-control form-control-md me-2"
                                placeholder="Masukkan Alamat Email"
                                required
                            />
                            <input
                                type="text"
                                id="name-value"
                                className="form-control form-control-md"
                                placeholder="Masukkan Nama"
                                required
                            />
                        </div>
                        <div className="input-group mb-3">
                            <textarea
                                id="komentar-value"
                                className="form-control form-control-md"
                                placeholder="Tulis Komentar"
                                style={{height: "150px", resize: "none"}}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Comment</button>
                    </div>
                </div>
                </form>
            </div>

            {isLoading && <span>Loading...</span>}
            <div className="row pt-4">
                {komentar.length > 0 &&
                    komentar.map((item) => (
                    <div key={item.id} className="posts-list" id="posts-list">
                        <div className="card bg-light mt-2 mb-2" style={{width: "50rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{item.createdAt} <span id="dot2"></span> <span> {item.email}</span></h6>
                                <p className="card-text text-dark">{item.komentar}</p>
                                <Link to="#" className="card-link">Edit</Link>
                                <Link to="#" className="card-link">Delete</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </>
  )
}

export default Komentar