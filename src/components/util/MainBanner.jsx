import { Container, Col, Row, Button } from "react-bootstrap";
import car1 from "../../../public/images/car1.png";
import bannerPic from "../../../public/images/bannerPic.jpg";
const MainBanner = ({title, subTitle}) => {
  return (
    <div className="bannerContainer">
    <Row className="d-flex justify-content-between align-items-center">
      <Col sm="12">
    <div>
          <img className="mainBannerPic" src={bannerPic} />
            <div className="bannerImageText">
            <h2>{title}</h2>
            <span > {subTitle}</span>
        </div>
    </div>
  </Col>
</Row>
    

    </div>
  );
};

export default MainBanner;
