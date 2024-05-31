import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseAuth from '../../Routes/Hook/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Buyfood = () => {
    const {user} = UseAuth()
    const data = useLoaderData()
    const [disable,setdisabled] = useState(false)
    useEffect(() => {
      setdisabled(data.quantity <= 0);
    }, [data.quantity]);
    console.log(data)
    const handleSubmit = async e => {
       e.preventDefault()
       const form = e.target
       const FoodName = form.FoodName.value
       const Price = form.price.value
       const BuyerName = form.BuyerName.value
       const BuyerEmail = form.BuyerEmail.value
       const owner = data.AddBy.name
       const image = data.FoodImage
       const ownermail = data.AddBy.email
       const quantity = parseInt(form.quantity.value)
       const date = Date.now()
       const product = {FoodName,Price,BuyerName,BuyerEmail,quantity,date,owner,image,ownermail}
       
       console.log(product)
       if(user?.email === data.AddBy.email){
        return Swal.fire({
          title: "Failure",
          text: "Sorry cannot buy your own product",
          icon: "alert"
        });
       }
       if(quantity>data.quantity){
        return  Swal.fire({
          title: "Failure",
          text: "sufficient product not available",
          icon: "alert"
        });
       }
       if(data.quantity<=0){
        return Swal.fire({
          title: "Failure",
          text: "Cannot buy product out of stock",
          icon: "alert"
        });
       }
       if(data.quantity>=0){
        setdisabled(false)
       }
       if(!quantity){
        return Swal.fire({
          title: "Failure",
          text: "Please enter quantity",
          icon: "alert"
        });
       }
       try {
        const response1 = await axios.post(`${import.meta.env.VITE_API_URL}/addproduct`, product);
        console.log(response1.data);
       
    
        const response2 = await axios.put(`${import.meta.env.VITE_API_URL}/updatefood/${data._id}`, product);
        console.log(response2.data);
    
        Swal.fire({
          title: "Success!",
          text: "Product purchased Successfully!",
          icon: "success"
        });
        form.reset();
      } catch (err) {
        console.error(err);
        // Handle errors
      }
    };
    
    
    return (
        <div>
        <div className='pb-10'>
             <h2 className='text-center mt-10 font-lexend text-2xl text-secondary font-bold'>Buy the item</h2>
            <div className='max-w-[1000px] mx-auto'>
            <form onSubmit={handleSubmit} >
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food Name:</label><br />
             <input disabled defaultValue={data.FoodName} type="text" name='FoodName' placeholder="Type here" className="input input-bordered w-full" /><br />
             </div>
             <div className=''>
            <label  className='font-lexend font-bold my-3'>Food price:</label><br />
             <input disabled defaultValue={`$ ${data.Price}`} type="text" name='price' placeholder="Type here" className="input input-bordered w-full " /><br />
             <label  className='font-lexend font-bold my-3'>Availabe quantity: {disable?"Sorry no stock available":" "}</label><br />
             <input  type="text" disabled defaultValue={`${disable?"No stock available": data.quantity}`} name='available quantity' placeholder="Type here" className="input input-bordered w-full " />
             <label  className='font-lexend font-bold my-3'>Food quantity:</label><br />
             <input  type="text" name='quantity' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <label  className='font-lexend font-bold my-3'>Buyer Name:</label><br />
             <input disabled defaultValue={user?.displayName} type="text" name='BuyerName' placeholder="Type here" className="input input-bordered w-full " />
             <label  className='font-lexend font-bold my-3'>Buyer email:</label><br />
             <input disabled defaultValue={user?.email} type="text" name='BuyerEmail' placeholder="Type here" className="input input-bordered w-full " />
            <input disabled={disable} className={`w-full  ${disable?'bg-gray-500':'bg-secondary'} font-lexend font-bold text-xl py-3 rounded-xl text-white mt-3`} type="Submit" value='Buy food' />
            </form>
            </div>
        </div> 
          
        </div>
    );
};

export default Buyfood;