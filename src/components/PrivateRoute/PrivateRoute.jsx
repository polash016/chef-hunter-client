/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div className='text-center'><Spinner animation="border" variant="danger" /></div>
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PrivateRoute;