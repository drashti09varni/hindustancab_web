import React from 'react';
import about_img from '../../Images/hindustanrides/home-page-banner-1.jpg';


export default function AboutUs() {
    return (
        <>

            <div className="w-full bg-white pt-7 pb-7  ">
            <center><h1 className='my-font  text-[35px] py-10 pb-16'>What People say about us?</h1></center>
                <div className="box-border lg:flex  xlg:flex xmd:flex md:flex xsm:flex items-center content-center lg:px-8  xmd:px-8 md:px-8 xsm:px-2 sm:px-0 mx-auto leading-6 text-black border-0 border-gray-300 border-solid 
                 max-w-8xl lg:px-16">


                    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none
                     lg:mb-0 lg:w-[50%] xmd:w-[50%] xmd:w-[100%] xl:pl-10 lg:block xmd:block md:block xsm:block 
                     sm:hiddeb xl:hidden 2xl:hidden">
                        <img src={about_img} className="p-2 pl-6 lg:pl-16 lg:pr-20 about-img" />
                    </div>

                    <center><div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none
                     lg:mb-0 lg:w-[50%] xmd:w-[50%] xmd:w-[100%] xl:pl-10 lg:hidden xmd:hidden md:hidden xsm:hidden 
                     sm:block xl:block 2xl:block">
                        <img src={about_img} className="p-2 pl-6 lg:pl-16 lg:pr-20 about-img" />
                    </div></center>

                    <div className="box-border  w-full text-black border-solid lg:w-[40%]  xmd:w-[50%] xmd:w-[100%] 
                     md:pl-10 md:order-none lg:p-0 md:p-0 xsm:p-0 sm:px-16  xl:p-5 2xl:p-5 ">
                        <h2 className="m-0 lg:text-[2rem]  mb-[12px] pb-[5px] font-[600]  border-0 border-gray-300
                         lg:text-3xl md:text-2xl about-text font-mont">
                            About Hindustan Rides Taxi Service <br/> <p className='mt-1 text-[20px]'>[Perfect Time, Perfect Place].</p>

                        </h2>
                        <p className='text-[#292a2c] text-[18px] leading-7'>
                            <b>Hindustan Rides Taxi Service</b> is a premier transportation company that has been revolutionizing 
                            travel experiences in Surat, Gujarat, and beyond. Established and owned by the dynamic duo, 
                             <b>Mr.Ravi Hirapara</b> and <b> Mr.Sanjay Sahu</b>, our company has garnered a reputation for 
                             excellence, reliability, and unparalleled customer service.
                            </p>
                        <br />
                        <br /><p>Know More...</p>
                        <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                            </li><br/>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span></span> Speed past your competition
                            </li><br/>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                    <span className="text-sm font-bold">✓</span></span> Learn the top techniques
                            </li>
                        </ul>
                        <button className='bg-yellow px-6 py-2 rounded my-5 text-[18px] font-[600]'>Discover More </button>
                    </div>

                </div>

            </div>
        </>
    )
}
