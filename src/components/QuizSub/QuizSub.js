import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const QuizSub = ({quiz}) => {
    const{id,name,logo,total}=quiz;
    return (
        <div>
            <Col className='container'>
          <Card>
            <Card.Img variant="top" className='bg-danger' src={logo} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              {/* <Card.Text>
                
              </Card.Text> */}
              <div className='d-flex justify-content-around'>
                <h3>There are {total} qustion</h3>
              <Button>next</Button>
                
              </div>
              
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default QuizSub;