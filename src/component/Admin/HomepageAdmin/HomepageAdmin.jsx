import "./HomepageAdmin.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAPI } from "../../../Redux/Action/HomepageAdminAction";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function HomepageAdmin() {
  const { totalAksi, totalArticle, totalInfografis } = useSelector(
    (state) => state.HomepageAdminReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAPI());
  }, []);

  return (
    <Container className="d-flex p-4" style={{ marginTop: "3em" }}>
      {totalAksi != null && totalArticle != null && totalInfografis != null ? (
        <Card style={{ width: "80rem" }} className="px-3">
          <Card.Body>
            <Card.Title className="titleHomepageAdmin text-center mb-5 fs-1">
              Homepage Admin
            </Card.Title>
            <Card.Subtitle className="mb-5 fs-3">
              Total Artikel :{" "}
              <Link
                to="/admin/article"
                style={{ color: "#14ae5c", textDecoration: "none" }}
              >
                {totalArticle}{" "}
              </Link>{" "}
              Artikel
            </Card.Subtitle>
            <Card.Subtitle className="mb-5 fs-3">
              Total Aksi :{" "}
              <Link
                to="/admin/infografis"
                style={{ color: "#14ae5c", textDecoration: "none" }}
              >
                {totalAksi}{" "}
              </Link>{" "}
              Aksi
            </Card.Subtitle>
            <Card.Subtitle className="mb-5 fs-3">
              Total Infografis :{" "}
              <Link
                to="/admin/infografis"
                style={{ color: "#14ae5c", textDecoration: "none" }}
              >
                {totalInfografis}{" "}
              </Link>
              Infografis
            </Card.Subtitle>
            <Card.Subtitle className="fs-3">
              Total Donasi : Gatau 😂 | belum bkin API DONASI
            </Card.Subtitle>
            <Card.Title
              className="titleAdminEnvironthink text-center mt-5 fs-1"
              style={{ color: "#14ae5c" }}
            >
              Admin Environthink
            </Card.Title>
          </Card.Body>
        </Card>
      ) : (
        <div className="mx-auto g-4 d-flex gap-3" style={{ marginTop: "8em" }}>
          <Spinner animation="grow" size="sm" variant="success" />
          <Spinner animation="grow" size="sm" variant="success" />
          <Spinner animation="grow" size="sm" variant="success" />
          <Spinner animation="grow" size="sm" variant="success" />
          <Spinner animation="grow" size="sm" variant="success" />
          <Spinner animation="grow" size="sm" variant="success" />
        </div>
      )}
    </Container>
  );
}

export default HomepageAdmin;
