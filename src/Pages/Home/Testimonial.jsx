import React from 'react';

const Testimonial = () => {
    return (
        <div className='mt-[100px]'>
            <h2 className='text-3xl font-bold font-lexend text-secondary text-center mb-10'>Our testimonials</h2>
            <section className="bg-white dark:bg-gray-900 lg:flex justify-around gap-5 max-w-[1550px] mx-auto text-center lg:text-left">
    <div className="py-10">
        <div className="lg:-mx-6 lg:flex lg:items-center">

            <div className="mt-8  lg:px-6 lg:mt-0">
                <p class="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                   Help to built a smarter nation
                </h1>

                <p className=" md:text-center mt-6 text-gray-500 dark:text-gray-400">
                “ Although we claim that our country is digitalized most of our services are still taken manually. Sell your recipe from home at an exclusive price and commisions”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">Awlad Hossain</h3>
                <p className="text-gray-600 dark:text-gray-300">Managing director at TastyMunchMarketplace</p>
            </div>
        </div>
    </div>
    <div className="py-10">
        <div className="lg:-mx-6 lg:flex lg:items-center">

            <div className="mt-8  lg:px-6 lg:mt-0">
                <p class="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                    Help us improve our productivity
                </h1>

                <p className=" mt-6 text-gray-500 dark:text-gray-400 ">
                    “ Quality is the first priority for us. Regardless of price if the quality is good we believe that every business can grow. No different for TastyMunchMarketplace ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">Salim Uddin</h3>
                <p className="text-gray-600 dark:text-gray-300">Quality inspection officer at TastyMunchMarketplace</p>
            </div>
        </div>
    </div>
    <div className="py-10">
        <div className="lg:-mx-6 lg:flex lg:items-center">

            <div className="mt-8  lg:px-6 lg:mt-0">
                <p class="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl ">
                    Help us to improve service quality
                </h1>

                <p className=" mt-6 text-gray-500 dark:text-gray-400 ">
                    “ With constant usage and user experience we want to improve the user experience. We also would like to create stronf bond between buyers and sellers”
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">Sharif Khan</h3>
                <p className="text-gray-600 dark:text-gray-300">Marketing Manager at TastyMunchMarketplace</p>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Testimonial;
