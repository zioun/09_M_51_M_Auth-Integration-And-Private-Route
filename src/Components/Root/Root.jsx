import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1200px] m-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;