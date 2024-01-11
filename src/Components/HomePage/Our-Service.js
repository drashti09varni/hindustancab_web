import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar } from 'react-icons/ai';
import { FaCar, FaMoneyCheckAlt } from 'react-icons/fa';
import Drive from '../../Images/hindustanrides/car-parts-01.svg';
import KM from '../../Images/hindustanrides/car-parts-02.svg';
import petrol from '../../Images/hindustanrides/car-parts-03.svg';
import basic from '../../Images/hindustanrides/car-parts-04 (1).svg';
import pessenger from '../../Images/hindustanrides/car-parts-06.svg';
import { MdLuggage } from 'react-icons/md';

export default function Carousel() {
  const [data, setData] = useState([]);
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {

    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    centerMode: true, // Center mode enabled
    centerPadding: '0', // Adjust as needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const fatchData = async () => {
    try {
      const addRecordEndpoint = 'http://193.203.162.218:4200/api/v1/getCarCabDetail';

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();

      setData(jsonResponse?.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fatchData();
  }, []);

  const handleBooking = (item) => {
    window.location.href = `https://api.whatsapp.com/send?phone=917600060604&text=I am interested to book ${item?.carcab_name} from Hindustan Rides.`;
  };

  const goToPrev = () => {
    sliderRef.slickPrev();
  };

  const goToNext = () => {
    sliderRef.slickNext();
  };

  return (
    <div className="mx-auto lg:max-w-7xl xlg:max-w-6xl xmd:max-w-6xl md:max-w-3xl xsm:max-w-3xl slider:max-w-lg sm:max-w-lg  xl:max-w-sm  2xl:max-w-sm ">
      <center className='text-[35px] my-font font-mont font-[600] my-10  '>
        Explore Most Popular Cars
        <p className='font-mont text-[18px] font-[500]'>Choose Our Cab Collections</p>
      </center>
       {/* <div className="float-right mt-[-70px] mr-10 space-x-10 ">
  <button onClick={goToPrev} className='bg-yellow p-4 rounded-full'>
    <FaChevronLeft />
  </button>
  <button onClick={goToNext} className='bg-yellow p-4 rounded-full'>
    <FaChevronRight />
  </button>
</div>  */}
      <Slider ref={(slider) => setSliderRef(slider)} {...sliderSettings} >
        {data.map((item, index) => (

          <div key={item.id} className="my-1 px-2 sm:px-3 xl:px-4 mx-auto ">

            <article className="overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <a class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div class="shadow p-4 rounded-lg bg-white">

                  <div class="flex justify-center relative rounded-lg overflow-hidden h-58">
                    <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                      <div class="absolute inset-0 bg-black opacity-10"></div>
                      <img src={`http://193.203.162.218:4200/uploads/${item.carcabImg}`} />
                    </div>
                  </div>
                  <div className='text-left justify-left bg-[#fff] pb-5'>
                    <div className="justify-left">
                      <p className='text-[22px] font-[600] pt-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ml-5'>{item.carcab_name}</p>
                      <div className='flex space-x-1 ml-5'>
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                        <AiFillStar fill='#fcaf21' size={20} />
                      </div>
                      <div>

                        <ul className='m-[10px] flex justify-between mt-8'>
                          <li className='flex items-center'>
                            <img src={Drive} className='w-[20px]' alt='Auto' />
                            <p className='ml-1'>Auto</p>
                          </li>
                          <li className='flex items-center'>
                            <img src={KM} className='w-[20px]' alt='KM' />
                            <p className='ml-1'>{item.bus_rate}</p>
                          </li>
                          <li className='flex items-center'>
                            <img src={petrol} className='w-[20px]' alt='Petrol' />
                            <p className='ml-1'>Petrol</p>
                          </li>
                        </ul>

                        <ul className=' m-[10px] flex justify-between'>
                          <li className='flex items-center'>
                            <img src={basic} className='w-[20px]' alt='Basic' />
                            <p className='ml-1'>Basic</p>
                          </li>
                          <li className='flex items-center w-[60px]'>
                            <img src={pessenger} className='w-[20px]' alt='Pessenger' />
                            <p className='ml-1'>{item.pessenger}</p>
                          </li>
                          <li className='flex items-center w-[70px]'>
                            <MdLuggage className='mt-1' fill="#828282" size={24} />
                            <p className='ml-1'>{item.luggage}</p>
                          </li>
                        </ul>
                      </div>
                      <div className='ml-8 flex mt-5'>
                        <FaMoneyCheckAlt fill='#828282' size={24} className='' />
                        <p className='ml-2'>{item.extra}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center mt-8">
                      <button className='uppercase bg-yellow px-20 py-2 font-[600] rounded' onClick={() => { handleBooking(item) }}>Book now</button>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
}


