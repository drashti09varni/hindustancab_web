import React from 'react';
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';
import img from '../../Images/Aboutus/about.webp';
import Image1 from '../../Images/Aboutus/one-way.png';
import Image2 from '../../Images/Aboutus/high-rated.png';
import Image3 from '../../Images/Aboutus/highly.png';
import { Link } from 'react-router-dom';


export default function Aboutus() {
    return <>
        <div className="content">
            <div className="photos">
                <div className="thumbnails">
                    <img src={BgImage} />
                    <div className="black"></div>
                    <div className="title font-mont font-[700] ">
                        <div>About Us</div>
                        <div className='flex space-x-3 text-[15px] font-[500]'>
                            <Link to="/"><p>Home</p></Link> <p>&gt;</p> <p>About Us</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='grid lg:grid-cols-2  xmd:grid-cols-2 md:grid-cols-2  xsm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
                <div className='px-6 leading-7 font-mont'>

                    <h1 className='text-[25px] font-[700] py-4'>Welcome To Buzzway</h1>
                    <p className='py-3 text-[15px] font-[500] text-[#585B5F]'>Welcome to Buzzway Cab Rental One of the oldest car hire companies with the youngest fleet of cars in West India. Buzzway allows you to hire a rental car of your choice at an affordable rate. Book yourself a car with a chauffeur conveniently through online booking or on your smartphone. To make your travel memorable, rewarding & hassle-free, we offer high-quality service and a host of benefits to heighten your experience. </p>
                    <p className='py-3 text-[#585B5F] text-[16px] font-[500]' >We offer the best car rental service for the tourists who wish to make their holidays comfortable and unforgettable. We always make the effort to bring much more satisfaction, our clients plan out. You will get well maintained (brand new) cars and polite and responsible drivers with excellent communication skills to make your experience pleasant and smooth.</p>
                    <p className='py-3 text-[#585B5F] text-[16px] font-[500]'>Buzzway Car rental provides you with the best road trip experience. We offer hourly, daily, weekly, and monthly plans to fulfil your business travel needs, weekends getaway needs, and leisure travel needs.</p>
                    <div>
                        <h2 className='text-[18px] font-[600] text-[#585B5F]'>Buzzway Taxi and Car Rental Service Available in Major Cities of India</h2>
                        <p className='py-2'>
                            <strong className=''>
                                <a className='text-[#007bff]'> Ahmedabad </a> |
                                <a className='text-[#007bff]'> Rajkot </a> |
                                <a className='text-[#007bff]'> Mumbai </a> |
                                <a className='text-[#007bff]'> Vadodara  </a> |
                                <a className='text-[#007bff]'>  Surat </a> |
                                <a className='text-[#007bff]'>  Dwarka </a> |
                                <a className='text-[#007bff]'>  Somnath  </a> |
                                <a className='text-[#007bff]'>  Jamnagar  </a> |
                                <a className='text-[#007bff]'>  Bhavnagar  </a> |
                                <a className='text-[#007bff]'>  Morbi  </a> |
                                <a className='text-[#007bff]'> Aurangabad  </a> |
                                <a className='text-[#007bff]'>  Daman  </a> |
                                <a className='text-[#007bff]'>  Diu  </a> |
                                <a className='text-[#007bff]'>  Vapi </a> |
                                <a className='text-[#007bff]'> Shirdi </a> |
                                <a className='text-[#007bff]'>  Goa </a> |
                                <a className='text-[#007bff]'>  Nashik  </a> |
                                <a className='text-[#007bff]'>  Pune  </a>
                            </strong>
                        </p>
                        <p className='py-3 text-[#585B5F] text-[16px] font-[500]'>Hire Taxi and Car Rental Service at an affordable price, through various cities of India.</p>
                    </div>
                </div>

                <div>
                    <img src={img} />
                </div>
            </div>
        </div>
        <div className='bg-[#144298]'>
            <div className="max-w-6xl mx-auto py-10 flex justify-center items-center ">
                <div className="grid lg:grid-cols-3  xmd:grid-cols-3 md:grid-cols-3  xsm:grid-cols-3 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-10 lg:px-20 xmd:px-20 md:px-10 
                xsm:px-10 sm:px-10 xl:px-10 2xl:px-10">
                    <div className="text-center bg-[#fff] rounded-2xl py-3 px-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] about-1">
                        <img src={Image1} alt="Image 1" className="mx-auto" />
                        <h1 className="text-[22px] font-semibold mt-2">Assured Cab</h1>
                        <p className="text-[16px] text-gray-600">Special one way fares to just get dropped off at your destination.</p>
                    </div>
                    <div className="text-center bg-[#fff] rounded-2xl py-4 px-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] about-2">
                        <img src={Image2} alt="Image 2" className="mx-auto" />
                        <h1 className="text-[22px] font-semibold mt-2">Verified Driver and Chauffeur</h1>
                        <p className="text-[16px] text-gray-600">Experienced and polite drivers with well-serviced, comfortable cabs.</p>
                    </div>
                    <div className="text-center bg-[#fff] rounded-2xl py-3 px-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] about-3">
                        <img src={Image3} alt="Image 3" className="mx-auto" />
                        <h1 className="text-[22px] font-semibold mt-2">Breakdown Assistance 24*7</h1>
                        <p className="text-[16px] text-gray-600">Breakdown Assistance 24*7.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto my-10 flex justify-center items-center">
            <div className="text-center">
                <h1 className='text-[30px] font-[700] font-mont'>Why People Love</h1>
                <button className="text-[18px] vert-move bg-yellow text-[#144298] px-10 py-2 my-7 rounded-3xl font-[600] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">Know More</button>
            </div>
        </div>

    </>
}





