import React from 'react';
import Choose1 from '../../Images/hindustanrides/choose-1.svg';
import Choose2 from '../../Images/hindustanrides/choose-2.svg';
import Choose3 from '../../Images/hindustanrides/choose-3.svg';

export default function WhyChooseUs() {
  return (
    <div className="text-center py-24">
      <h1 className="my-font text-4xl">Why Choose Us</h1>
      <p>We Ensure Your Happy To Cab Journey</p>
      <div className="flex justify-center mt-8 space-x-20">
        <div className='w-[400px] text-center hover:bg-black p-2 rounded-xl text-[#000] hover:text-[#fff] font-[500]'>
          <div className="mx-6 rounded-xl flex flex-col items-center p-4 ">
            <div className='bg-yellow w-full py-5 rounded-xl flex justify-center items-center'>
              <img src={Choose1} alt="Choose1" />
            </div>
            <p className='mt-3 text-[22px] font-[700] mb-2'>Easy & Fast Booking</p>
            <p>Completely carinate e business testing process whereas fully researched customer service.
              Globally extensive content with quality.</p>
            <p className='text-[22px] mt-3 font-mont font-[600] '>32 VEHICLES</p>
          </div>
        </div>

        <div className='w-[400px] text-center hover:bg-black p-2 rounded-xl text-[#000] hover:text-[#fff] font-[500]'>
          <div className="mx-6 rounded-xl flex flex-col items-center p-4 ">
            <div className='bg-[#127384] w-full py-5 rounded-xl flex justify-center items-center'>
              <img src={Choose2} alt="Choose1" />
            </div>
            <p className='mt-3 text-[22px] font-[700] mb-2'>Many Pickup Location</p>
            <p>Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective.</p>
            < p className='text-[22px] mt-3 font-mont font-[600]'>
              10K+ PEOPLE SERVED</p>
          </div>
        </div>

        <div className='w-[400px] text-center hover:bg-black p-2 rounded-xl text-[#000] hover:text-[#fff] font-[500]'>
          <div className="mx-6 rounded-xl flex flex-col items-center p-4 ">
            <div className='bg-yellow w-full py-5 rounded-xl flex justify-center items-center'>
              <img src={Choose3} alt="Choose1" />
            </div>
            <p className='mt-3 text-[22px] font-[700] mb-2'>Customer Satisfaction</p>
            <p>Globally user centric method interactive. Seamlessly revolutionize unique portals corporate collaboration is hindustanrides Perfect time Perfect palce.</p>
            <p className='text-[22px] mt-3 font-mont font-[600]'>160500 Km RIDE SERVED</p>
          </div>
        </div>

      </div>
    </div>
  );
}
