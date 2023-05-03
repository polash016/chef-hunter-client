/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    const {bio, chef_name, recipe_1, recipe_2, recipe_3} = chefDetails
    return (
        <div>          
    <Container>
          <Card className='text-center ' border="light" style={{ width: 'full' }}>
        <Card.Header className='fw-semibold'>Receipe: {recipe_1.name}</Card.Header>
        <Card.Body>
          <Card.Title>Ingredients</Card.Title>
          <Card.Text>
          {
                recipe_1.ingredients.map(ingrdnt => <li>{ingrdnt}</li>)
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
        </div>
    );
};

export default ChefDetails;