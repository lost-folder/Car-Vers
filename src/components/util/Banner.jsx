import { Container ,Col,Row , Button} from "react-bootstrap"
import car1 from "../../../public/images/car1.png"
const Banner = () => {
   

  return (
<Container style={{marginTop:"30px"}}>
<Row className="d-flex justify-content-between align-items-center">

    <Col sm="4">
        <div>
            <p style={{color:"white" , fontSize:"30px"}}>Cruise around the world</p>
            <p style={{color:"white", fontSize:"50px"}}>Save <span style={{color:"red"}}> BIG</span>  with our car rental</p>
            <p style={{color:"white"}}>  Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        </div>
    </Col>
    <Col sm="6">
        <img
        style={{ height: "496px", width: "613px" }}

            src={car1}
        />
            
        

    
    </Col>
    </Row>
    <Button style={{color:"white",backgroundColor:"red",fontSize:"20px"}}>
        Book Now 
    </Button>
    <Button style={{color:"red",fontSize:"20px"}}>
        Learn More
    </Button>
</Container>
    )
}

export default Banner