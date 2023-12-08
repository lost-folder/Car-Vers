import Button from "react-bootstrap/Button";
import { Container, Col, Row, AccordionButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import car1 from "../../../public/images/car1.png";
import ReactStars from "react-rating-stars-component";
import { FaCarSide } from "react-icons/fa";

const CarCards = ({Model , rate , price , transimission , fuel , IMG}) => {
  return (
    <Card style={{ width: "18rem" , height:"30rem" }}>
      <Card.Img variant="top" src={IMG} />
      <Card.Body>
      <div className="cardCont">
        <Row >
          <Col sm="8" style={{ flexDirection: "column" }}>
            <h5>{Model}</h5>
            <ReactStars count={5} size={24} value={5} edit={false} />
          </Col>
          <Col sm="4">
            <h5>{price}</h5>
            <p>PER DAY</p>
          </Col>
        </Row>
      
        <Row >
          <div className="cardGrid">
            <span  className="cardSpan">
              <FaCarSide size={20} />
              &nbsp; {Model}
            </span>
         
            <span className="cardSpan" style={{ textAlign: "right" }}>
              4/5&nbsp;
              <FaCarSide size={20} />
            </span>
            <span className="cardSpan" >
              <FaCarSide size={20} />
              &nbsp;{transimission}
            </span>
            <span className="cardSpan" style={{ textAlign: "right"}}>
             {fuel} &nbsp;
              <FaCarSide size={20} />

            </span>
          </div>
                       <button  className="cardBtn ">Go somewhere</button> 
         
        </Row>

  </div>
       
      </Card.Body>
    </Card>
  


  );
};


export default CarCards;
