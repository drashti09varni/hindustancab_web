import React from 'react';
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';
import { Link } from 'react-router-dom';
import { toast, Zoom } from "react-toastify";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { useState } from 'react';

const initialValue = {
  name: "",
  phoneno: "",
  message: "",
  email:""
}

export default function ContactUs() {
  const [data, setData] = useState(initialValue);
  const [printData, setPrintData] = useState([]);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    })

  }

  const validateForm = () => {
    const errors = {};
  
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
  
    if (!data.phoneno.trim()) {
      errors.phoneno = "Phone number is required";
    }
  
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
  
    // Add more validations as needed
  
    return errors;
  };
  
  const isValidEmail = (email) => {
    // Add your email validation logic here
    // For a basic email format check, you can use a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
  };


  let handleSubmit = async (e) => {
    e.preventDefault();

     // Validate form fields
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

    try {
      const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/adddetail";

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();
      if (jsonResponse) {
        setData(initialValue);
        console.log("success data add");
        toast.success("Contact Add Successfully");
      }
    } catch (err) {
      toast.error("Please Enter valid");
    }
  };
  return <>
    <div className="content">
      <div className="photos">
        <div className="thumbnails">
          <img src={BgImage} />
          <div className="black"></div>
          <div className="title font-mont font-[700] ">
            <div>Contact Us</div>
            <div className='flex space-x-3 text-[15px] font-[500]'>
              <Link to="/"><p>Home</p></Link> <p>&gt;</p> <p>Contact Us</p></div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center my-5'>
      <div className='lg:w-[1000px] xmd:w-[1000px] md:w-[835px] xsm:w-[660px] sm:w-[472px] xl:w-[350px] 2xl:w-[343px] bg-[#f4f4f4] p-10'>
        <h1 className='text-[30px] font-[800] font-mont text-center'>Request A Call Back</h1>
        <p className='text-[15px] text-center font-mont mt-2'>Buzzway is one of the leading online cab booking platform in Rajkot(Gujrat) which offers riders a stop solution to book cabs of their choice for their Intercity as well as Local travel needs. We target to grip technology as a platform to remove the gap between Riders and Cab Partners to book and accept their travel bookings in Rajkot (India). One can easily book the cab of their choice in just 30 seconds and that too with affordable fares.Request a call back to connect with us.</p>
      </div>
      <div className='bg-[#144298] lg:w-[1250px] xmd:w-[1000px] md:w-[920px] xsm:w-[740px] sm:w-[470px] xl:w-[350px]  xl:w-[200px]'>
        <div className="flex flex-col items-center bg-gray-200 text-gray-800">
          <div className="lg:p-4 xmd:p-4 md:p-4 xsm:p-1 sm:p-4 w-full">
            <div className="grid lg:grid-cols-12 xmd:grid-cols-12 md:grid-cols-12 xsm:grid-cols-12 
                        sm:grid-cols-3
                        gap-2 p-5">
              <div className="lg:col-span-4 xmd:col-span-4 md:col-span-4 xsm:col-span-4 sm:col-span-12 xl:col-span-12 2xl:col-span-12">
                <div className="flex flex-row bg-white shadow-sm rounded p-4">
                  <div className="flex items-center justify-center bg-yellow flex-shrink-0 h-12 w-12  bg-blue-100 text-blue-500">
                    <BsFillTelephoneFill size={20} fill='#616163' />
                  </div>
                  <div className="flex flex-col ml-4">
                    <div className="text-[16px] text-[#fff] font-mont">Call Us</div>
                    <div className=" text-[#fff] font-mont text-[16px]">+91-9054865866</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 xmd:col-span-4 md:col-span-4 xsm:col-span-4 sm:col-span-12 xl:col-span-12 2xl:col-span-12">
                <div className="flex flex-row bg-white shadow-sm rounded p-4">
                  <div className="flex items-center justify-center bg-yellow flex-shrink-0 h-12 w-12  bg-blue-100 text-blue-500">
                    <MdEmail size={25} fill='#616163' />
                  </div>
                  <div className="flex flex-col  ml-4">
                    <div className="text-[16px] text-[#fff] font-mont">E-Mail Us</div>
                    <div className=" text-[#fff] font-mont mailto:text-[16px]">booking@buzzway.in</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 xmd:col-span-4 md:col-span-4 xsm:col-span-4 sm:col-span-12 xl:col-span-12 2xl:col-span-12">
                <div className="flex flex-row bg-white shadow-sm rounded p-4">
                  <div className="flex items-center justify-center bg-yellow flex-shrink-0 h-12 w-12  bg-blue-100 text-blue-500">
                    <HiLocationMarker size={25} fill='#616163' />
                  </div>
                  <div className="flex flex-col lg:w-[300px] xmd:w-[300px] md:w-[300px] xsm:w-[300px] sm:w-[180px] xl:w-[180px] 2xl:w-[180px]
                                    ml-4">
                    <div className="text-[16px] text-[#fff] font-mont">Address</div>
                    <div className=" text-[#fff] font-mont text-[16px]">Shakti Plaza, 15 A Jagnath Plot Opp. Hotel Imperial Palace Rajkot, Gujarat 360001</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#2766dd] lg:w-[1250px] xmd:w-[1000px] md:w-[920px] xsm:w-[740px] sm:w-[470px]  xl:w-[350px]  2xl:w-[315px]' >
        <div className="flex flex-col items-center bg-gray-200 text-gray-800">
          <form>
            <div className="p-4 w-full">
              <section className="text-gray-600 body-font relative lg:px-[92px]
                        xmd:px-[92px] md:px-[92px] xsm:px-[0px] sm:px-[0px] xl:px-[0px] 2xl:px-[0px]">
                <div className="mx-auto">
                  <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="lg:text-4xl  xmd:text-4xl  md:text-4xl xsm:text-4xl sm:text-3xl lg:text-4xl my-3 font-mont font-[800] text-[#fff]">
                      Send Your Query
                    </h1>
                  </div>
                  <div className="lg:w-[70%] xmd:w-[70%] md:w-[70%] xsm:w-[70%] sm:w-[100%] xl:w-[100%] 2xl:w-[100%] mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <input type="text" name="name" onChange={handleChange} value={data.name} required className="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder='Your Name' />
                        </div>
                        {errors.name && <span className="text-[#400000]">{errors.name}</span>}
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <input type="tel" name="phoneno" placeholder='Enter Contact Number' required value={data.phoneno} onChange={handleChange} className="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />
                        </div>
                        {errors.phoneno && <span className="text-[#400000]">{errors.phoneno}</span>}

                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <input type="email" name="email" placeholder='Email Adreess' value={data.email} onChange={handleChange} className="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] " required />
                        </div>
                        {errors.email && <span className="text-[#400000]">{errors.email}</span>}

                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <textarea
                            name="message"
                            placeholder='Your Message'
                            value={data.message}
                            onChange={handleChange}
                            className="w-full rounded py-5 px-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button type='button' className="flex mx-auto text-[] bg-yellow py-3 px-10 font-[600] text-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" onClick={handleSubmit}>Send Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
        width="67%" height="600" frameborder="0" ></iframe>
    </div>
  </>
}





//