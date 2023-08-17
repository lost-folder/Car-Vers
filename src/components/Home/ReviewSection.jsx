import React from 'react'
import { Container, Col, Row, Button } from "react-bootstrap";
import ReviewCards from './ReviewCards';
import harry from "../../../public/images/harry.png"
import Ron from "../../../public/images/Ron.png"

const ReviewSection = () => {
  return (
<Container style={{ marginTop: "190px" , marginBottom:"190px" }}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm="12">
          <div className="plan-div" style={{ marginBottom: "70px" }}>
            <p className="plan-p" style={{ color: "white", fontSize: "30px" }}>
            Reviewed by People
            </p>
            <h1 className="plan-p" style={{ color: "white", fontSize: "50px" }}>
              {" "}
              Client's Testimonials
            </h1>
            <p className="plan-p" style={{ color: "white", fontSize: "20px" }}>
              {" "}
              Discover the positive impact we've made on the our clients by reading through 
              their testimonials.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
      
      <Col sm="12" className='d-flex justify-content-between'>
      
        <ReviewCards text="'We rented a car from this website 
        and had an amazing experience! The booking was easy and the rental rates were very affordable. '"
        pic={harry}
        name="Harry"
        location="Istanbul"
        />
        <ReviewCards text="'The car was in great condition and made our trip even better. Highly recommend for this car rental website! '"
        pic={Ron}
        name="Ron"
        location="Bursa"
         />
      
      </Col>

      </Row>
      
       
    </Container>  
    )
}

export default ReviewSection