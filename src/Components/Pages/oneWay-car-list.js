import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


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

    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative my-6 mx-auto w-[500px]">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#fff] outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-between p-3 border-b border-solid border-grey-700 rounded-t">
                <h3 className="text-2xl font-semibold text-center w-full">
                  Fare Summary
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-[#000]  h-6 w-6 text-2xl block ">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative  flex-auto">
                <p>Fare Breakup:</p>
                <div className='flex'>
                  <p >Estimated Amount</p>
                  <p className='ml-auto'>₹ 3299</p>
                </div>
                <div className='flex'>
                  <p>Covered Kms</p>
                  <p className='ml-auto'>280 Km
                  </p>
                </div>
                <div className='flex'>
                  <p>GST (5%)</p>
                  <p className='ml-auto'> ₹ 165
                  </p>
                </div>
                <div className='flex'>
                  <p>Total Cost</p>
                  <p className='ml-auto'> ₹ 3464
                  </p>
                </div>
              </div>
              <div>
                <h4> Additional Charges ( If any ):</h4>
                <ul className='list-disc'>
                  <li className='text-[#000]'>Usable Oneway Limit 280 Kms</li>
                  <li className='text-[#000]'>After 280 Extra Charges ₹. 11 Per KM</li>
                </ul>
              </div>
              <div>
                <h4>Inclusion :</h4>
                <ul className='list-disc'>
                  <li className='text-[#000]'>Driver, Vehicle and Fuel</li>
                  <li className='text-[#000]'>Toll Tax,State Tax, Driver Food & Stay charge</li>
                </ul>
              </div>
              <div>
                <h4>Exclusion :</h4>
                <ul className='list-disc'>
                  <li>Parking Charge, Airport Parking Charge</li>
                </ul>
              </div>
              <div>
                <h4>Notes :</h4>
                <ul className='list-disc'>
                  <li className='text-[#000]'>Kms & Timing will be charged from customer location</li><br />
                  <li className='text-[#000]'>Car shall not be used for local use in (City) after completion of one way duty.</li> <br />
                  <li className='text-[#000]'>In case of Booking wil be Cancelled then infrom to us before 24 Hrs in then Pickup Time</li> <br />
                  <li className='text-[#000]'>Toll Tax, Inter State Tax Are Included</li>
                </ul>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

      </>
    ) : null}



    <div className='h-[70px] bg-[#2766dd] '></div>
    <div className='h-[30px] bg-[#144298]'></div>
    <div className='flex flex-col justify-center '>

    <div className='flex justify-between lg:px-52 xmd:px-16 md:px-16 xsm:px-12 sm:px-8 pt-10 xl:px-5 2xl:px-3'>
  {/* Left side */}
  <h1 className='text-[40px] font-[600] items-start [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
    Surat To {city} Cabs
  </h1>

  {/* Right side */}
  <div className='flex text-[20px] font-[600] space-x-10 mt-[30px]'>
    <p> Data: {date} </p>
    <p> Time: {time} </p>
  </div>
</div>


      <div class="grid  lg:grid-cols-3 xmd:grid-cols-3 md:grid-cols-3 xsm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1  gap-6 w-full
       lg:px-52 xmd:px-16 md:px-16  xsm:px-12 sm:px-8 xl:px-5 py-10 2xl:px-3 ">
        {data?.map((item) => {

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
        })}




      </div>

    </div>

  </>

};

export default OneWayCarList;
