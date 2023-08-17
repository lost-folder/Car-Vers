import React from 'react'
import { Container ,Col,Row , Button} from "react-bootstrap"
import PlanCard from '../util/planCard'
 import { AiFillCar } from "react-icons/ai";
 import { RiCustomerService2Fill } from "react-icons/ri";
 import { GiRaceCar } from "react-icons/gi";
 

const PlanTrip = () => {
  return (
    <Container style={{marginTop:"150px"}} >
    <Row className="d-flex justify-content-between align-items-center">
    
        <Col sm="12" >
            <div className='plan-div'  >
                <p className='plan-p' style={{color:"white" , fontSize:"30px"}}>Plan your trip</p>
                <p className='plan-p' style={{color:"white",fontSize:"50px"}}> Quick & easy car rental</p>
            </div>
        </Col>
     </Row>
     <Row >
          <Col  >
                <div className='planCards d-flex'>
                <PlanCard  pic={<AiFillCar color='red' size={50}/>} title="Selcet car" desc="We offers a 
                  big range of vehicles for all your driving needs. We have the perfect car to meet your needs"/>

                <PlanCard pic={<RiCustomerService2Fill color='red' size={50}/>} title="Contact operator" desc=" Our knowledgeable and friendly 
                operators are always ready to help with any questions or concerns "/>
                <PlanCard pic={<GiRaceCar color='red' size={50}/>} title="Let's drive!" desc="Whether you're 
                hitting the open road, we've got you covered with our wide range of cars"/>
               </div>
    
             </Col>
        </Row>
    
    </Container>
  )
}

export default PlanTrip