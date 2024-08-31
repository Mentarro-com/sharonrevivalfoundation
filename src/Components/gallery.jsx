import React from 'react';

const GalleryImages = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Beautiful landscape',
      title: 'Landscape',
      description: 'A beautiful landscape view',
    },
    {
      src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'City skyline',
      title: 'City',
      description: 'A stunning city skyline',
    },
    {
      src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Mountain view',
      title: 'Mountains',
      description: 'Majestic mountain range',
    },
    {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Forest trail',
      title: 'Forest',
      description: 'A peaceful forest trail',
    },
    {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Beach',
      title: 'Beach',
      description: 'Relaxing beach view',
    },
    {
      src: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      alt: 'Desert',
      title: 'Desert',
      description: 'The vast desert sands',
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center">
              <h2 className="text-white text-lg font-semibold">{image.title}</h2>
              <p className="text-white text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
