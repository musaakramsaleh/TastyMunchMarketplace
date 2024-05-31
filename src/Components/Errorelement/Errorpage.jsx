import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='grid grid-cols-1 text-center items-center max-w-[1280px] mx-auto justify-center h-screen'>
            <div>
            <h1 className='text-4xl font-bold'>Error occured <br />Sorry</h1>
            <Link to='/' className=''><button className='btn-ghost bg-slate-400 text-xl font-normal px-6 py-3 mt-12'>Go back to home</button></Link>
            </div>
        </div>
    );
};

export default Errorpage;