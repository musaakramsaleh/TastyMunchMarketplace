import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
     const food = useLoaderData()
     const {_id,FoodName,FoodImage,FoodCategory,Price,quantity,AddBy,FoodOrigin,Description} = food
    return (
        <div className='max-w-[1440px] mx-auto mt-5'>
            <Helmet><title>TastyMUnchMarketplace | Food Details</title></Helmet>
           <img src={FoodImage} className='md:w-2/3  md:h-[600px] h-[300px]' alt="" />
           <div className='text-black font-bold'>
           <p className='text-2xl mt-3'>{FoodName}</p>
           <p className='text-2xl mt-3'>{Description}</p>
           <p className='mt-2 lg:w-3/4'>{FoodCategory}</p>
           <p className='mt-2'>Price: ${Price} </p>
           <p>Made by: {AddBy.name} </p>
           <p>Made by: {AddBy.email} </p>
           <p>Food Origin: {FoodOrigin}</p>
           <Link to={`/buyfood/${_id}`}><button className='mt-3 mb-5 btn btn-secondary font-lexend font bold'>Purchase</button></Link>
           </div>
        </div>
    );
};

export default FoodDetails;