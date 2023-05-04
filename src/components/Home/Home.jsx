import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Toaster />
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;