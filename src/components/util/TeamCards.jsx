import React from 'react'
import Card from 'react-bootstrap/Card';

const TeamCards = ({Name , Position , IMG}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={IMG} />
    <Card.Body className=" TeamCard">
      <Card.Title >{Name}</Card.Title>
      <Card.Text>
       {Position}
      </Card.Text>
 
    </Card.Body>
  </Card>  
  )
}

export default TeamCards