import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./ArtikelAdmin.css";
import { FaClock } from 'react-icons/fa';
import { getArticleDetail } from '../../../Redux/Action/articleAction';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";

function DetailArtikelAdmin() {
    const { key } = useParams();
    const dispatch = useDispatch();

    const { detailArticle, article, isLoading } = useSelector(
        (state) => state.articleReducer
    );

    useEffect(() => {
        dispatch(getArticleDetail(key));
    }, []);
  return (
    <div>
        <div className='container pt-5'>
            <div className="row mb-4">
                <div className="col-md-12 d-flex justify-content-end">
                <Link
                    to=""
                    className="btn bg-success text-white text-sm me-4 px-5 py-2"
                >
                    Update
                </Link>
                <button
                    className="btn bg-danger text-white text-sm me-5 px-5 py-2"
                >
                    Delete
                </button>
                </div>
            </div>
            {isLoading ? (
                <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                    <span className="mx-2 h1">loading</span>
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <>
                    {detailArticle.length != 0 && (
                        <>
                            <div className="row mb-4">
                                <div className="col-md-6 col-lg-6 p-3">
                                    <img className='imgArticleAdmin' src={detailArticle.images}/>
                                </div>

                                <div className="col-md-6 col-lg-6 pt-5">
                                    <h3 className="titleArticle pt-4" id="titleArticle">{detailArticle.titleArticle}</h3>
                                    <h5 id="cathegory" className='cathegory pt-3'>{detailArticle.cathegory}</h5>
                                    {detailArticle.hashTag.map((hashTag) => (
                                        <span
                                            id="hashTag"
                                            key={hashTag}
                                            className="hashTagArticle text-decoration-none me-2 pt-4"
                                        >
                                            #{hashTag}
                                        </span>
                                    ))}
                                    <p className="text-dark pt-3">
                                        By{" "}
                                        <span id="author" className="fw-bold">
                                            {" "}
                                            {detailArticle.author}
                                        </span>
                                    </p>
                                    <p className="text-dark">
                                        <i className="me-2">
                                            <FaClock />
                                        </i>
                                        <span
                                            id="date"
                                            className="fw-bold"
                                            style={{ color: "#6f7376" }}
                                        >
                                            {detailArticle.date}
                                        </span>
                                    </p>
                                </div>
                                
                                <div className="descriptions pt-4 mb-3">
                                    <h3 className="text-primary-dark">Descriptions</h3>
                                    <div className="paragraf col-md-12 ps-0 pe-0 pt-4 ps-3">
                                        <p id="paragraf1" className="text-dark">
                                            {detailArticle.paragraf1}
                                        </p>
                                        <p id="paragraf2" className="text-dark">
                                            {detailArticle.paragraf2}
                                        </p>
                                        <p id="paragraf3" className="text-dark">
                                            {detailArticle.paragraf3}   
                                        </p>
                                        <p id="paragraf4" className="text-dark">
                                            {detailArticle.paragraf4}
                                        </p>
                                        <p id="paragraf5" className="text-dark">
                                            {detailArticle.paragraf5}
                                        </p>
                                        <p id="paragraf6" className="text-dark">
                                            {detailArticle.paragraf6}
                                        </p>
                                        <p id="paragraf7" className="text-dark">
                                            {detailArticle.paragraf7}
                                        </p>
                                        <p id="paragraf8" className="text-dark">
                                            {detailArticle.paragraf8}
                                        </p>
                                        <p id="paragraf9" className="text-dark">
                                            {detailArticle.paragraf9}
                                        </p>
                                        <p id="paragraf10" className="text-dark">
                                            {detailArticle.paragraf10}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
                
            )}
            

            
        </div>
    </div>
    )
}

export default DetailArtikelAdmin