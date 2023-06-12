import { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Komentar from "../Komentar/Komentar";
import { getArticleDetail } from "../../Redux/Action/articleAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';

function DetailArticle() {
  const { key } = useParams();
  const dispatch = useDispatch();

  const { detailArticle, article, isLoading } = useSelector(
    (state) => state.articleReducer
  );

  useEffect(() => {
    dispatch(getArticleDetail(key));
  }, []);

  return (
    <>
      <div id="articlesContent" className="container pt-4">
        {isLoading ? (
          <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
            <span className="mx-2 h1">loading</span>
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          <>
            {detailArticle.length != 0 && (
              <>
                <div className="col-md-12 mb-3">
                  <p className="hashTag m-0 p-0">
                    <span id="cathegory">{detailArticle.cathegory}</span>{" "}
                    <span id="dot"></span>
                    
                    {detailArticle.hashTag.map((hashTag) => (
                         <Link
                         to={`/article/terkait/${hashTag}`}
                         style={{ textDecoration: "none" }}
                       >
                      <span
                        id="hashTag"
                        key={hashTag}
                        className="hashTagArticle text-decoration-none me-2"
                      >
                        #{hashTag}
                      </span>
                      </Link>
                    ))}
                  </p>
                  <h1 className="titleArticle" id="titleArticle">
                    {detailArticle.titleArticle}{" "}
                  </h1>
                  <p className="text-dark">
                    By{" "}
                    <span id="author" className="fw-bold">
                      {" "}
                      {detailArticle.author}
                    </span>
                    <i className="ms-1 me-1">
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
                <div className="col-md-12 p-0 me-4 text-center">
                  <img
                    className="articlesImage img-fluid"
                    src={detailArticle.images}
                    alt=""
                    id="images"
                  />
                </div>
                <div className="paragraf col-md-12 ps-0 pe-0 pt-5 ps-3">
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
              </>
            )}
          </>
        )}
        <Komentar />
      </div>
    </>
  );
}

export default DetailArticle;
