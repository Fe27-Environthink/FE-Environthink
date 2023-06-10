import "./App.css";
// import Artikel from "./component/Artikel/Artikel";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./component/Navbar/Navbars";
import LayoutAdmin from "./component/Admin/Sidebar/LayoutAdmin";
import Artikel from "./component/Admin/ArtikelAdmin/ArtikelAdmin";
import NavbarAdmin from "./component/Admin/Sidebar/NavbarAdmin";
import ArtikelAdmin from "./component/Admin/ArtikelAdmin/ArtikelAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarAdmin />

        <Routes>
          {/* Isi route nya ya kyk page Homepage, search, aksi, article...contoh  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<ArtikelAdmin />} />
          <Route path="/admin/article" element={<ArtikelAdmin />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
