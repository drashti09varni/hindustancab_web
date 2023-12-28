import React from "react";
import carImage from '../../Images/hindustanrides/home_page_car.png';
import HeroForm from './HeroForm';
import AboutUs from './Home-About';
import OurService from './Our-Service';
import HowItWork from './How-it-work';
import Testimonial from './Testimonial';
import Memories from "./Memories";
import { FaThumbsUp } from "react-icons/fa";
import { BiSolidHandRight } from "react-icons/bi";
import WhyChooseUs from "./why-choose-us";
import VideoList from "./Video-list";


export default function HeroImage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section bg-dunes bg-cover bg-center mx-auto px-14 py-20 ">
             {/* <div className="grid grid-cols-2 gap-12">
          
          <div className="text-content">
            <div className="flex">
              <FaThumbsUp fill="#ffa633" className="mt-1" />
              <p className="ml-3 text-[22px]">100% Trusted car rental platform in the World </p>
            </div>
            <h1 className="lg:text-[62px] xsm:text-[33px] font-[700] text-black capitalize animation-1 my-font">
              Find Your Best
            </h1>
            <h1 className="animation-2 lg:text-[62px] xsm:text-[33px] my-font font-[700] text-[#ffa633] capitalize tracking-[1.3px] mt-[-25px]">
              Dream Car for Rental
            </h1>
            <p className='animation-3 lg:text-[30px] xsm:text-[18px] text-[#000] tracking-[2px] mt-[0px] font-mont'>
              Reliable & Safe Transparent
            </p>
          </div>

          
          <div className="image-content lg:w-[90%] xmd:w-[90%] md:w-[90%] xsm:w-[90%] relative right-12">
            <img src={carImage} alt="Image Description" className="w-full" />
          </div>
        </div> */}
<section class="px-1 py-10 bg-white md:px-0">
  <div class=" items-center max-w-7xl mx-auto ">
    <div class="flex flex-wrap items-center sm:-mx-3">
      <div class="w-full md:w-[48%]">
        <div class="w-full pb-6 sm:pr-5 lg:pr-0 md:pb-0">
        <div className="flex">
              <FaThumbsUp fill="#ffa633" className="mt-1" />
              <p className="ml-3 text-[22px] text-[#2F2F2F]">100% Trusted car rental platform in the World </p>
            </div>
          
            <p class="text-[62px] animation-1 my-font text-[#201F1D]">Find Your Best</p>
            <p class="text-[62px]  animation-2 my-font  mt-[-15px] text-yellow"> Dream Car for Rental.</p>
         <div className="my-5">
          <p class="mx-auto text-base text-[#2F2F2F] animation-3 sm:max-w-md lg:text-xl md:max-w-3xl ">Surat To Outstation Taxi Service Provider.</p>
         <p className="text-base text-[#2F2F2F] animation-3 sm:max-w-md lg:text-xl md:max-w-3xl mt-5">
          Book A Cab In 3 Easy Steps Reliable & Safe Transparent in Hindustan Rides PerfectTime, PerfectPlace .</p>
          </div>
          <a href="https://api.whatsapp.com/send?phone=917600060604"> <button className="flex space-x-5  text-[#2F2F2F] border-2 border- [#2F2F2F] rounded hover:border-yellow hover:bg-yellow
          py-2 px-7 font-[600] text-[20px]" >
             <p>Discover More</p><BiSolidHandRight className="mt-1"/>
          </button></a>
        </div>
      </div>
      <div class="w-full md:w-[52%]">
        <div class="w-full h-auto ">
        <img src={carImage} alt="Image Description" className="w-full animation-1" />
          </div>
      </div>
    </div>
  </div>
</section>
        {/* Hero form */}
       
      </div>
      <div className="mx-auto">
          <HeroForm />
        </div>
      {/* Other Sections */}
      <div className='how-it-works lg:block xmd:block md:block xsm:block sm:block xl:block 2xl:block'>
        <HowItWork />
      </div>
 
      <OurService />
      <AboutUs />
      <Testimonial />
      <WhyChooseUs/>
{/* <VideoList /> */}
      <Memories />
    </>
  );
}