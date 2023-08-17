import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer" style={{ maxHeight: "220px" }}>
    <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
            <Col sm="4" className="d-flex align-items-center ">
        <div style={{paddingTop:"30px", fontSize:"30px"}}>
        <span style={{color:"red"}}>CAR <span style={{color:"white" }}>RENTAL</span> </span>
             <div className="footer-shroot " style={{marginTop:"20px"}}>  
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs.
             </div>
        </div>           
              
            
            </Col>
            <Col sm="3" className="d-flex align-items-center ">
        <div style={{paddingTop:"30px", fontSize:"30px"}}>
        <span style={{color:"red"}}>COMPANY</span>
             <div className="footer-shroot " style={{marginTop:"20px"}}>  
                 <ul >
                    <li className='footer-list'>
                        Istanbul
                    </li>
                    <li className='footer-list'>
                        Careers
                    </li>
                    
                    <li className='footer-list'>
                    
                        Mobile
                    </li>
                    <li className='footer-list'>
                        How we work
                    </li>
                 </ul>
             </div>
        </div>           

            </Col>
            <Col sm="3" className="d-flex align-items-center ">
        <div style={{paddingTop:"30px", fontSize:"30px"}}>
        <span style={{color:"red"}}>WORKING HOURS</span>
             <div className="footer-shroot " style={{marginTop:"20px"}}>  
             <ul>
                <li>
                     Mon-Fri: 9:00AM - 9:00PM
                </li>
                <li>
                    Sat: 9:00AM- 19:00PM
                </li>
                <li>
                    Sun: Closed
                </li>
             </ul>
             
             </div>
        </div>           

            </Col>

            <Col
                sm="2"
                className="d-flex justify-content-end align-items-center ">
                <div className="d-flex pt-3 mx-2">
                    {/* <img width="20px" height="20px" src={phone} alt="" /> */}
                    <p className="footer-phone">0122455346356</p>
                </div>
                <div style={{ cursor: "pointer" }}>
                    {/* <img width="20px" height="20px" src={facebook} alt="" /> */}
                </div>
                <div style={{ cursor: "pointer" }} className="">
                    {/* <img width="20px" height="20px" src={instagram} alt="" /> */}
                </div>
                <div style={{ cursor: "pointer" }} className="">
                    {/* <img width="20px" height="20px" src={twitter} alt="" /> */}
                </div>
            </Col>
        </Row>
        
    </Container>
</div>  )
}

export default Footer