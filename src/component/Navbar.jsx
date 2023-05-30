import "./Navbar.css";
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex flex-column justify-content-between shadow sticky-top bg-white">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} id="logo" alt="Environthink Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="justify-content-end collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="aksi.html">
                  Aksi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="article.html">
                  Artikel
                </a>
              </li>
              <li className="nav-item mt-1 mb-2 ms-3 me-4">
                <a className="" href="./searchPage.html">
                  <i
                    id="searchIcon"
                    className="bi bi-search fs-5 text-dark"
                  ></i>
                </a>
              </li>
              <li className="nav-item m-1">
                <a
                  className="btnDonasi btn nav-link active ps-3 pe-3"
                  href="donasi.html"
                >
                  Donasi
                </a>
              </li>
              <li className="nav-item ">
                <div id="button-login">
                  <a
                    className="btnDonasi m-1 btn nav-link active ps-3 pe-3"
                    href="login.html"
                  >
                    login
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
