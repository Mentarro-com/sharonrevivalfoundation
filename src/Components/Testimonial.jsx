import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "It’s good to meet you, Dr. Banner. Your work on anti-electron collisions is unparalleled. And I’m a huge fan of the way you lose control and turn into an enormous green rage monster.",
      author: "Tony Stark",
    },
    {
      text: "The Avengers. That's what we call ourselves; we're sort of like a team. 'Earth's Mightiest Heroes' type thing.",
      author: "Nick Fury",
    },
    {
      text: "Genius, billionaire, playboy, philanthropist.",
      author: "Tony Stark",
    }
  ];

  return (
    <div className="p-6 pt-16 pb-16 bg-[#EDEBE5]" >
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
        What Our Clients Say
      </h2>
      <p className="text-xl text-gray-600 text-center mb-16">
        Hear from our satisfied clients and see how we’ve helped them achieve success.
      </p>
      
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 3,
          autoScroll: {
            speed: 1,
          },
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 2 },
            1024: { perPage: 3 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg w-full max-w-xs h-60 p-4 flex items-center justify-center">
              <blockquote className="relative text-gray-900 text-center p-4 w-full m-1">
                {testimonial.text}
                <cite className="block mt-2 text-blue-700 font-bold">- {testimonial.author}</cite>
              </blockquote>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <style>{`
        blockquote {
          background:
            linear-gradient(to right, #039be5 6px, transparent 4px) 0 100%,
            linear-gradient(to left, #039be5 6px, transparent 4px) 100% 0,
            linear-gradient(to bottom, #039be5 6px, transparent 4px) 100% 0,
            linear-gradient(to top, #039be5 6px, transparent 4px) 0 100%;
          background-repeat: no-repeat;
          background-size: 20px 20px;
          position: relative;
          padding: 1em;
          color: #333;
          font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
        }

        blockquote:before,
        blockquote:after {
          font-family: FontAwesome;
          position: absolute;
          color: #039be5;
          font-size: 34px;
        }

        blockquote:before {
          content: "\\f10d";
          top: -12px;
          margin-right: -20px;
          right: 100%;
        }

        blockquote:after {
          content: "\\f10e";
          margin-left: -20px;
          left: 100%;
          top: auto;
          bottom: -20px;
        }

        cite {
          font-style: normal;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
