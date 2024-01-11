import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';
import { toast, Zoom } from "react-toastify";



export default function BookingForm() {

  const initialValue = {
    name: "",
    email: "",
    date: "",
    mobileno: "",
    message: ""
  }
  const location = useLocation();
  const { selectData } = location.state;

  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState(initialValue);
  const [addData, setAddData] = useState([]);
  
console.log(selectData);
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };


  // form submit.....
  let handleSubmit = async (e) => {
    e.preventDefault();

    setAddData({
      "name": formData.name,
      'email': formData.email,
      'mobileno': formData.mobileno,
      'message': formData.message,
      'date': selectedDate
    })


    const addRecordEndpoint = 'http://193.203.162.218:4200/api/v1/addBooking';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addData)
    }
    const response = await fetch(addRecordEndpoint, options);
    const jsonResponse = await response.json();
    
    console.log(jsonResponse);

    if (jsonResponse.status = "success") {
      toast.success(jsonResponse.message);
      setFormData(initialValue);
      setSelectedDate("");
      window.location.href = `https://api.whatsapp.com/send?phone=917600060604&text=Name : ${jsonResponse.result.name}
        ,Email : ${jsonResponse.result.email},
        Date : ${jsonResponse.result.date}, Message:${jsonResponse.result.message}, 
        From : Surat To : ${selectData?.city_name}, Vehical :${selectData?.car_name},
        Total KMs : ${selectData?.totalKm}, Base Fare: ${selectData?.baseFare},
        Toll Tax: ${selectData?.tollTax}, State Tax: ${selectData?.stateTax}, Driver Allowance: ${selectData?.driverAllow}, 
       Total Amount : ${selectData.driverAllow == Number ? (Number(selectData.baseFare) + Number(selectData.tollTax) + Number(selectData.driverAllow))
        : (Number(selectData.baseFare) + Number(selectData.tollTax))} , Passenger:${selectData?.pessenger}, Bags: ${selectData?.bags}
        , Note: 100% Price Guarantee (One Way Trip)`; 

    } else {
      toast.error("invalid please try again!!")
    }
  };

  return <>
    <div className="content">
      <div className="photos">
        <div className="thumbnails">
          <img src={BgImage} />
          <div className="black"></div>
          <div className="title font-mont font-[700] ">
            <div className='text-[#ffa633]'>Booking Form</div>
            <div className='flex space-x-3 text-[15px] font-[500] text-[#ffa633]'>
              <p>Car Booking</p></div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex lg:flex-row xmd:flex-row md:flex-row xsm:flex-row xsm:flex-row sm:flex-col xl:flex-col 2xl:flex-col md:items-center image-left md:justify-between bg-white p-4 rounded-md shadow-md mb-4 
    lg:px-40 xmd:px-5 md:px-5 xsm:px-5 lg:space-x-20 xmd:space-x-20 md:space-x-20 xsm:space-x-5">
      
      <div class="relative mx-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:w-[30%] xmd:w-[40%]  md:w-[40%] xsm:w-[50%]">
        <a class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
          <div class="shadow p-4 rounded-lg bg-white">
            <div class="flex justify-center relative rounded-lg overflow-hidden ">
              <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div class="absolute inset-0 bg-black opacity-10"></div>
                <img src={`http://193.203.162.218:4200/uploads/${selectData.carImg}`} />
              </div>
            </div>

            <div class="mt-4">
              <h2 class="font-medium text-[20px] text-gray-800 text-center " >
                {selectData.car_name}
              </h2>
              <div className='px-5 py-5'>
                <div className='grid grid-cols-2 space-x-8'>
                  <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                    Total KM : {selectData.totalKm}
                  </p>
                  <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                    Base Fare : {selectData.baseFare}
                  </p>

                </div>
                <div className='grid grid-cols-2 space-x-8'>
                  <p class="mt-2 text-[15px] text-[#000] font-[600] line-clamp-1" >
                    Passenger: {selectData.pessenger}
                  </p>

                  <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                    Bags: {selectData.bags}
                  </p>
                </div>
                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1">
                  State Tax: {selectData.stateTax}
                </p>

                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                  Driver Allowance: {selectData.driverAllow}
                </p>
                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                  Note: 100% Price Guarantee (One Way Trip)
                </p>

                <p class="mt-2 text-[15px]  text-[#000] font-[600]  line-clamp-1" >
                  Amount: {selectData.driverAllow == Number ? (Number(selectData.baseFare) + Number(selectData.tollTax) + Number(selectData.driverAllow))
                    : (Number(selectData.baseFare) + Number(selectData.tollTax))}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className='lg:w-[70%] xmd:w-[70%]  md:w-[70%] xsm:w-[70%]'>
        <h2 className='text-[30px] mb-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-[600] my-5'>
          Booking From Surat To {selectData?.city_name} With Maruti Swift Dzire / Similar
        </h2>

        <form>
          <div className='grid lg:grid-cols-2 xmd:grid-cols-2 md:grid-cols-2 xsm:grid-cols-2 sm:grid-cols-1 
          +xl:grid-cols-1 2xl:grid-cols-1 gap-8'>
            <div>
              <input type='text' className='w-full p-6' placeholder='Name *' name='name' onChange={handleChange} value={formData.name} />
            </div>
            <div>
              <input type="email" className='w-full p-6' placeholder='Email' name='email' onChange={handleChange} value={formData.email} />
            </div>
          </div>
          <div className='grid lg:grid-cols-2 xmd:grid-cols-2 md:grid-cols-2 xsm:grid-cols-2 sm:grid-cols-1 
          +xl:grid-cols-1 2xl:grid-cols-1 gap-8 mt-5'>
            <div>
              <input
                type='date'
                className='w-full pb-[37px]'
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div>
              <input type="mobile" className='w-full p-6' placeholder='Mobile No' name='mobileno' value={formData.mobileno} onChange={handleChange} />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-5'>
            <div>
              <textarea id="message" rows="6" class="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border 
              border-gray-300 " placeholder="Message" name='message' onChange={handleChange} value={formData.message} ></textarea>
            </div>
          </div>
          <div className='mt-8 flex justify-center'>
            <button type='button' className='bg-yellow px-10 font-[600] py-2 border-0 rounded-3xl' onClick={handleSubmit}

            >Submit
            </button>
            {/* <a   href="https://api.whatsapp.com/send?phone=918320655521&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND">
              Submit
              </a> */}
          </div>
        </form>
      </div>
    
    </div>




  </>

}
