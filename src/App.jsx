import "./App.css";
// import Artikel from "./component/Artikel/Artikel";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./component/Navbar/Navbars";
import Search from "./component/Searchpage/Search";
import Donasi from "./component/Donasi/Donasi";
import Pembayaran from "./component/Pembayaran/Pembayaran";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbars />
        <Routes>
          {/* Isi route nya ya kyk page Homepage, search, aksi, article...contoh  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
