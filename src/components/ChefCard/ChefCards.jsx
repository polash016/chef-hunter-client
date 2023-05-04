import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Card/ChefCard';
import { Row } from 'react-bootstrap';
import ExtraSection1 from '../ExtraSection1/ExtraSection1';
import ExtraSection2 from '../ExtraSection2/ExtraSection2';

const ChefCards = () => {
    const cards = useLoaderData()
    return (
        <div>
            <Banner></Banner>
           <Row className='container mx-auto row row-cols-3 sm:row-cols-1 mt-5 mb-4 '>
           {
            cards.map(card => <ChefCard key={card.id} card={card}>{card.chef_name}</ChefCard>)
           }
           </Row>
           <div className='mt-4 mb-4'>
           <ExtraSection1></ExtraSection1>
           </div>
           <div>
            <ExtraSection2></ExtraSection2>
           </div>
        </div>
    );
};

export default ChefCards;