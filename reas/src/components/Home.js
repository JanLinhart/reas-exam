import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="area">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Aplikace na nemovitosti</h1>
              <Link className="link" to="/form">
                Přejít na výběr
              </Link>
            </Col>
          </Row>
        </Container>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Home;
