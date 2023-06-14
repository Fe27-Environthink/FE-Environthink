import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [text, setText] = useState("");

  const userTryAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    if (localStorage.getItem("role") == null) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan !",
        text: "Anda Harus Login Terlebih Dahulu",
      });
      navigate("/login");
    } else if (localStorage.getItem("role") === "user" && userTryAdminRoute) {
      Swal.fire({
        icon: "error",
        title: "Anda Bukan Admin !",
        text: "User Tidak Bisa Akses Ke Halaman Admin!",
      });
      navigate("/");
    } else if (location.pathname != "user") {
      setText("Not Found");
    }
  }, []);

  return (
    <div
      style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800 }}
      className="textNotFound text-center fs-1 mt-5"
    >
      {text}
    </div>
  );
};

export default NotFound;
