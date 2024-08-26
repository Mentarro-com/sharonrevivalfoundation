import React from 'react';

const images = [
  // Add image URLs here
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/301',
  'https://via.placeholder.com/302',
  'https://via.placeholder.com/303',
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group bg-white/20 backdrop-blur-lg rounded-lg p-1.5"
            style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <img
              src={src}
              alt={`Gallery Image ${index}`}
              className="rounded-lg object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
