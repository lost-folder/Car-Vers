import { Container ,Col,Row , Button} from "react-bootstrap"
import car1 from "../../../public/images/car1.png"
const Banner2 = () => {
   

  return (
<Row className="d-flex justify-content-between align-items-center">

    <Col sm="12">
        <div className="bannerBox " >
            <h2 className="d-block" style={{color:"white"}}>Save big with our cheap car rental!</h2>
            <h4 style={{color:"white"}}>Top Airports. Local Suppliers.<span style={{color:"red"}}> 24/7</span>  Support.</h4>
        </div>
    </Col>

    </Row>
  
    )
}

export default Banner2