import React from 'react'
import { Container , Row,Col } from 'react-bootstrap';
import MainBanner from '../../components/util/MainBanner';
import ReuseableBanner from '../../components/util/ReuseableBanner';
import { FiPhoneCall } from "react-icons/fi";
import TeamData from '../../components/util/TeamData'; 
import TeamCards from '../../components/util/TeamCards';

const OurTeamPage = () => {
  return (
    <div style={{minHeight:'670px' }}>
    <MainBanner title="Our Team" subTitle="Home / Our Team"/>

    <Container   className='my-5 TeamCardContainer  '>
    <Row className="d-flex justify-content-between align-items-center" >
     
      <Col sm={12} className="TeamCardPage" > 
     
      {
                   
                   TeamData ? (
                     TeamData.map((item, index) => {
                           return (<TeamCards key={index} Name={item.Name} IMG={item.IMG} Position={item.Position} />)
                       })
                   ) : <h4>No Members found  </h4>
              

           }

        
      </Col> 
    </Row>
  
    </Container>


        <Row>
                <Col >
                    <ReuseableBanner 
                     bannerDesc="Book a car by getting in touch with us"
                     bannerIcon={<FiPhoneCall />}
                     bannerSpan="(539) 441 44 58"

                     />
                </Col>
            </Row>
    </div>
  )
}

export default OurTeamPage