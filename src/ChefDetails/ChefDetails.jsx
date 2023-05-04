/* eslint-disable react/jsx-key */
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../ChefBanner/ChefBanner';
import {  FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

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
        <Card.Footer className='mt-2 mb-4 d-flex justify-content-between align-items-center'>
          <div className=''>
          <Rating 
        className=" me-2"
  placeholderRating={recipe_1.rating}
  emptySymbol={<FaRegStar />}
  readonly
  placeholderSymbol={<FaStar className="text-warning" />}
  fullSymbol={<FaStar />}
/>
{recipe_1.rating}
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
          </div>
        </Card.Footer>
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
        <Card.Footer className='mt-2 mb-4'>
        <Card.Footer className='mt-2 mb-4 d-flex justify-content-between align-items-center'>
          <div className=''>
          <Rating 
        className=" me-2"
  placeholderRating={recipe_2.rating}
  emptySymbol={<FaRegStar />}
  readonly
  placeholderSymbol={<FaStar className="text-warning" />}
  fullSymbol={<FaStar />}
/>
{recipe_2.rating}
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
          </div>
        </Card.Footer>
        </Card.Footer>
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
        <Card.Footer className='mt-2 mb-2'>
        <Card.Footer className='mt-2 mb-4 d-flex justify-content-between align-items-center'>
          <div className=''>
          <Rating 
        className=" me-2"
  placeholderRating={recipe_3.rating}
  emptySymbol={<FaRegStar />}
  readonly
  placeholderSymbol={<FaStar className="text-warning" />}
  fullSymbol={<FaStar />}
/>
{recipe_3.rating}
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
          </div>
        </Card.Footer>
        </Card.Footer>
      </Card>
      
    </Container>
        </div>
    );
};

export default ChefDetails;