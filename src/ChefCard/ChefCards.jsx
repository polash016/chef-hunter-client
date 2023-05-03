import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Card/ChefCard';
import { Row } from 'react-bootstrap';

const ChefCards = () => {
    const cards = useLoaderData()
    return (
        <div>
            <Banner></Banner>
           <Row className='container mx-auto row row-cols-3 mt-5 mb-4 '>
           {
            cards.map(card => <ChefCard key={card.id} card={card}>{card.chef_name}</ChefCard>)
           }
           </Row>
        </div>
    );
};

export default ChefCards;