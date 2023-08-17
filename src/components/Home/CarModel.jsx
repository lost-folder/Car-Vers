import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import car1 from "../../../public/images/car1.png"
import Table from 'react-bootstrap/Table';

const CarModel = () => {
  return (
    <Container style={{ marginTop: "190px" , marginBottom:"190px" }}>
      <Row className="d-flex justify-content-between align-items-center">
        <Col sm="12">
          <div className="plan-div" style={{ marginBottom: "70px" }}>
            <p className="plan-p" style={{ color: "white", fontSize: "30px" }}>
              Vehicle Models
            </p>
            <h1 className="plan-p" style={{ color: "white", fontSize: "50px" }}>
              {" "}
              Our rental fleet
            </h1>
            <p className="plan-p" style={{ color: "white", fontSize: "20px" }}>
              {" "}
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
        </Col>
      </Row>
      
      <Row className="d-flex">
        <Col sm="3" style={{marginTop:"20px"}}>
          <div className="carList">
            <Button className="btnModel">Audi S1 Line</Button>
            <Button  className="btnModel">VW GOLF 6</Button>
            <Button  className="btnModel">Toyota camry </Button>
            <Button  className="btnModel">CAr1</Button>
            <Button  className="btnModel">CAr1</Button>
          </div>
        </Col>

        <Col sm="5" style={{marginTop:"-60px"}}>
          
        <img
        style={{ height: "496px", width: "613px" }}

            src={car1}
        />
            
        </Col>

        <Col sm="4" style={{paddingLeft:"130px"}}>
        <Table  bordered >
      <thead>
        <tr>
          <th colSpan={3}>$ 50 / per day</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Model</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Year</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Doors</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>AC</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Fuel</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>

      </tbody>
    </Table>
    <Button className="btnModelR">
      Reserve Now
    </Button>
        </Col>
      </Row>
    </Container>  
  );
};

export default CarModel;
