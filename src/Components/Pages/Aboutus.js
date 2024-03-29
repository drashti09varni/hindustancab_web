import React, { useState, useEffect } from 'react';
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';
import img from '../../Images/hindustanrides/home-page-banner-1.jpg';
// import img from '../../Images/Aboutus/about.webp';
import Image1 from '../../Images/Aboutus/one-way.png';
import Image2 from '../../Images/Aboutus/high-rated.png';
import Image3 from '../../Images/Aboutus/highly.png';
import { Link } from 'react-router-dom';

export default function Aboutus() {
    const [fatchCity, setFatchCity] = useState();
    const handlefatchCity = async () => {
        try {
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/allCity";

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const response = await fetch(addRecordEndpoint, options);
            const jsonResponse = await response.json();
            setFatchCity(jsonResponse?.data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        handlefatchCity();
    }, []);
    console.log(fatchCity);
    return <>
        <div className="content">
            <div className="photos">
                <div className="thumbnails">
                    <img src={BgImage} />
                    <div className="black"></div>
                    <div className="title font-mont font-[700]">
                        <div className = "text-[#ffa633]">About Us</div>
                        <div className='flex space-x-3 text-[15px] font-[500] text-[#ffa633]'>
                            <Link to="/"><p>Home</p></Link> <p>&gt;</p> <p>About Us</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='grid lg:grid-cols-2  xmd:grid-cols-2 md:grid-cols-2  xsm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
                <div className='px-6 leading-7 font-mont'>

                    <h1 className='text-[25px] font-[700] py-4'>Welcome To Hindustan Cab</h1>
                    <p className='py-3 text-[15px] font-[500] text-[#585B5F]'>Welcome to Hindustan Cab Rental One of the oldest car hire companies with the youngest fleet of cars in West India. Hindustan Cab allows you to hire a rental car of your choice at an affordable rate. Book yourself a car with a chauffeur conveniently through online booking or on your smartphone. To make your travel memorable, rewarding & hassle-free, we offer high-quality service and a host of benefits to heighten your experience. </p>
                    <p className='py-3 text-[#585B5F] text-[16px] font-[500]' >We offer the best car rental service for the tourists who wish to make their holidays comfortable and unforgettable. We always make the effort to bring much more satisfaction, our clients plan out. You will get well maintained (brand new) cars and polite and responsible drivers with excellent communication skills to make your experience pleasant and smooth.</p>
                    <p className='py-3 text-[#585B5F] text-[16px] font-[500]'>Hindustan Cab Car rental provides you with the best road trip experience. We offer hourly, daily, weekly, and monthly plans to fulfil your business travel needs, weekends getaway needs, and leisure travel needs.</p>
                    <div>
                        <h2 className='text-[18px] font-[600] text-[#585B5F]'>Hindustan Cab Taxi and Car Rental Service Available in Major Cities of India</h2>
                        <p className='py-2 grid grid-cols-4'>
                            {fatchCity?.map((data) => (
                                    <p className='text-[#007bff]'> {data.city_name} </p>
                            ))}
                        </p>
                        <p className='py-3 text-[#585B5F] text-[16px] font-[500]'>Hire Taxi and Car Rental Service at an affordable price, through various cities of India.</p>
                    </div>
                </div>

                <div className='mt-24'>
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
      

    </>
}