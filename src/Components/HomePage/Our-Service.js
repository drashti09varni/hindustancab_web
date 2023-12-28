// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { AiFillStar } from 'react-icons/ai';
// import { FaCar, FaMoneyCheckAlt } from "react-icons/fa";
// import Drive from '../../Images/hindustanrides/car-parts-01.svg'
// import KM from '../../Images/hindustanrides/car-parts-02.svg';
// import petrol from '../../Images/hindustanrides/car-parts-03.svg';
// import basic from '../../Images/hindustanrides/car-parts-04 (1).svg'
// import pessenger from '../../Images/hindustanrides/car-parts-06.svg';
// import { MdLuggage } from "react-icons/md";


// export default function App() {
//   const [data, setData] = useState([]);

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     autoplay: true,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 1024, // Define a breakpoint at a certain screen width
//         settings: {
//           slidesToShow: 2, // Adjust settings for screens with a width less than 768px
//           slidesToScroll: 2,
//         }
//       },
//       {
//         breakpoint: 960, // Define a breakpoint at a certain screen width
//         settings: {
//           slidesToShow: 2, // Adjust settings for screens with a width less than 768px
//           slidesToScroll: 2,
//         }
//       },
//       {
//         breakpoint: 768, // Define a breakpoint at a certain screen width
//         settings: {
//           slidesToShow: 2, // Adjust settings for screens with a width less than 768px
//           slidesToScroll: 2,
//         }
//       },
//       {
//         breakpoint: 504, // Define a breakpoint at a certain screen width
//         settings: {
//           slidesToShow: 1, // Adjust settings for screens with a width less than 768px
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 480, // Define another breakpoint for smaller screens
//         settings: {
//           slidesToShow: 1, // Adjust settings for screens with a width less than 480px
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

// const fatchData = async () => {

//   try {
//     const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getCarCabDetail";

//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       },  
//     }


//     const response = await fetch(addRecordEndpoint, options);
//     const jsonResponse = await response.json();

//     setData(jsonResponse?.result);

//   } catch (err) {
//     console.log(err)
//   }
// }

// useEffect(() => {
//   fatchData();
// }, []);

// const handleBooking = (item) => {
//   window.location.href = `https://api.whatsapp.com/send?phone=917600060604&text=I am interested to book ${item?.carcab_name} from Hindustan Rides.`;
// }

// return (
//   <>
//     <div className="flex items-center justify-center bg-[#f5f5f5] pb-20">
//       <div className="mx-auto mt-16 px-4 sm:px-6  lg:px-8 xl:w-3/4 2xl:w-1/2 lg:w-4/5 xlg:w-10/12">
//         <center className='text-[35px] my-font font-mont font-[600] my-10'>
//           Explore Most Popular Cars
//           <p className='font-mont text-[18px] font-[500]'>Choose Our Cab Collections</p>
//         </center>
//         <Slider className="custom-slider" {...settings}>
//           {data?.map((item) => (
//             <div key={item.id} className="my-1 px-2 sm:px-3 xl:px-4">

//               <article className="overflow-hidden shadow-lg ">
//                     <a class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
//                       <div class="shadow p-4 rounded-lg bg-white">

//                         <div class="flex justify-center relative rounded-lg overflow-hidden h-58">
//                           <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
//                             <div class="absolute inset-0 bg-black opacity-10"></div>
//                             <img src={`http://193.203.162.218:4200/uploads/${item.carcabImg}`} />
//                           </div>
//                         </div>
//                         <div className='text-left justify-left bg-[#fff] pb-5'>
//                           <div className="justify-left">
//                             <p className='text-[22px] font-[600] pt-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ml-5'>{item.carcab_name}</p>
//                             <div className='flex space-x-1 ml-5'>
//                             <AiFillStar fill='#fcaf21' size={20} />
//                             <AiFillStar fill='#fcaf21' size={20} />
//                             <AiFillStar fill='#fcaf21' size={20} />
//                             <AiFillStar fill='#fcaf21' size={20} />
//                             <AiFillStar fill='#fcaf21' size={20} />
//                           </div>
//                             <div>
//                               <ul className='m-[10px] flex justify-between mt-8'>
//                                 <li className='flex items-center'>
//                                   <img src={Drive} className='w-[20px]' alt='Auto' />
//                                   <p className='ml-1'>Auto</p>
//                                 </li>
//                                 <li className='flex items-center'>
//                                   <img src={KM} className='w-[20px]' alt='KM' />
//                                   <p className='ml-1'>{item.bus_rate}</p>
//                                 </li>
//                                 <li className='flex items-center'> 
//                                   <img src={petrol} className='w-[20px]' alt='Petrol' />
//                                   <p className='ml-1'>Petrol</p>
//                                 </li>
//                               </ul>

