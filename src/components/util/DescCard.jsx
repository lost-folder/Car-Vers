import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container ,Col,Row , Button} from "react-bootstrap"


const DescCard = (props) => {
  return (
    
   <Container>
    <Row className="justify-content-center">
        <Col sm="3" className="d-flex">   

          <img
          
            src={props.pic}
          />
        </Col>
        <Col>

            <p style={{color:"white" , fontWeight:"bold", fontSize:"20px" }}> {props.title}</p>
            <p style={{color:"white"}}> {props.desc}</p>
        </Col>
    </Row>
   </Container>
 
  )
}

export default DescCard