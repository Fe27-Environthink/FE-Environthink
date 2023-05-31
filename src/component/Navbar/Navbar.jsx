import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg d-flex flex-column justify-content-between shadow sticky-top bg-white">
      <div className="container">
        <NavLink className="navbar-brand">
          <img src={Logo} id="logo" alt="Environthink Logo" />
        </NavLink>
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
            <li className="nav-item mt-1">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mt-1">
              <NavLink className="nav-link active" to="aksi.html">
                Aksi
              </NavLink>
            </li>
            <li className="nav-item mt-1">
              <NavLink className="nav-link active" to="article.html">
                Artikel
              </NavLink>
            </li>
            <li className="nav-item mt-2 mb-2 ms-3 me-4">
              <NavLink className="" to="./searchPage.html">
                <BsSearch size="1.4em" className="searchIcon text-dark " />
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btnDonasi btn nav-link active ps-3 pe-3"
                to="donasi.html"
              >
                Donasi
              </NavLink>
            </li>
            <li className="nav-item ">
              <div id="button-login">
                <NavLink
                  className="btnLogin m-1 btn nav-link active ps-3 pe-3"
                  to="login.html"
                >
                  Login
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
