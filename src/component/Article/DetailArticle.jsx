import React from 'react'
import { FaClock } from 'react-icons/fa'
import Komentar from '../Komentar/Komentar'

function DetailArticle() {
  return (
    <>
        <div id="articlesContent" className="container">
            <div className="row ms-1 me-1">
                <div className="col-md-12 mb-3">
                <p className="hashTag m-0 p-0">
                    <span id="cathegory">Cerita</span> <span id="dot"></span>
                    <span id="hashTag">#EnergiTerbarukan #Laut</span>
                </p>
                <h1 className="titleArticle" id="titleArticle">Proyek Minyak Bumi</h1>
                <p className="text-dark">
                    By <span id="author" className="fw-bold"> Sherina Redjo</span>
                    <i className='ms-1 me-1'><FaClock/></i>
                    <span id="date" className="fw-bold" style={{color: "#6f7376"}}>12 April 2023</span>
                </p>
                </div>
                <div className="col-md-12 p-0 me-4 text-center">
                    <img className="articlesImage img-fluid" src="" alt="" id="images" />
                </div>
                <div className="paragraf col-md-12 ps-0 pe-0 pt-5 ps-3">
                    <p id="paragraf1" className="text-dark">Di mana ada pengeboran, di situlah terjadi tumpahan minyak</p>
                    <p id="paragraf2" className="text-dark">Di mana ada pengeboran, di situlah terjadi tumpahan minyak</p>
                    <p id="paragraf3" className="text-dark">Di mana ada pengeboran, di situlah terjadi tumpahan minyak</p>
                    <p id="paragraf4" className="text-dark"></p>
                    <p id="paragraf5" className="text-dark"></p>
                    <p id="paragraf6" className="text-dark"></p>
                    <p id="paragraf7" className="text-dark"></p>
                    <p id="paragraf8" className="text-dark"></p>
                    <p id="paragraf9" className="text-dark"></p>
                    <p id="paragraf10" className="text-dark"></p>
                </div>
            </div>

            <Komentar/>
        </div>
    </>
  )
}

export default DetailArticle