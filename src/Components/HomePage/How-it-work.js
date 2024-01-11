import React, { useEffect } from 'react';
import Images_howWork from '../../Images/how-it-work.webp';
import step1 from '../../Images/step1.webp';
import step2 from '../../Images/step2.webp';
import step3 from '../../Images/step3.webp';
import G_pay_btn from '../../Images/g_pay_btn.webp';
import { Element } from 'react-scroll';

export default function HowItWork() {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade');
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    element.style.opacity = '1';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="text-gray-700 text-base">
            <div id="some-box" className="bg-white font-sans">
                <div className=' lg:mx-auto xmd:mx-auto md:mx-10 xsm:mx-10 max-w-screen-md '>
                    <h1 className='text-[35px]  font-[600] text-animation fade text-center my-font mb-16'>How It Works </h1>
                         <div className="grid lg:grid-cols-3 xmd:grid-cols-3 md:grid-cols-3 xsm:grid-cols-3 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1   text-center gap-16">
                        <div className="flex flex-col items-center lg:px-0 xlg:px-0 xmd:px-0 md:px-0 xsm:px-0 sm:px-16 xl:px-10 2xl:px-2">
                            <div className=' flex items-center justify-center rounded-full border-2 border-dashed  border-[#127384]'>
                                <div className="bg-[#127384] p-4 m-2 rounded-full w-20">
                                    <img src='https://dreamsrent.dreamstechnologies.com/html/assets/img/icons/services-icon-01.svg' alt='Service Icon'  />
                                </div>
                            </div>
                            <h1 className='text-[19px] my-3 font-[600]'>1. Choose Locations</h1>
                            <p>Local, Outstation, Transfer or Oneway Drop simply select your trip type.</p>
                        </div>
                        <div className="flex flex-col items-center lg:px-0 xlg:px-0 xmd:px-0 md:px-0 xsm:px-0 sm:px-16 xl:px-10 2xl:px-2">
                        <div className=' flex items-center justify-center rounded-full border-2 border-dashed border-yellow'>
                                <div className="bg-yellow p-4 m-2 rounded-full w-20">
                                    <img src='https://dreamsrent.dreamstechnologies.com/html/assets/img/icons/services-icon-02.svg' alt='Service Icon'  />
                                </div>
                            </div>
                            <h1 className='text-[19px] my-3 font-[600]  '>2. Pick-Up Locations</h1>
                            <p>Choose from wide range of fleets that will suit your travel needs.</p>
                        </div>
                        <div className="flex flex-col items-center lg:px-0 xlg:px-0 xmd:px-0 md:px-0 xsm:px-0 sm:px-16 xl:px-10 2xl:px-2">
                        <div className=' flex items-center justify-center rounded-full border-2 border-dashed  border-[#127384]'>
                                <div className="bg-[#127384] p-4 m-2 rounded-full w-20">
                                    <img src='https://dreamsrent.dreamstechnologies.com/html/assets/img/icons/services-icon-03.svg' alt='Service Icon'  />
                                </div>
                            </div> <h1 className='text-[19px] my-3 font-[600]'>3. Book your Car</h1>
                            <p>Confirm your booking by securely Pay with flexible payment options.</p>
                        </div>
                    </div>

                </div>



            </div >
        </div >
    )
}
