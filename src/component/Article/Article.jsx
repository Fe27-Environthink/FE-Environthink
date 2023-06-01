import React from 'react'
import "./Article.css"
import Infografis from '../Infografis/Infografis'
import { Link } from 'react-router-dom'

const Article = () => {
  return (
    <>
        <div className="container">
            <div className="artikel" id="artikel">
                <h3 className="text-start mb-3">Artikel</h3>
                <div style={{border: "0.5px solid #bfbfbf"}}></div>
                <div className="row pt-2" id="articlesContent">
                    <div className="col-md-6 col-lg-4 mb-3 pt-4 pb-4">
                        <div className="card card-artikel h-100" >
                            <img src="" className="card-img-top" alt="artikel"/>
                            <div className="card-body">
                                <Link className="wrapperLinkTitleArticles" to="">
                                    <h5 className="card-title">data</h5>
                                </Link>
                                <p className="card-text" style={{color: "#595959", textAlign: "justify"}}>sdfghj</p>
                                <p className="fw-bold" style={{color: "#6F7376"}}>
                                    <span className="author">asdf</span> <span id="dot2"></span>
                                    <span className="date">asdfg</span>
                                </p>
                            </div>
                        </div>
                    </div>
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