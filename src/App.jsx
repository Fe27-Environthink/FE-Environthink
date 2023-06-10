import "./App.css";
// import Artikel from "./component/Artikel/Artikel";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./component/Navbar/Navbars";
import Aksi from "./component/Aksi/Aksi";
import DetailAksi from "./component/Aksi/DetailAksi";
import Search from "./component/Searchpage/Search";
import Donasi from "./component/Donasi/Donasi";
import Article from "./component/Article/Article";
import DetailArticle from "./component/Article/DetailArticle";
import Artikel from "./component/Admin/ArtikelAdmin/ArtikelAdmin";
import NavbarAdmin from "./component/Admin/Sidebar/NavbarAdmin";
import ArtikelAdmin from "./component/Admin/ArtikelAdmin/ArtikelAdmin";
import HomepageAdmin from "./component/Admin/HomepageAdmin/HomepageAdmin";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aksi" element={<Aksi />} />
          <Route path="/aksi/:key" element={<DetailAksi />} />
          <Route path="/search" element={<Search />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:key" element={<DetailArticle />} />
          <Route path="/admin" element={<HomepageAdmin />} />
          <Route path="/admin/article" element={<ArtikelAdmin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
