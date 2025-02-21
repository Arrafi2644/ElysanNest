import React from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {
    const rooms = [
        {
          "id": 1,
          "name": "Standard Room",
          "image": "https://i.ibb.co.com/Fkp8YSnX/image.png",
          "price": 19.12,
          "originalPrice": 23.90,
          "perNight": true,
          "tag": "NEW"
        },
        {
          "id": 2,
          "name": "Double Room",
          "image": "https://i.ibb.co.com/ymZ3y8VW/image.png",
          "price": 28.72,
          "originalPrice": 35.90,
          "perNight": true,
          "tag": "NEW"
        },
        {
          "id": 3,
          "name": "Sea View Room",
          "image": "https://i.ibb.co.com/99Zm1Lgr/image.png",
          "price": 29.00,
          "originalPrice": null,
          "perNight": true,
          "tag": "NEW"
        }
      ]
      
    return (
        <div className='container mx-auto px-6 py-12 md:py-16'>
          {/* section head  */}
          <div>
            <h2 className='text-3xl font-bold text-center text-primary'>Discover Our Rooms</h2>
            <p className='text-center text-xs'>accommodation and comfort</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            {
                rooms.map(room => <RoomCard key={room.id} room={room}></RoomCard>)
            }
          </div>
            
        </div>
    );
};

export default Rooms;