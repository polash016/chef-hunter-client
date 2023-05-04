/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../ChefBanner/ChefBanner';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    const {bio, chef_name, recipe_1, recipe_2, recipe_3} = chefDetails
    return (
        <div>          
    <Container>
        <ChefBanner chefDetails={chefDetails}></ChefBanner>
          <Card className='text-center ' border="light" style={{ width: 'full' }}>
        <Card.Header className='fw-semibold'>Receipe: {recipe_1.name}</Card.Header>
        <div className='row row-cols-2'>
        <Card.Body>
          <Card.Title>Ingredients</Card.Title>
          <Card.Text>
          {
                recipe_1.ingredients.map(ingrdnt => <li className='mb-2'>{ingrdnt}</li>)
            }
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Cooking Method</Card.Title>
          <Card.Text>
            
          {
                recipe_1.cooking_method.map(ingrdnt => <li className='mb-2'>{ingrdnt}</li>)
            }
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
          <Card className='text-center ' border="light" style={{ width: 'full' }}>
        <Card.Header className='fw-semibold'>Receipe: {recipe_1.name}</Card.Header>
        <div className='row row-cols-2'>
        <Card.Body>
          <Card.Title>Ingredients</Card.Title>
          <Card.Text>
          {
                recipe_2.ingredients.map(ingrdnt => <li className='mb-2'>{ingrdnt}</li>)
            }
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Cooking Method</Card.Title>
          <Card.Text>
            
          {
                recipe_2.cooking_method.map(ingrdnt => <li className='mb-2'>{ingrdnt}</li>)
            }
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
          <Card className='text-center ' border="light" style={{ width: 'full' }}>
        <Card.Header className='fw-semibold'>Receipe: {recipe_1.name}</Card.Header>
        <div className='row row-cols-2'>
        <Card.Body>
          <Card.Title>Ingredients</Card.Title>
          <Card.Text>
          {
                recipe_3.ingredients.map(ingrdnt => <li className='mb-2'>{ingrdnt}</li>)
            }
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Cooking Method</Card.Title>
          <Card.Text>
            
          {
                recipe_3.cooking_method.map(ingrdnt => <li className='mb-2'>{ingrdnt}</li>)
            }
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </Container>
        </div>
    );
};

export default ChefDetails;