import React, { useState } from 'react';
import UseAuth from '../../Routes/Hook/UseAuth';
import { Slide } from 'react-awesome-reveal';
import Client from './Client';
import Testimonial from './Testimonial';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const foo = useLoaderData()
    const [foods,setfoods] = useState(foo)
    console.log(foods)
    const {user} = UseAuth()
    return (
        <div>
          <Helmet><title>TastyMUnchMarketplace | Home</title></Helmet>
        <div className='relative h-[300px] md:h-[600px] bg-cover bg-center' style={{backgroundImage: `url(banner.jpg)`}}>

            <div className='relative z-40'>
            <Slide>
            <h2 className='md:text-4xl text-2xl lg:text-6xl  text-white font-lexend font-bold relative z-40 pt-16 md:pt-40 mx-auto text-center'>"Welcome to TastyMunch <br /> Marketplace Where Every <br /> Bite Tells a Story"</h2>
            <div className='text-center mx-auto w-[130px] mt-5 z-40 relative'>
            <Link to='/allfood'><button className='btn btn-secondary font-bold font-lexend'>See All foods</button></Link>
            </div>
            </Slide>
            </div>
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-slate-950 opacity-40 z-20'>
            </div>
        </div>
        <div>
        <div className='text-3xl font-bold font-lexend text-secondary text-center mt-10 mb-10'>Top Foods section</div>
        <div className='max-w-[1440px] mx-auto grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5'>
           {
            foods.map(food=> <div key={food._id} className="card card-compact mr-5 gap-5 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={food.FoodImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font-lexend text-black text-xl font-bold">{food.FoodName}</h2>
    <p className='font-lexend text-black text-xl font-bold'>Category: {food.FoodCategory}</p>
    <p className='font-lexend text-black text-xl font-bold'>Price: ${food.Price}</p>
    <p className='font-lexend text-black text-xl font-bold'>Quantity: {food.quantity}</p>
    <div className="card-actions justify-end">
      <Link to={`/allfood/${food._id}`}><button  className="btn btn-secondary font-lexend font-bold">See Details</button></Link>
    </div>
  </div>
</div>   
     
            )
           }
        </div>
          <div className='mx-auto w-[120px] mt-10 font-lexend font-bold'>
            <Link to='/allfood'><button className='px-8 py-3 bg-secondary text-white rounded-xl'>See All</button></Link>
          </div>
        </div>
        <Client></Client>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;