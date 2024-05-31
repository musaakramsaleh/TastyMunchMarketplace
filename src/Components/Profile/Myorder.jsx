import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Routes/Hook/UseAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Myorder = () => {
    const {user} = UseAuth()
    const [food,setfood] =useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/product/${user?.email}`,{
              withCredentials:true
            })
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
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/product/${id}`);
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
        <Helmet><title>TastyMUnchMarketplace | My Order</title></Helmet>
        <h2 className='font-lexend font-bold text-2xl text-secondary text-center mt-5'>My Ordered Items</h2>
        <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
        {
            food.map(foods=><div className='border md:w-[400px] border-solid shadow-xl p-5' key={foods._id}>
               <img className='h-[270px] w-[full]' src={foods.image} alt="" />
               <h2 className='font-lexend text-black font-bold'>{foods.FoodName}</h2>
               <h2 className='font-lexend text-black font-bold'>Price: {foods.Price}</h2>
               <h2 className='font-lexend text-black font-bold'>Owner: {foods.owner}</h2>
               <h2 className='font-lexend text-black font-bold'>Owner-mail: {foods.ownermail}</h2>
               <h2 className='font-lexend text-black font-bold'>Quantity: {foods.quantity}</h2>
               <h2 className='font-lexend text-black font-bold'>Order date: {new Date(foods.date).toLocaleString()}</h2>
               <button onClick={()=>handle_delete(foods._id)} className='btn btn-secondary font-lexend font-bold mt-3'>Delete</button>
            </div>)
        }
       </div>
       </div>
    )
};

export default Myorder;