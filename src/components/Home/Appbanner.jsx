import { Container, Col, Row, Button } from "react-bootstrap";
import appliaction2 from "../../../public/images/appliaction2.png";
import apple from "../../../public/images/apple.png";
import playstore from "../../../public/images/playstore.png";
const Banner = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row className="d-flex justify-content-between align-items-center">
        <Col sm="6">
          <div>
            <p style={{ color: "white", fontSize: "40px",fontWeight:"bold" }}>
              Download our app to get most out of it
            </p>
            <p style={{ color: "white" }}>
              {" "}
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you
            </p>
          </div>
          <Row className="d-flex">

          <img className="storePic1" src={apple} />
          <img  className="storePic" src={playstore} />
          </Row>

          {/* <Button
            style={{ color: "white", backgroundColor: "red", fontSize: "20px" }}
          >
            Book Now
          </Button>
          <Button style={{ color: "red", fontSize: "20px" }}>Learn More</Button> */}
        </Col>
        <Col sm="4">
          <img style={{ height: "596px", width: "413px" }} src={appliaction2} />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
