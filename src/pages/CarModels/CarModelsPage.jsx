import React from 'react'
import MainBanner from '../../components/util/MainBanner'
import {Container ,Col, Row} from "react-bootstrap"
import CarCards from '../../components/CarModels/CarCards'
import Pagination from '../../components/util/Pagination'
const CarModelsPage = () => {
  return (
<div style={{minHeight:'670px'}}>
    <MainBanner title="Vehicle Models " subTitle="Home / Models"/>
    <Container  fluid className='my-5 carModelContainer '>
    <Row className="d-flex justify-content-between align-items-center" >
     
      <Col sm={12} className="cardModelPage" > 
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
      

        
      </Col> 
    </Row>
  
    </Container>
    <Pagination/>
  
    </div>  
    )
}

export default CarModelsPage