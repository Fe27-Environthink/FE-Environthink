import React from 'react'
import { FaClock } from 'react-icons/fa'
import Komentar from '../Komentar/Komentar'
import { getArticleDetail } from '../../Redux/Action/articleAction'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function DetailArticle() {
    const { id } = useParams();
    const { article, isLoading } = getArticleDetail({ id: id })

    // const { id } = useParams();
    // const { article, isLoading } = useSelector((state) => state.todoReducer);

    // useEffect(() => {
    //     dispatch(getArticleDetail({id}));
    //   }, []);

  return (
    <>
        <div id="articlesContent" className="container">
        {isLoading && <span>Loading...</span>}
            <div className="row ms-1 me-1">
                <div className="col-md-12 mb-3">
                <p className="hashTag m-0 p-0">
                    <span id="cathegory">{article.cathegory}</span> <span id="dot"></span>
                    <span id="hashTag">{article.hashTag}</span>
                </p>
                <h1 className="titleArticle" id="titleArticle">{article.titleArticle} </h1>
                <p className="text-dark">
                    By <span id="author" className="fw-bold"> {article.author}</span>
                    <i className='ms-1 me-1'><FaClock/></i>
                    <span id="date" className="fw-bold" style={{color: "#6f7376"}}>{article.date}</span>
                </p>
                </div>
                <div className="col-md-12 p-0 me-4 text-center">
                    <img className="articlesImage img-fluid" src={article.images} alt="" id="images" />
                </div>
                <div className="paragraf col-md-12 ps-0 pe-0 pt-5 ps-3">
                    <p id="paragraf1" className="text-dark">{article.paragraf1}</p>
                    <p id="paragraf2" className="text-dark">{article.paragraf2}</p>
                    <p id="paragraf3" className="text-dark">{article.paragraf3}</p>
                    <p id="paragraf4" className="text-dark">{article.paragraf4}</p>
                    <p id="paragraf5" className="text-dark">{article.paragraf5}</p>
                    <p id="paragraf6" className="text-dark">{article.paragraf6}</p>
                    <p id="paragraf7" className="text-dark">{article.paragraf7}</p>
                    <p id="paragraf8" className="text-dark">{article.paragraf8}</p>
                    <p id="paragraf9" className="text-dark">{article.paragraf9}</p>
                    <p id="paragraf10" className="text-dark">{article.paragraf10}</p>
                </div>
            </div>

            <Komentar/>
        </div>
    </>
  )
}

export default DetailArticle