/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
      to={to}
      className={({ isActive }) => (isActive === true ? "bg-danger text-decoration-none me-4 px-2 text-white border-success rounded" : "")}
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;