import React, { useEffect, useState } from 'react';
import UseAuth from '../../Routes/Hook/UseAuth';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Myfood = () => {
    const {user} = UseAuth()
    const [food,setfood] =useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/food/${user?.email}`,{
                withCredentials:true})
            setfood(data)
        }
        getData()
    },[user])
      console.log(food)
      const handle_delete = async (id) => {
        console.log(id);
        try {
          const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          });
      
          if (result.isConfirmed) {
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/food/${id}`);
            const data = response.data;
            console.log(data);
            
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "This order has been deleted.",
                icon: "success"
              });
              setfood(food.filter(foods => foods._id !== id));
            }
          }
        } catch (error) {
          console.error("Error deleting painting:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the painting.",
            icon: "error"
          });
        }
      };
    return (
       <div>
        <Helmet><title>TastyMUnchMarketplace | My added foods</title></Helmet>
        <h2 className='font-lexend font-bold text-2xl text-secondary text-center mt-5'>My Added items</h2>
        <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
        {
            food.map(foods=><div className='border md:w-[400px] border-solid shadow-xl p-5' key={foods._id}>
               <img className='h-[270px] w-[full]' src={foods.FoodImage} alt="" />
               <h2 className='font-lexend text-black font-bold'>{foods.FoodName}</h2>
               <h2 className='font-lexend text-black font-bold'>Price: ${foods.Price}</h2>
               <h2 className='font-lexend text-black font-bold'>items sold: {foods.purchaseCount}</h2>
               <h2 className='font-lexend text-black font-bold'>Quantity left: {foods.quantity}</h2>
               <div className='flex gap-3'>
               <Link to={`/update/${foods._id}`}><button className='btn btn-secondary font-lexend font-bold mt-3'>Update</button></Link>
               <button onClick={()=>handle_delete(foods._id)} className='btn btn-secondary font-lexend font-bold mt-3'>Delete</button>
               </div>
            </div>)
        }
       </div>
       </div>
    );
};

export default Myfood;