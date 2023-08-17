import { Container ,Col,Row , Button} from "react-bootstrap"
import auto from "../../../public/images/auto.png"
import car2 from "../../../public/images/car2.png"
import circle from "../../../public/images/circle.png"
import cost from "../../../public/images/cost.png"
import charges from "../../../public/images/charges.png"
import DescCard from "../util/DescCard"
import { FaCarSide } from "react-icons/fa";

const ChooseUs = () => {
   

  return (
<Container style={{marginTop:"30px"}}>
    <Row className="d-flex justify-content-ceter align-items-center">

        <Col sm="12" className="d-flex justify-content-center align-items-center">
            <img
                src={car2}
            />
        </Col>
   </Row>
   <Row className="d-flex justify-content-ceter align-items-center">
        <Col sm="6">
        <div>
            <p style={{color:"white" , fontSize:"30px"}}>Why Choose Us</p>
            <p style={{color:"white", fontSize:"40px"}}>Best valued deals you will ever find</p>
            <p style={{color:"white"}}>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big</p>
        </div>
        <Button className="btnDetalis">
            Find Details
        </Button>
        </Col>
        <Col sm="5" style={{marginLeft:"90px"}} className="d-flex chooseUS">
         
           <DescCard pic={circle} title="Cross Country Drive" 
           desc="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures"/> 
         
           <DescCard pic={cost} title="All Inclusive Pricing" 
           desc="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."/> 
         
           <DescCard pic={charges} title="No Hidden Charges" 
           desc="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."/> 
        
        </Col>
   </Row>
</Container>
    )
}

export default ChooseUs