import React from 'react';

const Gallery = () => {
    const galleryItems = [
        {
          "id": 1,
          "title": "Luxury Lobby",
          "image": "https://i.ibb.co.com/SDtGgkd8/image.png",
          "description": "A grand entrance with elegant decor and warm lighting."
        },
        {
          "id": 2,
          "title": "Infinity Pool",
          "image": "https://i.ibb.co.com/3yHNbCLx/image.png",
          "description": "A breathtaking infinity pool overlooking the ocean."
        },
        {
          "id": 3,
          "title": "Deluxe Suite",
          "image": "https://i.ibb.co.com/5XF02yLr/image.png",
          "description": "Spacious and comfortable suite with modern amenities."
        },
        {
          "id": 4,
          "title": "Fine Dining",
          "image": "https://i.ibb.co.com/nsMftBmX/image.png",
          "description": "A world-class dining experience with gourmet cuisine."
        },
        {
          "id": 5,
          "title": "Spa & Wellness",
          "image": "https://i.ibb.co.com/6VcL4Vp/image.png",
          "description": "Relaxing spa treatments for ultimate rejuvenation."
        },
        {
          "id": 6,
          "title": "Private Beach",
          "image": "https://i.ibb.co.com/k21ds1fX/image.png",
          "description": "A serene private beach with crystal-clear waters."
        },
        {
          "id": 7,
          "title": "Fitness Center",
          "image": "https://i.ibb.co.com/kg4vMWXg/image.png",
          "description": "State-of-the-art gym with professional equipment."
        },
        {
          "id": 8,
          "title": "Event Hall",
          "image": "https://i.ibb.co.com/KZX5Bhp/image.png",
          "description": "Spacious venue for weddings, conferences, and more."
        }
      ]
      
    return (
        <div className='container mx-auto px-6 py-12 md:py-16 bg-green-100'>
          {/* section head  */}
          <div>
            <h2 className='text-3xl font-bold text-center text-primary'>Our Gallery</h2>
            <p className='text-center text-xs'>Explore Our Stunning Collection of Memories</p>

          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            {
              galleryItems.map(item => <div>
                 <img className='rounded-md h-52 w-full object-cover' src={item.image} alt="" />
                </div>)
            }
          </div>
        </div>
    );
};

export default Gallery;