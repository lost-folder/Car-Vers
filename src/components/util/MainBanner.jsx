import { Container ,Col,Row , Button} from "react-bootstrap"
import car1 from "../../../public/images/car1.png"
import bannerPic from "../../../public/images/bannerPic.jpg"
const MainBanner = () => {
   

  return (
<Row className="d-flex justify-content-between align-items-center">

    <Col sm="12">
        <img
        className="mainBannerPic"
            src={bannerPic}
        />
        

    </Col>

    </Row>
  
    )
}

export default MainBanner