import React from 'react';
import Choose1 from '../../Images/hindustanrides/choose-1.svg';
import Choose2 from '../../Images/hindustanrides/choose-2.svg';
import Choose3 from '../../Images/hindustanrides/choose-3.svg';

export default function WhyChooseUs() {
  return (
   
      <div className="text-center py-24">
      <h1 className="my-font text-4xl ">Why Choose Us</h1>
      <p className='mb-14'>We Ensure Your Happy To Cab Journey</p>
      <center>
      <div className="grid grid-cols-1 lg:grid-cols-3 xlg:grid-cols-3 xmd:grid-cols-3 md:grid-cols-3 xsm:grid-cols-3
      sm:grid-cols-1 justify-center
       items-center lg:gap-8  xlg:gap-8 xmd:gap-2 md:gap-2 xsm:gap-2 sm:gap-10 lg:max-w-7xl xlg:max-w-6xl xmd:max-w-6xl md:max-w-5xl xsm:max-w-5xl slider:max-w-2xl 
       sm:max-w-lg xl:max-w-sm 2xl:max-w-sm">

       <center><div className='lg:w-[100%] xlg:w-[100%] xmd:w-[100%] md:w-[100%] xsm:w-[100%] sm:w-[60%] h-[100%] text-center hover:bg-black 
        p-2 rounded-xl hover:text-[#fff] font-[500]
        lg:bg-transparent xlg:bg-transparent  xmd:bg-transparent  md:bg-transparent  xsm:bg-transparent  sm:bg-black xl:bg-black 2xl:bg-black
        lg:text-black xlg:text-black xmd:text-black md:text-black xsm:text-black sm:text-[#fff] xl:text-[#fff] 2xl:text-[#fff]'>
          <div className="mx-2 rounded-xl flex flex-col items-center p-4 ">
            <div className='bg-yellow w-full py-5 rounded-xl flex justify-center items-center'>
              <img src={Choose1} alt="Choose1" />
            </div>
            <p className='mt-3 text-[22px] font-[700] mb-2'>Easy & Fast Booking</p>
            <p>Completely carinate e business testing process whereas fully researched customer service.
              Globally extensive content with quality.</p>
            <p className='text-[22px] mt-3 font-mont font-[600] '>32 VEHICLES</p>
          </div>
        </div></center> 

        <center><div className='lg:w-[100%] xlg:w-[100%] xmd:w-[100%] md:w-[100%] xsm:w-[100%] sm:w-[60%] h-[100%] text-center hover:bg-black 
        p-2 rounded-xl hover:text-[#fff] font-[500]
        lg:bg-transparent xlg:bg-transparent xmd:bg-transparent md:bg-transparent xsm:bg-transparent  sm:bg-black xl:bg-black 2xl:bg-black
        lg:text-black xlg:text-black xmd:text-black md:text-black xsm:text-black sm:text-[#fff] xl:text-[#fff] 2xl:text-[#fff]'>
          <div className="mx-2 rounded-xl flex flex-col items-center p-4 ">
            <div className='bg-[#127384] w-full py-5 rounded-xl flex justify-center items-center'>
              <img src={Choose2} alt="Choose2" />
            </div>
            <p className='mt-3 text-[22px] font-[700] mb-2'>Many Pickup Location</p>
            <p>Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective hindustanrides Perfect time Perfect palce.</p>
            < p className='text-[22px] mt-3 font-mont font-[600]'>
              10K+ PEOPLE SERVED</p>  
          </div>
        </div></center>

       <center><div className='lg:w-[100%] xlg:w-[100%] xmd:w-[100%] md:w-[100%] xsm:w-[100%] sm:w-[60%] h-[100%] text-center hover:bg-black 
        p-2 rounded-xl hover:text-[#fff] font-[500]
        lg:bg-transparent xlg:bg-transparent  xmd:bg-transparent  md:bg-transparent  xsm:bg-transparent  sm:bg-black xl:bg-black 2xl:bg-black
        lg:text-black xlg:text-black xmd:text-black md:text-black xsm:text-black sm:text-[#fff] xl:text-[#fff] 2xl:text-[#fff]'>
          <div className="mx-2 rounded-xl flex flex-col items-center p-4 ">
            <div className='bg-yellow w-full py-5 rounded-xl flex justify-center items-center'>
              <img src={Choose3} alt="Choose3" />
            </div>
            <p className='mt-3 text-[22px] font-[700] mb-2'>Customer Satisfaction</p>
            <p>Globally user centric method interactive. Seamlessly revolutionize unique portals corporate collaboration is hindustanrides Perfect time Perfect palce.</p>
            <p className='text-[22px] mt-3 font-mont font-[600]'>160500 Km RIDE SERVED</p>
          </div>
        </div>
        </center>
      </div>
      </center>
    </div>
   
  );
}