//                               <ul className=' m-[10px] flex justify-between'>
//                                 <li className='flex items-center'>
//                                   <img src={basic} className='w-[20px]' alt='Basic' />
//                                   <p className='ml-1'>Basic</p>
//                                 </li>
//                                 <li className='flex items-center w-[60px]'>
//                                   <img src={pessenger} className='w-[20px]' alt='Pessenger' />
//                                   <p className='ml-1'>{item.pessenger}</p>
//                                 </li>
//                                 <li className='flex items-center w-[70px]'>
//                                   <MdLuggage className='mt-1' fill="#828282" size={24} />
//                                   <p className='ml-1'>{item.luggage}</p>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div className='ml-8 flex mt-5'>
//                               <FaMoneyCheckAlt fill='#828282' size={24} className='' />
//                               <p className='ml-2'>{item.extra}</p>
//                             </div>
//                           </div>

//                           <div className="flex items-center justify-center mt-8">
//                             <button className='uppercase bg-yellow px-20 py-2 font-[600] rounded' onClick={() => { handleBooking(item) }}>Book now</button>
//                           </div>
//                         </div>
//                       </div>
//                     </a>
//                   </article>

//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   </>
// );
// }

import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar } from 'react-icons/ai';
import { FaCar, FaMoneyCheckAlt } from "react-icons/fa";
import Drive from '../../Images/hindustanrides/car-parts-01.svg'
import KM from '../../Images/hindustanrides/car-parts-02.svg';
import petrol from '../../Images/hindustanrides/car-parts-03.svg';
import basic from '../../Images/hindustanrides/car-parts-04 (1).svg'
import pessenger from '../../Images/hindustanrides/car-parts-06.svg';
import { MdLuggage } from "react-icons/md";



export default function Carousel() {

  const [data, setData] = useState([]);
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }


  const fatchData = async () => {

    try {
      const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getCarCabDetail";

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }


      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();

      setData(jsonResponse?.result);

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fatchData();
  }, []);

  const handleBooking = (item) => {
    window.location.href = `https://api.whatsapp.com/send?phone=917600060604&text=I am interested to book ${item?.carcab_name} from Hindustan Rides.`;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="controls">
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings} className="space-x-10">
        {data.map((item, index) => (

          <div key={item.id} className="my-1 px-2 sm:px-3 xl:px-4 max-w-sm mx-auto ">

            <article className="overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <a class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div class="shadow p-4 rounded-lg bg-white">

                  <div class="flex justify-center relative rounded-lg overflow-hidden h-58">
                    <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                      <div class="absolute inset-0 bg-black opacity-10"></div>
                      <img src={`http://193.203.162.218:4200/uploads/${item.carcabImg}`} />
                    </div>
                  </div>
                  <div className='text-left justify-left bg-[#fff] pb-5'>
                    <div className="justify-left">
                      <p className='text-[22px] font-[600] pt-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ml-5'>{item.carcab_name}</p>
                      <div className='flex space-x-1 ml-5'>
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                      </div>
                      <div>

                        <ul className='m-[10px] flex justify-between mt-8'>
                          <li className='flex items-center'>
                            <img src={Drive} className='w-[20px]' alt='Auto' />
                            <p className='ml-1'>Auto</p>
                          </li>
                          <li className='flex items-center'>
                            <img src={KM} className='w-[20px]' alt='KM' />
                            <p className='ml-1'>{item.bus_rate}</p>
                          </li>
                          <li className='flex items-center'>
                            <img src={petrol} className='w-[20px]' alt='Petrol' />
                            <p className='ml-1'>Petrol</p>
                          </li>
                        </ul>

                        <ul className=' m-[10px] flex justify-between'>
                          <li className='flex items-center'>
                            <img src={basic} className='w-[20px]' alt='Basic' />
                            <p className='ml-1'>Basic</p>
                          </li>
                          <li className='flex items-center w-[60px]'>
                            <img src={pessenger} className='w-[20px]' alt='Pessenger' />
                            <p className='ml-1'>{item.pessenger}</p>
                          </li>
                          <li className='flex items-center w-[70px]'>
                            <MdLuggage className='mt-1' fill="#828282" size={24} />
                            <p className='ml-1'>{item.luggage}</p>
                          </li>
                        </ul>
                      </div>
                      <div className='ml-8 flex mt-5'>
                        <FaMoneyCheckAlt fill='#828282' size={24} className='' />
                        <p className='ml-2'>{item.extra}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center mt-8">
                      <button className='uppercase bg-yellow px-20 py-2 font-[600] rounded' onClick={() => { handleBooking(item) }}>Book now</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>

          </div>

        ))}
      </Slider>
    </div>
  );
}