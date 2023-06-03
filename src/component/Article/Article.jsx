import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../../Redux/Action/articleAction'
import "./Article.css"
import Infografis from '../Infografis/Infografis'
import { Link, useNavigate } from 'react-router-dom'

function Article() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { article, isLoading } = useSelector((state) => state.articleReducer)

    useEffect(() => {
        dispatch(getArticle());
      }, []);
  return (
    <>
        <div className="container">
            <div className="artikel" id="artikel">
                <h3 className="text-start mb-3">Artikel</h3>
                <div style={{border: "0.5px solid #bfbfbf"}}></div>

                {isLoading && <span>Loading...</span>}

                <div className="row pt-2" id="articlesContent">
                    {article.length > 0 &&
                        article.map((item) => (
                            <div key={item.id} 
                                className="col-md-6 col-lg-4 mb-3 pt-4 pb-4"
                               
                                >
                                <div className="card card-artikel h-100" >
                                    <img src={item.images} className="card-img-top" alt="artikel"/>
                                    <div className="card-body">
                                        <Link className="wrapperLinkTitleArticles">
                                            <h5 className="card-title">{item.titleArticle}</h5>
                                        </Link>
                                        <p className="card-text" style={{color: "#595959", textAlign: "justify"}}>{item.descArticle}</p>
                                        <p className="fw-bold" style={{color: "#6F7376"}}>
                                            <span className="author"> {item.author} </span> <span id="dot2"></span>
                                            <span className="date"> {item.date} </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className="d-flex justify-content-center pb-3">
                <button className="btn" id="artikel-lainnya">Artikel Lainnya</button>
            </div>
        </div>

        <Infografis />
    </>
  )
}

export default Article