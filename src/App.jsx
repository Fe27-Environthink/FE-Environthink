import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Isi route nya ya kyk page Homepage, search, aksi, article...contoh  */}
          {/* <Route path="/" element={<Homepage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
