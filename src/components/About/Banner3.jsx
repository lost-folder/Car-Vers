import { Container ,Col,Row , Button} from "react-bootstrap"
import car1 from "../../../public/images/car1.png"
const Banner3 = () => {
   

  return (
<Row className="d-flex justify-content-between align-items-center">

    <Col sm="12">
        <div className="bannerBox " >
            <h2 className="d-block" style={{color:"white"}}>Book a car by getting in touch with us</h2>
            <h4 style={{color:"white"}} >
            <span style={{color:"white" ,fontWeight:"bold"}}> (123) 456-7869</span></h4>
        </div>
    </Col>

    </Row>
  
    )
}

export default Banner3