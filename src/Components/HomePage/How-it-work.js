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
                    {/* <article className="row flex md:space-x-4 mt-10">

                        <div className="w-[130%] lg:py-4 xmd:py-4 md:py-4 xsm:py-1 sm:py-4 xl:py-4 2xl:py-4">

                            <div className="flex bg-white fade sidebox-animation-1  items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)]  my-10" >
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-[#205cce] ">
                                        <img alt="Placeholder Photo" className="absolute left-0 top-0 p-5 w-full h-full object-cover object-center transition duration-50" loading="lazy"
                                            src={step1} />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-[20px] font-[600] font-mont">Search Cab</p>
                                    <p className="text-sm mt-1 text-[#505050] ">Local, Outstation, Transfer or Oneway Drop simply select your trip type.</p>

                                </div>
                            </div>
                            <div className="flex bg-white fade sidebox-animation-2  items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-10" >
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-[#205cce]">
                                        <img alt="Placeholder Photo" className="absolute left-0 top-0 p-5  w-full h-full object-cover object-center transition duration-50"
                                            loading="lazy" src={step2} />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-[20px] font-[600] font-mont"> Select Car </p>
                                    <p className="text-[15px]  mt-1 font-mont text-[#505050]">Choose from wide range of fleets that will suit your travel needs.</p>

                                </div>
                            </div>
                            <div className="flex bg-white fade sidebox-animation-3 items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] " >
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-[#205cce]">
                                        <img alt="Placeholder Photo" className="absolute left-0 top-0 p-5  w-full h-full object-cover object-center transition duration-50"
                                            loading="lazy" src={step3} />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-[20px] font-[600] font-mont">Pay & Book</p>
                                    <p className="text-sm mt-1 text-[#505050]">Confirm your booking by securely Pay with flexible payment options.</p>

                                </div>
                            </div>
                            <div className='my-10 sidebox-animation-4 fade'>
                                <img src={G_pay_btn} className='w-[50%] h-[50%]' />
                            </div>
                        </div>

                        <div className="w-full mobile-animation w-[110%] relative border-white lg:mt-0 xmd:mt-0 md:mt-0 xsm:mt-8 sm:mt-0 xl:mt-0 2xl:mt-0">
                            <img src={Images_howWork} alt="Idea 2 Image" className="absolute  " />
                        </div>
                    </article> */}

                    <div className="grid grid-cols-3 text-center gap-16">
                        <div className="flex flex-col items-center">
                            <div className=' flex items-center justify-center rounded-full border-2 border-dashed  border-[#127384]'>
                                <div className="bg-[#127384] p-4 m-2 rounded-full w-20">
                                    <img src='https://dreamsrent.dreamstechnologies.com/html/assets/img/icons/services-icon-01.svg' alt='Service Icon'  />
                                </div>
                            </div>
                            <h1 className='text-[19px] my-3 font-[600]'>1. Choose Locations</h1>
                            <p>Local, Outstation, Transfer or Oneway Drop simply select your trip type.</p>
                        </div>
                        <div className="flex flex-col items-center">
                        <div className=' flex items-center justify-center rounded-full border-2 border-dashed border-yellow'>
                                <div className="bg-yellow p-4 m-2 rounded-full w-20">
                                    <img src='https://dreamsrent.dreamstechnologies.com/html/assets/img/icons/services-icon-02.svg' alt='Service Icon'  />
                                </div>
                            </div>
                            <h1 className='text-[19px] my-3 font-[600]  '>2. Pick-Up Locations</h1>
                            <p>Choose from wide range of fleets that will suit your travel needs.</p>
                        </div>
                        <div className="flex flex-col items-center">
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
