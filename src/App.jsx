import "./App.css";
// import Artikel from "./component/Artikel/Artikel";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./component/Navbar/Navbars";
import Article from "./component/Article/Article";
import DetailArticle from "./component/Article/DetailArticle";


function App() {
  return (
    <>
      <BrowserRouter>
   <Navbars/>
        <Routes>
          {/* Isi route nya ya kyk page Homepage, search, aksi, article...contoh  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/detail-article" element={<DetailArticle />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
