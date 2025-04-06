import React from 'react';
import { BrowserRouter } from 'react-router-dom';


const RestaurantHome= ()=>{
    return (
        <BrowserRouter basename='/restaurant'>
            <div className='min-h-screen bg-gray-50'>
            </div>
        </BrowserRouter>
    );
}

export default RestaurantHome;
