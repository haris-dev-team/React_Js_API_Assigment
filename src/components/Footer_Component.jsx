import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function Footer_Component() {
  return (
    <Container className="mt-[50px]">
      <div className="border-1 border-slate-500 border-end-0 border-start-0 border-bottom-0 ">
        <Row className="mt-5">
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <h1 className="text-3xl ">Mini Store</h1>
            <br />
            <p className="text-2xl font-bold">
              The best look anytime, anywhere.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <h5 className="text-2xl">For Her</h5>
            <br />
            <p>Women Jeans</p>
            <p>Tops and Shirts</p>
            <p>Women Jackets</p>
            <p>Heels and Flats</p>
            <p>Women Accessories</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <h5 className="2xl">For Him</h5>
            <br />
            <p>Men Jeans</p>
            <p>Men Shirts</p>
            <p>Men Shoes</p>
            <p>Men Accessories</p>
            <p>Men Jackets</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <h5 className="text-2xl">Subscribe</h5>
            <br />
            <input
              type="text"
              className="p-2 border border-secondary rounded-md"
              placeholder="Email Address"
            />
            <br />
            <br />
            <button className="bg-primary text-white px-5 py-2.5 font-bold">
              Subscribe
            </button>
          </Col>
        </Row>
        <br />
        <br />
        <div className="border-1 border-slate-500 border-bottom-0 border-end-0 border-start-0"></div>
        <br />
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="flex justify-end">
              <div className="mx-2 text-2xl">
                <FaFacebook />
              </div>
              <div className="mx-2 text-2xl">
                <FaInstagram />
              </div>
              <div className="mx-2 text-2xl">
                <FaTwitter />
              </div>
              <div className="mx-2 text-2xl">
                <FaYoutube />
              </div>
              <div className="mx-2 text-2xl">
                <FaGoogle />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
    </Container>
  );
}
