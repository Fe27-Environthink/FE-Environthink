import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getKomentar, addKomentar, deleteKomentar, editKomentar } from '../../Redux/Action/komentarAction';

function Komentar() {
    const dispatch = useDispatch();
    const { komentar, isLoading } = useSelector((state) => state.komentarReducer)
    const [inputKomentar, setInputKomentar] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputName, setInputName] = useState("");

    // const [editTodoId, setEditTodoId] = useState(null);
    // const [editTodoText, setEditTodoText] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [userId] = useState("33")

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (editingId) {
            let editedKomentar = {
                id: editingId,
                name: inputName,
                email: inputEmail,
                komentar: inputKomentar,
            }
            dispatch(editKomentar(editedKomentar));
            setEditingId(null);
        } else {
            let newData = {
                name: inputName,
                email: inputEmail,
                komentar: inputKomentar
            };
            dispatch(addKomentar(newData));
            
            
        }
        setInputName("")
        setInputEmail("")
        setInputKomentar("");
        setShowModal(false);
    };

    const handleEdit = (id) => {
        const selectedKomentar = komentar.find((item) => item.id === id);
        setInputName(selectedKomentar.name);
        setInputEmail(selectedKomentar.email);
        setInputKomentar(selectedKomentar.komentar);
        setEditingId(id);
        setShowModal(true);
    };

    useEffect(() => {
        dispatch(getKomentar());
    }, [dispatch]);

    return (
    <>
        <div className="container p-5">
            <div className="komentar" id="komentar">
                <h3 className="text-start mb-3">Komentar</h3>
                <div style={{border: "0.5px solid #bfbfbf"}}></div>
                <form onSubmit={handleSubmit} className="add-post-form">
                    <div className="row pt-5">
                        <div className="col-lg-8 col-md-8 col-sm-12 field">
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                id="email-value"
                                className="form-control form-control-md me-2"
                                placeholder="Masukkan Alamat Email"
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                id="name-value"
                                className="form-control form-control-md"
                                placeholder="Masukkan Nama"
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group mb-3">
                            <textarea
                                id="komentar-value"
                                className="form-control form-control-md"
                                placeholder="Tulis Komentar"
                                style={{height: "150px", resize: "none"}}
                                value={inputKomentar}
                                onChange={(e) => setInputKomentar(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                        {editingId ? "Edit Comment" : "Add Comment"}
                        </button>
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
                                {/* {
                                    userId == item.userId && (
                                        <>
                                            <Link to="#" className="card-link text-decoration-none">Edit</Link>
                                            <Link onClick={() => dispatch(deleteKomentar(item.id))} className="card-link text-decoration-none">Delete</Link>
                                        </>
                                        
                                    )
                                } */}

                                <Link onClick={() => handleEdit(item.id)} className="card-link text-decoration-none">Edit</Link>
                                <Link onClick={() => dispatch(deleteKomentar(item.id))} className="card-link text-decoration-none">Delete</Link>
                                

                                {/* Modal */}
                                {showModal && (
                                    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Edit Comment</h5>
                                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="edit-name">Name</label>
                                                    <input
                                                    type="text"
                                                    className="form-control"
                                                    id="edit-name"
                                                    value={inputName}
                                                    onChange={(e) => setInputName(e.target.value)}
                                                    required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="edit-email">Email</label>
                                                    <input
                                                    type="email"
                                                    className="form-control"
                                                    id="edit-email"
                                                    value={inputEmail}
                                                    onChange={(e) => setInputEmail(e.target.value)}
                                                    required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="edit-komentar">Komentar</label>
                                                    <textarea
                                                    className="form-control"
                                                    id="edit-komentar"
                                                    rows="3"
                                                    value={inputKomentar}
                                                    onChange={(e) => setInputKomentar(e.target.value)}
                                                    required
                                                    ></textarea>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                                    Close
                                                    </button>
                                                    <button type="submit" className="btn btn-primary">
                                                    Save Changes
                                                    </button>
                                                </div>
                                                </form>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
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