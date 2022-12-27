import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='grid grid-cols-2'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;