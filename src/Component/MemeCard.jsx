import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {
  const Navigate = useNavigate();
  return (
    <div className='meme-card'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Button onClick={(e)=>Navigate(`/edit?url=${props.img}`)} variant="primary"  >Edit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MemeCard