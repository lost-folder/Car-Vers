import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container ,Col,Row , Button} from "react-bootstrap"


const PlanCard = (props) => {
  return (
    
   <Container>
    <Row className="justify-content-center">
        <Col sm="12">   
        <div className='d-grid  '>

        
            <span >{props.pic}</span>
            <h3 style={{color:"white" }}> {props.title}</h3>
            <p style={{color:"white"}}> {props.desc}</p>
        </div>
        </Col>
    </Row>
   </Container>
 
  )
}

export default PlanCard