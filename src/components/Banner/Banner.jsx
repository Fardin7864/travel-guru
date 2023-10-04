import { useState } from "react";
import {BsArrowRight, BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import { Link, useLocation } from "react-router-dom";
import BookingCard from "../BookingCard/BookingCard";

const Banner = () => {
    const location = useLocation();
    const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      text: "Sundarbans",
      imageUrl: 'https://i.ibb.co/xq9ndrn/sundorbon.png',
    },
    {
      text: "Birisiri",
      imageUrl: 'https://i.ibb.co/yhFWHbF/Sajek.png',
    },
    {
      text: "Sreemangal",
      imageUrl: 'https://i.ibb.co/HgyckxG/Sreemongol.png',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/JcXrcTR/Rectangle-1.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
      </div>
      <div className=" absolute top-36 flex justify-around pl-28">
        <div className="w-4/6">
          <h1 className=" text-white font-bold  bebas text-8xl mt-6">Cox's bazar</h1>
          <p className="text-white text-base leading-6 w-9/12">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          { location.pathname === "/" &&
          <Link to="/booking" >
          <button className="py-3 px-7 flex items-center justify-center gap-4 mt-4 text-center bg-[#F9A51A] rounded-md text-base font-medium text-[#000]">Booking <BsArrowRight></BsArrowRight></button>
          </Link>
          }        
        </div>
        {location.pathname === "/" &&
        <div className="w-11/12">
        <div>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentSlide ? 'selected' : ''
            }`}
          >
            <img src={image.imageUrl} alt={`Slide ${index + 1}`} />
            <h3 className="text-4xl bebas text-white relative top-[80%] -left-60">{image.text}</h3>
          </div>
        ))}
      </div>
      <div className="carousel-buttons mt-3">
        <button onClick={prevSlide}><BsChevronLeft className=" bg-white rounded-full text-5xl p-2 mr-3"></BsChevronLeft></button>
        <button onClick={nextSlide}><BsChevronRight className=" bg-white rounded-full text-5xl p-2"></BsChevronRight></button>
      </div>
      <style>{`
        .carousel {
          display: flex;
          overflow: hidden;
        }

        .carousel-item {
          flex: 0 0 270px;
          height: 416px;
          margin-right: 30px;
          transition: transform 0.3s ease-in-out;
        }

        .selected {
          border: 4px solid #FBBC04;
          border-radius: 20px;
           /* Add a border to the selected slide */
        }

        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
        </div>
        }
        { location.pathname === "/booking" &&
            <div className=" w-3/4">
                <BookingCard></BookingCard>
            </div>
        }
      </div>
    </div>
  );
};

export default Banner;
