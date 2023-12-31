/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({card}) => {
  const {id,chef_name, number_of_recipes, years_of_experience, likes } = card
    return (
      <Col className='mt-4'>
        <Card>
          <LazyLoad><Card.Img style={{height: '250px'}} className='w-100' variant="top" src={card.picture} /></LazyLoad>
          <Card.Body>
            <Card.Title>{chef_name}</Card.Title>
            <Card.Text>
             <span className='fw-semibold'>Years Of Experience:</span> {years_of_experience}
            </Card.Text>
            <Card.Text>
              <span className='fw-semibold'>Number Of Receipes:</span> {number_of_recipes}
            </Card.Text>
            <Card.Text>
              <span className='fw-semibold'>Likes:</span> {likes}
            </Card.Text>
            <Link to={`/chef/${id}`}><Button className='btn-danger'>View Receipe</Button></Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ChefCard;