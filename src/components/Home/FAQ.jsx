import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';


const FAQ = () => {
  return (
    <Container style={{ marginTop: "190px", marginBottom: "190px" }}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm="12">
          <div className="plan-div" style={{ marginBottom: "70px" }}>
            <p className="plan-p" style={{ color: "white", fontSize: "30px" }}>
              FAQ
            </p>
            <h1 className="plan-p" style={{ color: "white", fontSize: "50px" }}>
              {" "}
              Frequently Asked Questions
            </h1>
            <p className="plan-p" style={{ color: "white", fontSize: "20px" }}>
              {" "}
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website.
            </p>
          </div>
        </Col>
      </Row>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header  >1. What is special about comparing rental car deals?</Accordion.Header>
              <Accordion.Body style={{fontWeight:"bold" }}>
              Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements,
               ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models.
               You can find car rental deals by researching online and comparing prices from different rental companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header  >2. How do I find the car rental deals?</Accordion.Header>
              <Accordion.Body style={{fontWeight:"bold" }}>
              You can find car rental deals by researching online and comparing prices from different rental companies.
               Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters 
              and follow rental car companies on social media to be informed of any special deals or promotions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header >3. How do I find such low rental car prices?</Accordion.Header>
              <Accordion.Body style={{fontWeight:"bold" }}>
              Book in advance: Booking your rental car ahead of time can often result in lower prices.
               Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price.
               Renting from an off-airport location can sometimes result in lower prices.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
    </Container>
  );
};

export default FAQ;
