import React from 'react'
import {Card ,Col,Row} from "react-bootstrap"
import { PiQuotesFill } from "react-icons/pi";


const ReviewCards = (props) => {
  return (
    <Card style={{ width: '30rem' , height:"20rem" }}>
    <Card.Body>
    <Row>

      <Card.Text style={{fontWeight:"bold" , fontSize:"20px"}}>
       {props.text}
      </Card.Text>
    </Row>
    <Row className="my-3">
      <Col sm="3" >
        <img
        className='reviewPic'
          src={props.pic}
        />
      </Col>
      <Col sm="4" className="my-3">
      <Card.Title>{props.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.location}</Card.Subtitle>
      </Col>
      <Col sm="5" className="my-4 ">
        <PiQuotesFill size={50}/>
      </Col>
    </Row>
     
    </Card.Body>
  </Card>  )
}

export default ReviewCards