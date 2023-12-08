import React from 'react'
import { Container ,Col,Row , Button} from "react-bootstrap";

const ReuseableBanner = ({bannerDesc , bannerSpan , bannerIcon }) => {
  return (
<Row className="d-flex justify-content-between align-items-center">

<Col sm="12">
    <div className="bannerBackground"  >
    
        <h2 className="d-block" style={{color:"white"}}>{}</h2>
        <h4 style={{color:"white"}}>{bannerDesc}</h4>
        <h3 style={{color:"red" }}> {bannerIcon} {bannerSpan}</h3>
    </div>
</Col>

</Row>
  )
}

export default ReuseableBanner