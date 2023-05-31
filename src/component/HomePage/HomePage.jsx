import InfoLogo from "../../assets/infoLogo.png";
import ShareLogo from "../../assets/shareLogo.png";
import PeopleLogo from "../../assets/peopleLogo.png";
import "./Homepage.css";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid banner">
        <div className="container banner-content col-lg-9">
          <div>
            <h1 className="titleHighlight1 text-white">
              Satu langkah kecil untuk lingkungan, satu <br />
              lompatan besar untuk bumi
            </h1>
            <p className="subTitleHighlight1 mt-4 mb-4 fw-bold fs-5">
              Jangan tunggu sampai terlambat, mari kita bertindak <br />
              sekarang untuk menyelamatkan planet kita.
            </p>
            <a className="btn btnHighlight1 mb-5" href="aksi.html">
              Ikuti Aksi
            </a>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h3 className="titleNewArticle mt-5 text-center">Artikel Terbaru</h3>
        <hr className="lineArticle text-center opacity-100" />
      </div>

      <div className="container">
        <div className="articlesContent" id="articlesContent"></div>
        <div className="d-flex justify-content-start ms-1">
          <button className="btn" id="artikel-lainnya">
            Artikel Lainnya
          </button>
        </div>
      </div>

      <div className="Highlight2 text-center mt-5">
        <h1 className="titleHighlight2 text-white pt-5">
          Menjadi Aktivis Digital
        </h1>
        <p className="subTitleHighlight2 text-white pb-5 me-3 ms-3">
          Jangan biarkan suaramu hilang di kerumunan jadilah aktivis digital dan
          berikan pengaruhmu pada dunia
        </p>
        <div className="container">
          <div className="row justify-content-center gap-3 gap-md-5 pb-5 ms-3 me-3">
            <div className="col-12 col-md-3">
              <a href="#" type="button">
                <img
                  className="imgBtnHighlight2"
                  src={InfoLogo}
                  alt="Pelajari!"
                />
              </a>
              <h2 className="titleBtnHighlight2 text-white">Pelajari Isunya</h2>
              <p className="subTitleBtnHighlight2">
                Pengetahuan adalah kunci untuk melindungi Bumi dengan lebih
                tepat dan efektif. Mari bersama-sama pelajari isunya
              </p>
            </div>
            <div className="col-12 col-md-3">
              <a href="#" type="button">
                <img
                  className="imgBtnHighlight2"
                  src={ShareLogo}
                  alt="Share!"
                />
              </a>
              <h2 className="titleBtnHighlight2 text-white">
                Bagikan Kampanyenya
              </h2>
              <p className="subTitleBtnHighlight2">
                Pengetahuan adalah kunci untuk melindungi Bumi dengan lebih
                tepat dan efektif. Mari bersama-sama pelajari isunya
              </p>
            </div>
            <div className="col-12 col-md-3">
              <a href="#" type="button">
                <img
                  className="imgBtnHighlight2"
                  src={PeopleLogo}
                  alt="Aktivis"
                />
              </a>
              <h2 className="titleBtnHighlight2 text-white">Lakukan Aksi</h2>
              <p className="subTitleBtnHighlight2">
                Pengetahuan adalah kunci untuk melindungi Bumi dengan lebih
                tepat dan efektif. Mari bersama-sama pelajari isunya
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
