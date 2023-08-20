
import { Container ,Col,Row , Button} from "react-bootstrap"
import people from "../../../public/images/people.png"
import car from "../../../public/images/car.png"
import rentalOutlet from "../../../public/images/rentalOutlet.png"
import repair from "../../../public/images/repair.png"
import PlanTrip from "../../components/Home/PlanTrip"
const Banner = () => {
   

  return (
<Container style={{marginTop:"50px" ,marginBottom:"50px" }}>
<Row className="d-flex justify-content-between align-items-center">
<Col sm="4">
        <img
        style={{ height: "396px", width: "396px" }}

            src={people}
        />
            
    </Col>

    <Col sm="6">
        <div>
            <p style={{color:"white" , fontSize:"30px"}}>About Company</p>
            <p style={{color:"white" , fontSize:"40px" , fontWeight:"bold"}}>
            You start the engine and your adventure begins
            </p>

            <p style={{color:"white"}}>  
            Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose.
             Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
            </p>
            <Row>
            
            <Col sm='3'>
                <img
                     style={{width:"80px"}}
                     src={car}
                />
                <p style={{color:'white'}}>
                    <span style={{fontWeight:"bold" , fontSize:"40px"}}>20</span> 
                    <br/>
                    types
                </p>
            </Col>
            <Col sm='3'>
                <img
                     style={{width:"80px"}}
                     src={rentalOutlet}
                />
                 <p style={{color:'white'}}>
                 <span style={{fontWeight:"bold" , fontSize:"40px"}}>80</span> 
                 <br/>
                 rental outlets
                </p>
            </Col>
            <Col sm='3'>
                <img
                     style={{width:"80px" , height:"60px"}}
                     src={repair}
                />
                 <p style={{color:'white'}}>
                 <span style={{fontWeight:"bold" , fontSize:"40px"}}>75</span>
                 <br/>
                  repair shops
                </p>
            </Col>

            </Row>
        </div>
    </Col>
    <PlanTrip/>
   
    </Row>
  
</Container>
    )
}

export default Banner