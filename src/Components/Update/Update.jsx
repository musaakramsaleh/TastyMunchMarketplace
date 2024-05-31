import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../../Routes/Hook/UseAuth';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const{user} = UseAuth()
    const data = useLoaderData()
    const navigate = useNavigate()
    console.log(data)
    const handleSubmit = async e=>{
        e.preventDefault()
        const form = e.target
        const FoodName = form.FoodName.value
        const FoodImage = form.FoodImage.value
        const FoodCategory = form.Category.value
        const quantity = parseInt(form.quantity.value)
        const Price = form.price.value
        const FoodOrigin = form.country.value
        const Description = form.description.value
        const fooddata = {FoodName,FoodImage,FoodCategory,quantity,Price,FoodOrigin,Description}
        fetch(`${import.meta.env.VITE_API_URL}/update/${data._id}`,{
        method:'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(fooddata)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          Swal.fire({
            title: "Success!",
            text: "Data updated Successfully!",
            icon: "success"
          });
         
        }
      })
      navigate('/myfood')
    }
    if(user.email!==data.AddBy.email){
      return useEffect(()=>{
        navigate('/myfood')
      },[])
    }
    return (
        <div className='pb-10'>
             <h2 className='text-center mt-10 font-lexend text-2xl text-secondary font-bold'>Update</h2>
            <div className='max-w-[1000px] mx-auto'>
            <form onSubmit={handleSubmit}>
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food Name:</label><br />
             <input defaultValue={data.FoodName} type="text" name='FoodName' placeholder="Type here" className="input input-bordered w-full" /><br />
             <label className='font-lexend font-bold'>Image url:</label><br />
             <input defaultValue={data.FoodImage} type="text" name='FoodImage' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food Category:</label><br />
             <input defaultValue={data.FoodCategory} type="text" name='Category' placeholder="Type here" className="input input-bordered w-full " /><br />
             <label className='font-lexend font-bold my-3'>Food quantity:</label><br />
             <input defaultValue={data.quantity} type="text" name='quantity' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food price:</label><br />
             <input defaultValue={data.Price} type="text" name='price' placeholder="Type here" className="input input-bordered w-full " /><br />
             <label className='font-lexend font-bold my-3'>Food Origin (Country):</label><br />
             <input defaultValue={data.FoodOrigin} type="text" name='country' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <label className='font-lexend font-bold my-3'>Description</label>
            <textarea
              defaultValue={data.Description}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
            <input className='w-full bg-secondary font-lexend font-bold text-xl py-3 rounded-xl text-white cursor-pointer mt-3' type="Submit" value='Update' />
            </form>
            </div>
        </div> 
          
    );
};

export default Update;