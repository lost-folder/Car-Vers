import React from 'react'
import MainBanner from '../../components/util/MainBanner'
import {Container ,Col, Row} from "react-bootstrap"
import CarCards from '../../components/CarModels/CarCards'
import Pagination from '../../components/util/Pagination'
import CarData from "../../../src/components/util/CarData"
const CarModelsPage = () => {
  return (
<div style={{minHeight:'670px'}}>
    <MainBanner title="Vehicle Models " subTitle="Home / Models"/>
    <Container  fluid className='my-5 carModelContainer '>
    <Row className="d-flex justify-content-between align-items-center" >
     
      <Col sm={12} className="cardModelPage" > 

          {
            CarData?(
              CarData.map((item , index )=>{
                return(<CarCards key={index} Model={item.Model} 
                price={item.price} transimission={item.transimission}
                fuel={item.fuel} IMG={item.IMG}
                />)
              })

            ):<h4>No data</h4>
          }




         {/* <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />  */}
      

        
      </Col> 
    </Row>
  
    </Container>
    <Pagination/>
  
    </div>  
    )
}

export default CarModelsPage