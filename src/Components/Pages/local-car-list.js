import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import img from '../../Images/hindustanrides/local-img.jpg'


const OneWayCarList = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = React.useState(false);
  const location = useLocation();
  const { data, city, time, date } = location.state;
  console.log(time);
  console.log(date);

  const handleSubmit = (item) => {

    navigate('/booking-form', {
      state: {
        selectData: item,
      },
    });
  }
  return <>

     <div className='h-[70px] bg-[#2766dd] '></div>
    <div className='h-[30px] bg-[#144298]'></div>
    <div className='flex flex-col justify-center '>

    <div className='flex justify-between lg:px-52 xmd:px-16 md:px-16 xsm:px-12 sm:px-8 pt-10 xl:px-5 2xl:px-3'>
  {/* Left side */}
  <h1 className='text-[40px] font-[600] items-start [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
    Surat 
  </h1>

  {/* Right side */}
  <div className='flex text-[20px] font-[600] space-x-10 mt-[30px]'>
    <p> Data: {date} </p>
 
  </div>
</div>


      <div class="grid  lg:grid-cols-3 xmd:grid-cols-3 md:grid-cols-3 xsm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1  gap-6 w-full
       lg:px-52 xmd:px-16 md:px-16  xsm:px-12 sm:px-8 xl:px-5 py-10 2xl:px-3 ">
        {/* {data?.map((item) => {

          return <>
            <div class="relative mx-auto w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <a class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div class="shadow p-4 rounded-lg bg-white">
                  <div class="flex justify-center relative rounded-lg overflow-hidden h-58">
                    <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                      <div class="absolute inset-0 bg-black opacity-10"></div>
                      <img src={`http://193.203.162.218:4200/uploads/${item.carImg}`} />
                    </div>
                  </div>

                  <div class="mt-4">
                    <h2 class="font-medium text-[20px] text-gray-800 text-center " >
                      {item.car_name}
                    </h2>
                    <div className='px-5 py-5'>
                      <div className='grid grid-cols-2 space-x-8'>
                        <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                          Total KM : {item.totalKm}
                        </p>
                        <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                          Base Fare : {item.baseFare}
                        </p>

                      </div>
                      <div className='grid grid-cols-2 space-x-8'>
                        <p class="mt-2 text-[15px] text-[#000] font-[600] line-clamp-1" >
                          Passenger: {item.pessenger}

                        </p>
                        <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                          Bags: {item.bags}

                        </p>
                      </div>
                      <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                        State Tax: {item.stateTax}

                      </p>
                      <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                        Driver Allowance: {item.driverAllow}

                      </p>
                      <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                        Note: 100% Price Guarantee (One Way Trip)
                      </p>
                      <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                        Amount: {item.driverAllow == Number ? (Number(item.baseFare) + Number(item.tollTax) + Number(item.driverAllow))
                          : (Number(item.baseFare) + Number(item.tollTax))}
                      </p>
                    </div>
                  </div>
                  <div class="text-center bg-yellow mx-14 rounded text-[#000] font-[600]">
                    <button class="px-20 py-2" onClick={() => { handleSubmit(item) }}>Book Now</button>
                  </div>
                </div>
              </a>
            </div>
          </>
        })} */}

<div class="relative mx-auto w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <a class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div class="shadow p-4 rounded-lg bg-white">
                  <div class="flex justify-center relative rounded-lg overflow-hidden h-58">
                    <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                      <div class="absolute inset-0 bg-black opacity-10"></div>
                      <img src={img} />
                    </div>
                  </div>

                  <div class="mt-4">
                    
                    <div className='px-5 pb-5'>
                      <div className='grid grid-cols-2 space-x-8'>
                        <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                        Base Fare: ₹15/-
                        </p>
                      </div>
                      
                     
                      <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                      Driver Allowance: Included
                      </p>
                      
                    </div>
                  </div>
                  <div class="text-center bg-yellow mx-14 rounded text-[#000] font-[600]">
                    <button class="px-20 py-2" >Book Now</button>
                  </div>
                </div>
              </a>
            </div>


      </div>

    </div>

  </>

};

export default OneWayCarList;
