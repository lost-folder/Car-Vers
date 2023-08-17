import React from 'react'
import { Container,Row,Col, Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


const HomeForm = () => {
  return (
    <Container >
    <div className='Form-box'>
     <p style={{ paddingTop:"20px" , marginLeft:"50px"}} >Book a car</p>

        <Form style={{paddingBottom:"50px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Row className="justify-content-center">
      <Col style={{display:"inline"}} sm="3">
        <Form.Label style={{display:"flex"}}>Car type</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Select a car type</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
         
    </Col>
    <Col style={{display:"inline"}} sm="3">
        <Form.Label style={{display:"flex"}}>Pick up</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Select a pick-up location</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Col>
    <Col style={{display:"inline"}} sm="3">
        <Form.Label style={{display:"flex"}}> Drop off</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Select drop-off location</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Col>
    </Row>
    <Row className='justify-content-center'>
      <Col style={{display:"inline"}} sm="3">
      <Form.Label style={{display:"flex"}}> Pick -Up</Form.Label>
        <input type="date" style={{width:"259px " , height:"38px"}}>

        </input>

    </Col>
    <Col style={{display:"inline"}} sm="3">
        <Form.Label style={{display:"flex"}}>Drop-off</Form.Label>
        <input type="date" style={{width:"259px " , height:"38px"}}>

        </input>
    </Col>
    <Col style={{display:"inline"}} sm="3">
        <Form.Label style={{display:"flex"}}>Enjoy</Form.Label>
          <Button  style={{width:"259px " , height:"38px" ,color:"white",backgroundColor:"red"}}>
        Search
          </Button>
    </Col>
    </Row>
        </Form.Group>
      
    </Form>
    
    </div>
    </Container>
  )
}

export default HomeForm