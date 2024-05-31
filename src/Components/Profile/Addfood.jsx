import React, { useEffect } from 'react';
import UseAuth from '../../Routes/Hook/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Addfood = () => {
    const{user} = UseAuth()
    const navigate = useNavigate()
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
        const AddBy = { name: user.displayName, email: user.email }
        const purchaseCount = 0;
        const fooddata = {FoodName,FoodImage,FoodCategory,quantity,Price,FoodOrigin,Description,AddBy,purchaseCount}
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/addfood`,fooddata,{
                withCredentials:true
            })
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                  title: "Success!",
                  text: "Data added Successfully!",
                  icon: "success"
                });
                navigate('/myfood')
                form.reset()
              } 
        }catch(err){
            console.log(err)
        }
        
    }
    return (
        <div className='pb-10'>
            <Helmet><title>TastyMUnchMarketplace | Add food</title></Helmet>
             <h2 className='text-center mt-10 font-lexend text-2xl text-secondary font-bold'>Add a Food item</h2>
            <div className='max-w-[1000px] mx-auto'>
            <form onSubmit={handleSubmit}>
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food Name:</label><br />
             <input type="text" name='FoodName' placeholder="Type here" className="input input-bordered w-full" /><br />
             <label className='font-lexend font-bold'>Image url:</label><br />
             <input type="text" name='FoodImage' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food Category:</label><br />
             <input type="text" name='Category' placeholder="Type here" className="input input-bordered w-full " /><br />
             <label className='font-lexend font-bold my-3'>Food quantity:</label><br />
             <input type="text" name='quantity' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food price:</label><br />
             <input type="text" name='price' placeholder="Type here" className="input input-bordered w-full " /><br />
             <label className='font-lexend font-bold my-3'>Food Origin (Country):</label><br />
             <input type="text" name='country' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <label className='font-lexend font-bold my-3'>Description</label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
            <input className='w-full bg-secondary font-lexend font-bold text-xl py-3 rounded-xl text-white cursor-pointer mt-3' type="Submit" value='Add Item' />
            </form>
            </div>
        </div> 
          
    );
};

export default Addfood;