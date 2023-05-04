/* eslint-disable react/prop-types */
import React from 'react';

const ChefBanner = ({chefDetails}) => {
    const {chef_name, picture, bio, number_of_recipes, likes, years_of_experience} = chefDetails
    return (
        <div className='row row-cols-2 mb-4'>
          <div>
            <img style={{height: '400px', width: '600px'}} src={picture} alt="" />
            </div>
            <div>
                <h3>Name: {chef_name}</h3>
                <p className='mt-4 mb-2'><span className='fw-bold'>Description:</span> {bio}</p>
                <p className='mt-4 mb-2'><span className='fw-bold'>Likes:</span> {likes}</p>
                <p className='mt-4 mb-2'><span className='fw-bold'>Number Of Receipe:</span> {number_of_recipes}</p>
                <p className='mt-4 mb-2'><span className='fw-bold'>Years Of Experience:</span> {years_of_experience}</p>
                </div> 
        </div>
    );
};

export default ChefBanner;