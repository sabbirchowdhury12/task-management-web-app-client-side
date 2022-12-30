import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='flex md:grid grid-cols-2 lg:grid-cols-3'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;