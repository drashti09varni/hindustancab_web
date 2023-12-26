import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { BiTimeFive, BiSolidDirectionRight } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';

const RoundTripCarList = () => {
  const [showModal, setShowModal] = React.useState(false);
  const location = useLocation();
  const { distance, StartDate,EndDate, Time, travelTime, address_first, address_sec } = location.state;

  // Initialize state to hold an array of trip data objects
  const [tripData, setTripData] = useState([]);
  console.log(distance);

  const swift_price = distance * 24;
  const swift_Car_price = swift_price.toFixed(2);

  const ertiga_price = distance * 28;
  const ertiga_Car_price = ertiga_price.toFixed(2);


  const crysta_price = distance * 38;
  const crysta_Car_price = crysta_price.toFixed(2);




  const swift_data = [
    {
      car_img: "https://www.buzzway.in/uploads/Sedanhdpi.jpg",
      car_name: "Swift Dzire Or Similar (4+1)",
      car_price: swift_Car_price
    }
  ]

  const Ertiga_data = [
    {
      car_img: "https://www.buzzway.in/uploads/SUVhdpi.jpg",
      car_name: "Maruti Suzuki Ertiga Or Similar (6+1))",
      car_price: ertiga_Car_price
    }
  ]
  const Crysta_data = [{
    car_img: "https://www.buzzway.in/uploads/New_innova.jpg",
    car_name: "Toyota Innova Crysta (6+1)",
    car_price: crysta_Car_price
  }]





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
    
    <div className='flex flex-col justify-center items-center'>

      {/* header */}
      <div className='grid lg:grid-cols-5  xmd:grid-cols-5  md:grid-cols-5  xsm:grid-cols-3  sm:grid-cols-2
      xl:grid-cols-2 2xl:grid-cols-1 lg:gap-14 xmd:gap-14 md:gap-14 xsm:gap-10 sm:gap-10 xl:gap-10 2xl:gap-10 border border-[#dcdcdc] px-1 m-6 py-2 
      shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-auto'>
        <div >
          <div className='flex'>
            <HiLocationMarker size={25} />
            <p className='ml-2 font-mont'>Booking Type</p>
          </div>
          <p className='ml-8 text-[13px] mt-[-3px] font-light text-[#212529]'>Rounded Trip Usage</p>
        </div>
        <div >
          <div className='flex'>
            <MdDateRange size={25} />
            <p className='ml-2 font-mont text-[#212529]'>Pick-up-Date & Time</p>
          </div>
          <p className='ml-8 text-[13px] mt-[-3px] font-light ' >{StartDate} &nbsp; to &nbsp;{EndDate} </p>
        </div>
        <div >
          <div className='flex'>
            <BiTimeFive size={25} />
            <p className='ml-2 font-mont text-[#212529]'>Duration</p>
          </div>
          <p className='ml-8 text-[13px] mt-[-3px] font-light' >{travelTime}</p>
        </div>
        <div >
          <div className='flex'>
            <BiSolidDirectionRight size={25} />
            <p className='ml-2 font-mont font-normal text-[#212529]'>Trip Type</p>
          </div>
          <p className='ml-8 text-[13px] mt-[-3px] font-light'>Rounded-Trip</p>
        </div>
        <div>
          <button className='bg-yellow uppercase px-8 py-2 rounded-3xl'>Modify</button>
        </div>
      </div>

      {/* router location from and to */}
      <div className='border border-[#dcdcdc] px-1 m-6 py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-[-5px]  w-auto'>
        <p>Route: {address_first.address} -&gt; {address_sec.address} &nbsp; </p>
        <p></p>
      </div>


      {/* all cards car */}
      <div className='grid lg:grid-cols-5 xmd:grid-cols-5 md:grid-cols-5 xsm:grid-cols-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-1 
      lg:gap-10 xmd:gap-10  md:gap-10  xsm:gap-0 sm:gap-0 xl:gap-0  2xl:gap-0  border border-[#dcdcdc]  m-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-auto
      lg:px-0 xmd:px-0 md:px-0 xsm:px-0 sm:px-0 xl:px-4 2xl:px-0'>
        <div className='col-span-1 xl:justify-self-center'>
          <img src={swift_data[0].car_img} />
        </div>

        <div className='col-span-1  py-2 lg:w-[145px] xmd:w-[145px] md:w-[145px]  xl:justify-self-center xsm:w-[245px] sm:w-[220px]  xl:w-[245px] 2xl:w-[245px] '>
          <h2 className='text-[#144298] text-[18px] font-[700] '>{swift_data[0].car_name}</h2>
          <div className='flex gap-2'>
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
          </div>
          <h5 className='text-[14px]'>Wagon R Or Similar <br /> (4+1)</h5>
          <h5 className='text-[14px]'>(Hatchback)</h5>
        </div>

        <div className='py-2 lg:col-span-2 xmd:col-span-2 md:col-span-2 xsm:col-span- sm:col-span-1 xl:col-span-1 2xl:col-span-1 
        lg:ml-0 xmd:ml-0 md:ml-0 xsm:ml-5 sm:ml-3'>
          <p>Facilities:</p>
          <div className='flex gap-8'>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/water.png' />
              <p className='text-[11px]'>Water Bottle</p>
            </div>

            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/on-time.png' />
              <p className='text-[11px]'> On Time Guarantee</p>
            </div>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/GST.png' />
              <p className='text-[11px]'> Invoice Gst</p>
            </div>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/sanitizer.png' />
              <p className='text-[11px]'> Sanitized Cab</p>
            </div>

          </div>
        </div>

        <div className='py-5  bg-[#d1dfff] lg:w-[170px] xmd:w-[170px] md:w-[170px] xsm:w-[170px] sm:w-[170px] xl:w-[290px] 2xl:w-[170px] justify-self-end text-center col-span-1'>

          <p className='text-[22px] font-[700] font-mont '>₹  {swift_data[0].car_price} </p>
          <button className='bg-yellow py-1 px-6 rounded-3xl my-2 text-[#144298] font-[600]'>book now</button>
          <p className='font-mont text-[14px] py-1  text-[#144298]'>Fare Summary &gt;&gt;</p>
        </div>


      </div>

      <div className='grid lg:grid-cols-5 xmd:grid-cols-5 md:grid-cols-5 xsm:grid-cols-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-1 
      lg:gap-10 xmd:gap-10  md:gap-10  xsm:gap-0 sm:gap-0 xl:gap-0  2xl:gap-0  border border-[#dcdcdc]  m-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-auto
      lg:px-0 xmd:px-0 md:px-0 xsm:px-0 sm:px-0 xl:px-4 2xl:px-0'>
        <div className='col-span-1 xl:justify-self-center'>
          <img src={Ertiga_data[0].car_img} />
        </div>

        <div className='col-span-1  py-2 lg:w-[145px] xmd:w-[145px] md:w-[145px]  xl:justify-self-center xsm:w-[245px] sm:w-[220px]  xl:w-[245px] 2xl:w-[245px] '>
          <h2 className='text-[#144298] text-[18px] font-[700] '>{Ertiga_data[0].car_name}</h2>
          <div className='flex gap-2'>
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
          </div>
          <h5 className='text-[14px]'>Wagon R Or Similar <br /> (4+1)</h5>
          <h5 className='text-[14px]'>(Hatchback)</h5>
        </div>

        <div className='py-2 lg:col-span-2 xmd:col-span-2 md:col-span-2 xsm:col-span- sm:col-span-1 xl:col-span-1 2xl:col-span-1 
        lg:ml-0 xmd:ml-0 md:ml-0 xsm:ml-5 sm:ml-3'>
          <p>Facilities:</p>
          <div className='flex gap-8'>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/water.png' />
              <p className='text-[11px]'>Water Bottle</p>
            </div>

            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/on-time.png' />
              <p className='text-[11px]'> On Time Guarantee</p>
            </div>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/GST.png' />
              <p className='text-[11px]'> Invoice Gst</p>
            </div>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/sanitizer.png' />
              <p className='text-[11px]'> Sanitized Cab</p>
            </div>

          </div>
        </div>

        <div className='py-5  bg-[#d1dfff] lg:w-[170px] xmd:w-[170px] md:w-[170px] xsm:w-[170px] sm:w-[170px] xl:w-[290px] 2xl:w-[170px] justify-self-end text-center col-span-1'>

          <p className='text-[22px] font-[700] font-mont '>₹  {Ertiga_data[0].car_price} </p>
          <button className='bg-yellow py-1 px-6 rounded-3xl my-2 text-[#144298] font-[600]'>book now</button>
          <p className='font-mont text-[14px] py-1  text-[#144298]'>Fare Summary &gt;&gt;</p>
        </div>


      </div>


      <div className='grid lg:grid-cols-5 xmd:grid-cols-5 md:grid-cols-5 xsm:grid-cols-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-1 
      lg:gap-10 xmd:gap-10  md:gap-10  xsm:gap-0 sm:gap-0 xl:gap-0  2xl:gap-0  border border-[#dcdcdc]  m-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-auto
      lg:px-0 xmd:px-0 md:px-0 xsm:px-0 sm:px-0 xl:px-4 2xl:px-0'>
        <div className='col-span-1 xl:justify-self-center'>
          <img src={Crysta_data[0].car_img} />
        </div>

        <div className='col-span-1  py-2 lg:w-[145px] xmd:w-[145px] md:w-[145px]  xl:justify-self-center xsm:w-[245px] sm:w-[220px]  xl:w-[245px] 2xl:w-[245px] '>
          <h2 className='text-[#144298] text-[18px] font-[700] '>{Crysta_data[0].car_name}</h2>
          <div className='flex gap-2'>
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
            <AiFillStar fill="#fcaf21" />
          </div>
          <h5 className='text-[14px]'>Wagon R Or Similar <br /> (4+1)</h5>
          <h5 className='text-[14px]'>(Hatchback)</h5>
        </div>

        <div className='py-2 lg:col-span-2 xmd:col-span-2 md:col-span-2 xsm:col-span-1 sm:col-span-1 xl:col-span-1 2xl:col-span-1 
        lg:ml-0 xmd:ml-0 md:ml-0 xsm:ml-5 sm:ml-3'>
          <p>Facilities:</p>
          <div className='flex gap-8'>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/water.png' />
              <p className='text-[11px]'>Water Bottle</p>
            </div>

            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/on-time.png' />
              <p className='text-[11px]'> On Time Guarantee</p>
            </div>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/GST.png' />
              <p className='text-[11px]'> Invoice Gst</p>
            </div>
            <div>
              <img src='https://www.buzzway.in/assets/frontuser/images/icons/sanitizer.png' />
              <p className='text-[11px]'> Sanitized Cab</p>
            </div>

          </div>
        </div>

        <div className='py-5 bg-[#d1dfff] lg:w-[170px] xmd:w-[170px] md:w-[170px] xsm:w-[170px] sm:w-[170px] xl:w-[290px] 2xl:w-[170px] justify-self-end text-center col-span-1'>

          <p className='text-[22px] font-[700] font-mont '>₹  {Crysta_data[0].car_price} </p>
          <button className='bg-yellow py-1 px-6 rounded-3xl my-2 text-[#144298] font-[600]'>book now</button>
          <p className='font-mont text-[14px] py-1  text-[#144298]'>Fare Summary &gt;&gt;</p>
        </div>

      </div>

      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
    </div>

  </>

};

export default RoundTripCarList;
