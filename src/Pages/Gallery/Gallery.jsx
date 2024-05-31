import React, { useEffect, useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAuth from '../../Routes/Hook/UseAuth';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
    const {user} = UseAuth()
    const navigate = useNavigate()
    const hamba = useLoaderData()
    const [value,setvalue] = useState(hamba)
    const [hoverStates, setHoverStates] = useState(Array(value.length).fill(false));
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = (index) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = true;
        setHoverStates(updatedHoverStates);
    };
    const handleMouseLeave = (index) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = false;
        setHoverStates(updatedHoverStates);
    };

    console.log(value)
    const handleclick= async e =>{
        if(!user){
            navigate('/login', { state: location.pathname })
           return 
        }
        const { value: formValues } = await Swal.fire({
            title: "Upload your image",
            html: `
            <label>${user?.displayName}</label><br><br>
              <label>image url</label><br>
              <input id="swal-input1" class="swal2-input"><br>
              <label>Short description</label><br>
              <input id="swal-input2" class="swal2-input">
            `,
            focusConfirm: false,
            preConfirm: () => {
                const name = user.displayName
                const image = document.getElementById("swal-input1").value
                const description = document.getElementById("swal-input2").value
                const data = {name,image,description}
              return data
            }
          });
          if (formValues) {
            Swal.fire(JSON.stringify(formValues));
            try {
                const response1 = await axios.post(`${import.meta.env.VITE_API_URL}/gallery`, formValues);
                console.log(response1.data);
                Swal.fire({
                  title: "Success!",
                  text: "photo created Successfully!",
                  icon: "success"
                });
              } catch (err) {
                console.error(err);
                // Handle errors
              }
          }
          window.location.reload()
    }
     
    return (
        <div>
            <Helmet><title>TastyMUnchMarketplace | Gallery</title></Helmet>
            <div className='relative h-[300px] md:h-[600px] bg-cover bg-center' style={{backgroundImage: `url(all-food.jpg)`}}>
                <h2 className='relative z-30 font-lexend text-center pt-20 font-bold text-3xl md:text-6xl text-white'>Gallery</h2>
                <h2 className='relative z-30 font-lexend text-center  font-bold text-3xl pt-5 text-white'>Home | Gallery</h2>
                <div className='absolute top-0 right-0 left-0 bottom-0 bg-slate-950 opacity-40 z-20'></div>
            </div>
            <div className='mx-auto mt-10 gap-5 max-w-[1440px] grid grid-cols-1 md:grid-cols-3 justify-around'>
                {
                    value.map((values,index)=><div 
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    className='relative rounded-sm w-[350px]' key={values._id}>
                        <img src={values.image} className='w-[350px] h-[233px]' alt="" />
                        <div className={`absolute w-[350px] h-[233px] ${hoverStates[index] ? 'block hover ' : 'hidden transition'} hover:transition top-0  left-0 right-0 bottom-0  bg-black opacity-80`}>
                        <h2 className='text-white font-lexend font-bold text-xl text-center p-5'>{values.name}</h2>
                        <h2 className='text-white font-lexend font-bold text-xl text-center p-5'>{values.description}</h2>
                     </div>
                    </div>)
                }
            </div>
            <div className='w-[120px] mx-auto mt-10'>
                <button onClick={handleclick} className="py-3 px-7  bg-secondary font-bold font-lexend mx-auto rounded-lg text-white">Add</button>
            </div>
        </div>
    );
};

export default Gallery;
