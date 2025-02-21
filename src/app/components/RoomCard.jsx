"use client";
import Link from 'next/link';
import React from 'react';

const RoomCard = ({room}) => {
    return (
        <Link href={""} className='border rounded-md'>
            <img src={room.image} alt="" />
            <div className='p-4'>
            <h3 className='font-bold text-base'>{room.name}</h3>
            <span>From ${room.price}</span>
            </div>
        </Link>
    );
};

export default RoomCard;