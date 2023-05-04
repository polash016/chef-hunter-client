/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import error from '../../../src/image/error.png'

const Error = () => {
    return (
        <div className="error-page">
        <img className='d-block mx-auto' style={{height: '600px', width: '1000px'}} src={error} alt="Error" />
        <div className='text-center mt-0'>
        <h1>Oops! Something went wrong.</h1>
        <p>We're sorry, but the page you requested could not be found.</p>
        </div>
      </div>
    );
};

export default Error;