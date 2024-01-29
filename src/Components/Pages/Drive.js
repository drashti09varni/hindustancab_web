import React, { useEffect, useState } from 'react';
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';
import { Link, json } from 'react-router-dom';
import img1 from '../../Images/Driver/business.png';
import img6 from '../../Images/Driver/car_icon.png';
import img5 from '../../Images/Driver/helpline.png';
import img4 from '../../Images/Driver/location.png';
import img2 from '../../Images/Driver/rs.png';
import img3 from '../../Images/Driver/time.png';
import tick from '../../Images/Driver/tick.png';
import drive_car from '../../Images/Driver/car_driver.png';
import { Country, State, City } from "country-state-city";
import Select from "react-select";
const InitialValue = {
    name:"",
    email:"",
    phone : "",
}

export default function Driver() {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [FormData, setFormData] = useState(InitialValue);
    const [finalData, setFinalData] = useState([]);


  

    const handleChange = (e) => {
        const name = e.target.name;
        setFormData({
            ...FormData,
            [name]: e.target.value,
        });
    };

    useEffect(()=>{})

    const SumitDataForm = () => {
        const driverData = {
            name: FormData.name || '', // Ensure these fields are not null
            email: FormData.email || '',
            phone: FormData.phone || '',
            country: selectedCountry?.name || '',
            state: selectedState?.name || '',
            city: selectedCity?.name || '',
        };
        setFinalData((prevData) => [...prevData, driverData]);
        console.log(finalData);
    };

    return <>
        <div className="content">
            <div className="photos">
                <div className="thumbnails">
                    <img src={BgImage} />
                    <div className="black"></div>
                    <div className="title font-mont font-[700] ">
                        <div className='font-mont font-[700] text-[#ffa633] '>Join as a Driver</div>
                        <div className='flex space-x-3 text-[15px] font-[500] ml-6 text-[#ffa633]'>
                            <Link to="/"><p>Home</p></Link> <p>&gt;</p> <p>Join as a Driver</p></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='max-w-6xl mx-auto my-10'>
            <div className='grid lg:grid-cols-2  xmd:grid-cols-2 md:grid-cols-2  xsm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
                <div className='px-6 leading-7 font-mont w-[100%]'>

                    <h1 className='text-[35px] font-[700] py-4'>Join Hindustanrides Taxi service</h1>
                    <h3 className='text-[31px] mt-[-5px] font-[500]'>Start Earning Now !!!</h3>
                    <h4 className='text-[25px] mt-[5px] font-[500]'>By Attaching Your Car with Hindustanrides</h4>
                    <p className='py-3 text-[15px] font-[500] text-[#585B5F]'>
                        Increase you’re earning Attach your car and make the most of your resources, avail the best offers in the industry, experience the cutting edge technology and start earning bigger than ever of course with the largest growing network of active riders. Here we believe in camaraderie, we believe in sharing that's why we can offer the best. And we are proudly doing the same. If you have a car/taxi and you want to earn big amount, what are you waiting for! Let's go hand in hand.
                    </p>
                    <h2 className='text-[28px] mt-[5px] font-[600] mb-3 font-mont'>Cash out fast in your account</h2>
                    <p className='py-3 text-[15px] font-[500] text-[#585B5F]'>It’s easy to get paid. All you need is a bank account. Your earnings are transferred every week I your account
                        <p>If your customer payment in cash With cash payment, you get paid immediately after you complete a trip. The app will show the amount to collect from your customer and calculate fees that you owe to Hindustanrides</p>
                    </p>
                </div>

                <div className="flex justify-center items-center lg:w-[85%] xmd:w-[85%] md:w-[85%] xsm:w-[85%] sm:w-[97%] 
                xl:w-[98%] 2xl:w-[98%]
                lg:mt-[-100px] xmd:mt-[-100px] md:mt-[-100px] xsm:mt-[-100px] sm:mt-[10px]">
                    <div className="w-full bg-yellow rounded shadow-2xl px-8 py-4 m-4">
                        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-2 font-mont">Get in touch</h1>
                        <form>
                            <div className="flex flex-col mb-3">
                                <input className=" py-5  placeholder-text-[20px] border-none  px-3 " type="text" name="name" id="first_name"
                                  value={FormData?.name}  placeholder='Enter Your Name' onChange={handleChange} />

                            </div>

                            <div className="flex flex-col mb-3">
                                <input className=" py-5 placeholder-[20px] border-none px-3 " type="email" name="email" 
                                id="email" placeholder='Enter Your E-Mail' value={FormData?.email}  onChange={handleChange}  />
                            </div>
                            <div className="flex flex-col mb-3">
                                <input className=" py-5  placeholder-[20px] border-none  px-3 " type="text" name="phone" 
                                id="phone" placeholder='Enter Your Phone'  value={FormData?.phone}  onChange={handleChange} />
                            </div>
                            <div className="flex flex-col mb-3">
                                <Select className="placeholder-[20px] border-none pb-4 " placeholder="Enter Your Country"
                                    options={Country.getAllCountries()} 
                                    getOptionLabel={(options) => {
                                        return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                        return options["name"];
                                    }}
                                    value={selectedCountry}
                                    onChange={(item) => {
                                        setSelectedCountry(item);
                                    }}
                                />
                                <Select className="placeholder-[20px] border-none pb-4" placeholder="Enter Your State"
                                    options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                                    getOptionLabel={(options) => {
                                        return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                        return options["name"];
                                    }}
                                    value={selectedState}
                                    onChange={(item) => {
                                        setSelectedState(item);
                                    }}
                                />
                                <Select className="placeholder-[20px]  pb-4 " placeholder="Enter Your City"
                                    options={City.getCitiesOfState(
                                        selectedState?.countryCode,
                                        selectedState?.isoCode
                                    )}
                                    getOptionLabel={(options) => {
                                        return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                        return options["name"];
                                    }}
                                    value={selectedCity}
                                    onChange={(item) => {
                                        setSelectedCity(item);
                                    }}
                                />
                            </div>

                            <center>
                                <button type='button' className='uppercase bg-[#2766dd] py-2 px-5 rounded-3xl text-[#fff] font-[600]' 
                                onClick={SumitDataForm}>
                                    Send Now</button> </center>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center my-10 bg-[#f3f3f3] ">
            <div>
                <h1 className='lg:text-[30px] xmd:text-[30px] md:text-[30px] xsm:text-[25px] xl:text-[25px] pl-5
                 py-10 font-[700] font-mont'
                >For More in to join Hindustanrides Cab Call @ +91-9054865866</h1>
            </div>

            <h2 className='lg:text-[30px] xmd:text-[30px] md:text-[30px] xsm:text-[25px] xl:text-[20px]
                 py-10 font-[700] font-mont ' >Freedom From Work Daily Payments</h2>
            <p className='text-[20px] font-[500] font-mont'>are just a few reasons why our partner love us</p>


            <div className='grid lg:grid-cols-3 xmd:grid-cols-3 md:grid-cols-3 xsm:grid-cols-3 sm:grid-cols-1
             lg:gap-32 py-14 xmd:gap-10 xmd:px-10 md:gap-8 md:px-10 xsm:gap-10 sm:gap-10 xsm:px-10 xl:px-10 2xl:px-10
             xl:gap-10 2xl:gap-10'>
                <div className="flex flex-col items-center bg-[#fff]  p-5">
                    <img src={img1} className='p-1 h-[60%]' />
                    <p className='font-[700] text-[20px] text-center'>Start of Business Same Day</p>
                </div>
                <div className="flex flex-col items-center  bg-[#fff]  p-5">
                    <img src={img2} />
                    <p className='font-[700] text-[20px] text-center'>Daily Payments 365 Days</p>
                </div>
                <div className="flex flex-col items-center bg-[#fff]  p-5">
                    <img src={img3} />
                    <p className='font-[700] text-[20px] text-center'>Choose Your Own Working Hoursy</p>
                </div>
                <div className="flex flex-col items-center bg-[#fff]  p-5">
                    <img src={img4} />
                    <p className='font-[700] text-[20px] text-center'>Choose from 65+ Cities to Work in</p>
                </div>
                <div className="flex flex-col items-center bg-[#fff]  p-5">
                    <img src={img5} />
                    <p className='font-[700] text-[20px] text-center'>24*7 Helpline For Your Support</p>
                </div>
                <div className="flex flex-col items-center bg-[#fff]  p-5">
                    <img src={img6} />
                    <p className='font-[700] text-[20px] text-center'>Get your booking your way home</p>
                </div>
            </div>
        </div>
        <div className='grid lg:grid-cols-2 xmd:grid-cols-2 md:grid-cols-2 xsm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
            <div className='lg:px-44 xmd:px-10 md:px-10 xsm:px-5 sm:px-5 xl:px-5 2xl:px-5'>
                <h1 className='lg:text-[33px] xmd:text-[33px] md:text-[33px] xsm:text-[25px] font-[800] 
                font-mont py-5 sm:text-[25px]'>Documents Required</h1>
                <div className='flex lg:space-x-20 xmd:space-x-20 md:space-x-20 xsm:space-x-2 sm:space-x-10 xl:space-x-2 2xl:space-x-10'>
                    <img src={tick} className='w-[60px] h-[65px]' />
                    <div>
                        <h1 className='text-[25px] font-[700] font-mont py-2'>Driver Documents</h1>
                        <ul className="number-circle-list flex flex-col">
                            <li className="number-circle-list--list-item text-[#000]"> Pancard </li>
                            <li className="number-circle-list--list-item  text-[#000]"> Cancelled Cheque or Passbook </li>
                            <li className="number-circle-list--list-item  text-[#000]"> Aadhar Card </li>
                            <li className="number-circle-list--list-item  text-[#000]"> Address Proof </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex lg:space-x-20 xmd:space-x-20 md:space-x-20 xsm:space-x-2 sm:space-x-10'>
                    <img src={tick} className='w-[60px] h-[65px]' />
                    <div>
                        <h1 className='text-[25px] font-[700] font-mont py-2'>Car Documents</h1>
                        <ul className="number-circle-list flex flex-col">
                            <li className="number-circle-list--list-item text-[#000]"> Vehicle RC </li>
                            <li className="number-circle-list--list-item  text-[#000]"> Vehicle Permit </li>
                            <li className="number-circle-list--list-item  text-[#000]"> Vehicle Insurance </li>
                        </ul>
                    </div>
                </div>

            </div>
            <img src={drive_car} className='lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden' />
        </div>
        <div className='flex flex-col items-center justify-center my-14 bg-[#f3f3f3]'>
            <div className='py-5 text-center'>
                <h1 className='text-[32px] font-mont font-[800]'>Our Drivers</h1>
                <p className='text-[22px] font-[600] font-mont'>Why They Love US</p>
            </div>
        </div>
    </>
}