import React from "react";

const Images = (props) => {
  const { data,onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 p-7 bg-slate-200">
      {data.map((slide, index) => (
        <div
          className="relative overflow-hidden rounded-lg shadow-lg group"
          onClick={() => handleClickImage(index)}
          key={index}
        >
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 border-b-4 border-gray-400 flex items-end justify-center text-xl text-white font-bold group-hover:bg-opacity-70 transition-all duration-300 ease-in-out p-4">
  {slide.title}
</p>
        </div>
      ))}


    </div>
  );
};

export default Images;
