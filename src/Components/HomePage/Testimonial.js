
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import person1 from '../../Images/hindustanrides/person1.jpg';
import person2 from '../../Images/hindustanrides/person2.jpg';
import person3 from '../../Images/hindustanrides/person3.jpg';
import person4 from '../../Images/hindustanrides/person4.jpg';


export default function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    className: 'theClass',
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };


  return (
    <div className='bg-testimonial my-24'>
      <center className='text-[35px] font-mont py-12 my-font text-[#fff] p-2'> Our Happy Client's Review
        <p className='font-mont text-[18px] mt-2'>Client's testimonial why People Love</p></center>

      <div id="slider-container" className="lg:max-w-5xl xlg:max-w-5xl xmd:max-w-5xl md:max-w-3xl
       xsm:max-w-3xl slider:max-w-xl sm:max-w-md xl:max-w-xs 2xl:max-w-xs  mx-auto mt-12 mb-20 " >

        <Slider {...settings}>

          <article className="mb-20 ">
            <div className='flex p-5 hover:text-[#fff]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[100%]
             lg:w-[480px] xlg:w-[480px] xmd:w-[480px] md:w-[355px] xsm:w-[355px] slider:w-[100%] sm:w-[100%] xl:w-[100%] 2xl:w-[100%]  bg-[#fff] rounded hover:bg-[#127384]'>
              <div className="flex flex-col">
                <BiSolidQuoteLeft size={25} fill='#fcaf21' />
                <div className="mr-4 flex space-x-3 py-2">
                  <img src={person1} alt="User" className="w-14 h-14 rounded-full" />
                  <p className='mt-2 text-[18px] font-[600]'>Nikhil Vasavda</p>
                </div>
                <p className="text-gray-800">
                  "Outstanding service. Skillful driving, courteous chauffeur. Always on time and reasonable pricing."
                </p>
                <span className="text-lg text-gray-700 font-semibold">Visitor, Vadodara</span>
              </div>
            </div>
          </article>


          <article className="mb-20">
            <div className='flex p-5 hover:text-[#fff] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  h-[100%]
           lg:w-[480px] xlg:w-[480px] xmd:w-[480px] md:w-[355px] xsm:w-[355px] slider:w-[100%] sm:w-[100%] xl:w-[100%] 2xl:w-[100%]  bg-[#fff] rounded hover:bg-[#127384]' >
              <div className="flex flex-col">
                <BiSolidQuoteLeft size={25} fill='#fcaf21' />
                <div className="mr-4 flex space-x-3 py-2">
                  <img src={person2} alt="User" className="w-14 h-14 rounded-full" />
                  <p className='mt-2 text-[18px] font-[600]'>Manubhai</p>
                </div>
                <p className="text-gray-800">
                  "Outstanding service. Skillful driving, courteous chauffeur. Always on time and reasonable pricing."
                </p>
                <span className="text-lg text-gray-700 font-semibold">Retired, Vadodara</span>
              </div>
            </div>
          </article>


          <article className="mb-20">
            <div className='flex p-5 hover:text-[#fff] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  h-[100%]
             lg:w-[480px] xlg:w-[480px] xmd:w-[480px] md:w-[355px] xsm:w-[355px] slider:w-[100%] sm:w-[100%] xl:w-[100%] 2xl:w-[100%] bg-[#fff] rounded hover:bg-[#127384]'>
              <div className="flex flex-col">
                <BiSolidQuoteLeft size={25} fill='#fcaf21' />
                <div className="mr-4 flex space-x-3 py-2">
                  <img src={person3} alt="User" className="w-14 h-14 rounded-full" />
                  <p className='mt-2 text-[18px] font-[600]'>Jogani Bhavesh</p>
                </div>
                <p className="text-gray-800">
                  "Superb assistance. Respectful chauffeur, skilled driver. Always on time with competitive and fair pricing!"
                </p>
                <span className="text-lg text-gray-700 font-semibold">Engineer Vadodara</span>
              </div>
            </div>
          </article>

          <article className="mb-20">
            <div className='flex p-5  hover:text-[#fff] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  h-[100%]
             lg:w-[480px] xlg:w-[480px] xmd:w-[480px] md:w-[355px] xsm:w-[355px] slider:w-[100%] sm:w-[100%] xl:w-[100%] 2xl:w-[100%]   bg-[#fff] rounded hover:bg-[#127384]'>
              <div className="flex flex-col">
                <BiSolidQuoteLeft size={25} fill='#fcaf21' />
                <div className="mr-4 flex space-x-3 py-2">
                  <img src={person4} alt="User" className="w-14 h-14 rounded-full" />
                  <p className='mt-2 text-[18px] font-[600]'>Sudha</p>
                </div>
                <p className="text-gray-800">
                  "Exceptional service. Courteous driving, professional driver. Consistently punctual and competitive rates!"
                </p>
                <span className="text-lg text-gray-700 font-semibold">Blogger, Vadodara</span>
              </div>
            </div>
          </article>
        </Slider>
      </div>
    </div>
  );
}


