import React from 'react'
import { Container , Row,Col } from 'react-bootstrap';
import ReviewSection from '../../components/Home/ReviewSection';
import MainBanner from '../../components/util/MainBanner';
import ReuseableBanner from '../../components/util/ReuseableBanner';
import { FiPhoneCall } from "react-icons/fi";

const TestimoniasPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <MainBanner title="Testimonials" subTitle="Home / Testimonials"/>
        <Container>
            <Row>
                <Col>
                    <ReviewSection/>
                </Col>
            </Row>
        </Container>
        <Row>
                <Col>
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

export default TestimoniasPage