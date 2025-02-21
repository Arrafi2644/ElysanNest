import React from 'react';

const Discover = () => {
    return (
        <div className='container mx-auto px-6 py-12 md:py-16 flex flex-col-reverse md:flex-row gap-4 bg-green-100'>
            <div className='w-full md:w-1/2 space-y-2 place-content-center'>
                <h2 className='text-2xl md:text-3xl font-bold'>Make your golden memories</h2>
                <p className='text-lg font-bold '>A refined luxury hotel in the famed oasis of city</p>
                <p>A 5-star hotel located near the airport and railway station; steps away from tourist sites like cave, hotel is ideal for leisure and business alike. Decorated with contemporary art featuring rooms and suites offering a view of the city skyline and the vast oasis; our huge ballroom and meeting spaces are ideal for business, and weddings.</p>
                <button className="btn btn-outline">Discover More</button>
            </div>
            <div className='w-full md:w-1/2'>
                <img src="https://i.ibb.co.com/4wRhqJ0V/image.png" alt="" />
            </div>
        </div>
    );
};

export default Discover;