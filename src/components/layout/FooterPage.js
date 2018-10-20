import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import logo from '../../logos/logo.png';


class FooterPage extends React.Component {
render() {
return (
<Footer  className="font-small pt-4 mt-4 bottom bkpurp">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">InstaPool</h5>
        <div>
          <img src={logo} className="toplogo"></img>
        </div>
      </Col>
      <Col md="6">
      <h5 className="title">Get To Know Us</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">About us </a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Careers </a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Blog</a>
        </li>
        <li className="list-unstyled">
          <a href="#!"> Legal </a>
        </li>
        <li className="list-unstyled">
          <a href="#!"> Contact Us </a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> InstaPool </a>

        <i className="fab fa-twitter"></i>

        <i className="fab fa-facebook"></i>

        <i className="fab fa-instagram"></i>

        <i className="fab fa-linkedin"></i>


    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;


