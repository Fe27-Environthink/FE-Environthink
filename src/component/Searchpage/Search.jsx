import "./Search.css";

const Search = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-10">
            <div className="input-group mb-3">
              <input
                id="inputSearchArticle"
                type="text"
                className="inputSearch form-control shadow-none border border-2"
                placeholder="Cari Artikel lainnya!"
                aria-label="Username"
              />
            </div>
          </div>
          <div className="col-12 col-md-2 text-center text-md-start">
            <button id="btnCari" className="btnCari btn text-white w-100">
              Cari
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row pt-4" id="articlesContent"></div>
      </div>
    </>
  );
};

export default Search;
