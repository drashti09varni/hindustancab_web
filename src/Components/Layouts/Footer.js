// import React from 'react';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { HiMail } from 'react-icons/hi';
// import { FaHome } from 'react-icons/fa';
// import { ImFacebook, ImTwitter } from 'react-icons/im';
// import { GrLinkedinOption } from 'react-icons/gr';
// import { PiInstagramLogoBold } from 'react-icons/pi';
// import { TfiYoutube } from 'react-icons/tfi';


// export default function Footer() {
//     return (
//         <>
//             {/* <center className='flex justify-center bg-[#1a1f28] h-full pb-10 lg:mx-0 xmd:px-5 md:px-10 xsm:px-10 lg:block xmd:block md:block xsm:block sm:hidden xl:hidden 2xl:hidden'>
//                 <div>
//                     <center className=' text-[25px] text-[#fff] font-mont p-10'>Popular Routes</center>
//                     <div className='grid grid-cols-3 gap-9 font-mont leading-7 '>
//                         <div className='h-[250px] overflow-auto lg:w-[350px] xmd:w-[300px]  text-[#9e9e9e] '>
//                             <p>Morbi to Ahmedabad Airport Taxi...</p>
//                             <p>Jamnagar To Ahmedabad Hire Cab  ..</p>
//                             <p>Book One Way from Gandhidham ..</p>
//                             <p>Ahmedabad Hire taxi, Hire One ..</p>
//                             <p>Book One Way Cab Hire from Rajkot to ..</p>
//                             <p>One Way  Ahmedabad to Jodhpu ..</p>
//                             <p>One Way Ahmedabad to Porban ..</p>
//                             <p>One Way Ahmedabad to Godhra ..</p>
//                             <p>Book One Hire from Abu Road T ..</p>
//                             <p>Ahmedabad to Abu  One Way C ..</p>
//                             <p>Book One Way Cab Godhra To ..</p>
//                             <p>Vadodara To Vadodara T ..</p>
//                             <p>Book One Way Cab  Somnath to ..</p>

//                         </div>
//                         <div className='h-[250px] overflow-auto lg:w-[350px] xmd:w-[300px] text-[#9e9e9e]'>
//                             <p>Morbi to Ahmedabad Airport Taxi...</p>
//                             <p>Jamnagar To Ahmedabad Hire Cab  ..</p>
//                             <p>Book One Way from Gandhidham ..</p>
//                             <p>Ahmedabad Hire taxi, Hire One ..</p>
//                             <p>Book One Way Cab Hire from Rajkot to ..</p>
//                             <p>One Way  Ahmedabad to Jodhpu ..</p>
//                             <p>One Way Ahmedabad to Porban ..</p>
//                             <p>One Way Ahmedabad to Godhra ..</p>
//                             <p>Book One Hire from Abu Road T ..</p>
//                             <p>Ahmedabad to Abu  One Way C ..</p>
//                             <p>Book One Way Cab Godhra To ..</p>
//                             <p>Vadodara To Vadodara T ..</p>
//                             <p>Book One Way Cab  Somnath to ..</p>

//                         </div>
//                         <div className='h-[250px] overflow-auto lg:w-[350px] xmd:w-[300px] text-[#9e9e9e] '>
//                             <p>Morbi to Ahmedabad Airport Taxi...</p>
//                             <p>Jamnagar To Ahmedabad Hire Cab  ..</p>
//                             <p>Book One Way from Gandhidham ..</p>
//                             <p>Ahmedabad Hire taxi, Hire One ..</p>
//                             <p>Book One Way Cab Hire from Rajkot to ..</p>
//                             <p>One Way  Ahmedabad to Jodhpu ..</p>
//                             <p>One Way Ahmedabad to Porban ..</p>
//                             <p>One Way Ahmedabad to Godhra ..</p>
//                             <p>Book One Hire from Abu Road T ..</p>
//                             <p>Ahmedabad to Abu  One Way C ..</p>
//                             <p>Book One Way Cab Godhra To ..</p>
//                             <p>Vadodara To Vadodara T ..</p>
//                             <p>Book One Way Cab  Somnath to ..</p>

//                         </div>

//                     </div>

//                     <center className='my-5 text-[25px] text-[#fff] font-mont mt-12'>Our Other City Routes</center>
//                     <div className='grid grid-cols-3 gap-9 font-mont leading-7'>
//                         <div className='h-[250px] overflow-auto lg:w-[350px] xmd:w-[300px] text-[#9e9e9e] '>
//                             <p>Morbi to Ahmedabad Airport Taxi...</p>
//                             <p>Jamnagar To Ahmedabad Hire Cab  ..</p>
//                             <p>Book One Way from Gandhidham ..</p>
//                             <p>Ahmedabad Hire taxi, Hire One ..</p>
//                             <p>Book One Way Cab Hire from Rajkot to ..</p>
//                             <p>One Way  Ahmedabad to Jodhpu ..</p>
//                             <p>One Way Ahmedabad to Porban ..</p>
//                             <p>One Way Ahmedabad to Godhra ..</p>
//                             <p>Book One Hire from Abu Road T ..</p>
//                             <p>Ahmedabad to Abu  One Way C ..</p>
//                             <p>Book One Way Cab Godhra To ..</p>
//                             <p>Vadodara To Vadodara T ..</p>
//                             <p>Book One Way Cab  Somnath to ..</p>

//                         </div>
//                         <div className='h-[250px] overflow-auto lg:w-[350px] xmd:w-[300px] text-[#9e9e9e]'>
//                             <p>Morbi to Ahmedabad Airport Taxi...</p>
//                             <p>Jamnagar To Ahmedabad Hire Cab  ..</p>
//                             <p>Book One Way from Gandhidham ..</p>
//                             <p>Ahmedabad Hire taxi, Hire One ..</p>
//                             <p>Book One Way Cab Hire from Rajkot to ..</p>
//                             <p>One Way  Ahmedabad to Jodhpu ..</p>
//                             <p>One Way Ahmedabad to Porban ..</p>
//                             <p>One Way Ahmedabad to Godhra ..</p>
//                             <p>Book One Hire from Abu Road T ..</p>
//                             <p>Ahmedabad to Abu  One Way C ..</p>
//                             <p>Book One Way Cab Godhra To ..</p>
//                             <p>Vadodara To Vadodara T ..</p>
//                             <p>Book One Way Cab  Somnath to ..</p>

//                         </div>
//                         <div className='h-[250px] overflow-auto lg:w-[350px] xmd:w-[300px] text-[#9e9e9e] '>
//                             <p>Morbi to Ahmedabad Airport Taxi...</p>
//                             <p>Jamnagar To Ahmedabad Hire Cab  ..</p>
//                             <p>Book One Way from Gandhidham ..</p>
//                             <p>Ahmedabad Hire taxi, Hire One ..</p>
//                             <p>Book One Way Cab Hire from Rajkot to ..</p>
//                             <p>One Way  Ahmedabad to Jodhpu ..</p>
//                             <p>One Way Ahmedabad to Porban ..</p>
//                             <p>One Way Ahmedabad to Godhra ..</p>
//                             <p>Book One Hire from Abu Road T ..</p>
//                             <p>Ahmedabad to Abu  One Way C ..</p>
//                             <p>Book One Way Cab Godhra To ..</p>
//                             <p>Vadodara To Vadodara T ..</p>
//                             <p>Book One Way Cab  Somnath to ..</p>

//                         </div>

//                     </div>
//                 </div>
//             </center> */}
//             <div className="popular_section bg-[#000] pb-10 lg:block xmd:block md:block xsm:hidden sm:hidden xl:hidden 2xl:hidden">
//                 <div className="container mx-auto">
//                     <center className="text-2xl font-bold mb-4 text-[#fff] py-5">Popular Routes</center>
//                     <div className="grid grid-cols-3 gap-4">

//                         <div className="col-span-1">
//                             <div className="h-[250px] overflow-auto lg:mx-[50px] " id="style-1">
//                                 <div className="force-overflow text-[15px]">
//                                 <ul className="flex flex-col">
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-span-1">
//                             <div className="h-[250px] overflow-auto lg:mx-[50px]" id="style-1">
//                                 <div className="force-overflow text-[15px]">
//                                 <ul className="flex flex-col ">
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-span-1">
//                             <div className="foot_box csmtbx  h-[250px] overflow-auto lg:mx-[50px]" id="style-1">
//                                 <div className="force-overflow text-[15px]">
//                                 <ul className="flex flex-col">
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                         <li className='py-1 text-[#9e9e9e]'><a  >Morbi to Ahmedabad Airport Taxi, Sard ..</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>


//             <div className="bg-[#12161d] text-white py-10 lg:px-0 xmd:px-28 md:px-32 xsm:px-10 sm:px-10 xl:px-10">
//                 <div className="container mx-auto flex justify-center">
//                     <div className=' grid lg:grid-cols-3  xmd:grid-cols-3 md:grid-cols-3 xsm:grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-9 '>
//                         <div className="  lg:w-[350px] xsm:w-[150px] xl:w-[100px] text-[#9e9e9e]" >
//                             <div className='flex flex-col  '>
//                                 <a className='py-1 text-[18px]  text-[#fff] font-[600]'>About Taxi</a>
//                                 <a className='py-1'>About Us </a>
//                                 <a className='py-1'>Contact Us</a>
//                                 <a className='py-1'>Driver</a>
//                                 <a className='py-1'>Sitemap</a>
//                             </div>
//                         </div>
//                         <div className=' w-[350px] xsm:w-[200px] xl:w-[100px] text-[#9e9e9e]'>
//                             <div className='flex flex-col'>
//                                 <a className='py-1 text-[18px] text-[#fff] font-[600]'>Terms of Uses </a>
//                                 <a className='py-1'> Privacy Policy </a>
//                                 <a className='py-1'> Terms & Conditions </a>
//                                 <a className='py-1'>Refund & Cancellation Policy</a>
//                                 <a className='py-1'>FAQs</a>
//                                 <a className='py-1'>Blog</a>
//                             </div>
//                         </div>
//                         <div className=' w-[350px] xsm:w-[376px] xl:w-[340px] 2xl:w-[200px] text-[#9e9e9e]'>
//                             <div className='flex flex-col py-1'>
//                                 <a className='py-1 text-[18px] text-[#fff] font-[600]'>Address </a>
//                                 <div className='flex py-2'>
//                                     <BsFillTelephoneFill size={25} />
//                                     <p className='ml-2'> +91-9054865866 </p> </div>
//                                 <div className='flex py-1'>
//                                     <HiMail size={28} />
//                                     <p className='ml-2'> booking@hindustanrides.in </p> </div>
//                                 <div className='flex py-1'>
//                                     <FaHome size={90} />
//                                     <p className='ml-2'>  Shakti Plaza, 15 A Jagnath Plot Opp. Hotel Imperial Palace Rajkot, Gujarat 360001  </p> </div>
//                                 <div className='flex space-x-7 py-3'>
//                                     <ImFacebook size={30} />
//                                     <ImTwitter size={30} />
//                                     <GrLinkedinOption size={30} />
//                                     <PiInstagramLogoBold size={30} />
//                                     <TfiYoutube size={30} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <footer className="bg-[#010712] text-[#fff] py-4">
//                 <div className="container mx-auto flex justify-center font-mont">
//                     <p>© 2021 | All Rights Reserved by Hindustanrides And Promoted and Design By Duplex Technologies</p>
//                 </div>
//             </footer>



//         </>
//     )
// }


import React from 'react';
import logoFooter from '../../Images/hindustanrides/logo-white.png'
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { GrLinkedinOption } from 'react-icons/gr';
import { RiInstagramFill } from "react-icons/ri";
import { TfiYoutube } from 'react-icons/tfi';

export default function Footer() {
  return <>
<footer class="footer-1 bg-gray-100 py-8 sm:py-12 bg-[#000] border-t-4 border-yellow">
  
  <div class="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2">
      <div class="px-4 col-span-2">
        <h5 class="text-xl font-bold mb-6">
            <img src={logoFooter} className='w-[320px]'/>
        </h5>
      <p className='text-[#fff] text-[15px]'>
      Are you ready to embark on an unforgettable journey from Surat to some of the most captivating destinations 
      in India? Look no further! Our Surat to outstation taxi service is your go-to choice for affordable, safe, and 
      comfortable rides to Mumbai, Ahmedabad, Vadodara, Saputara, Statue Of Unity, Dakor, Pavagadh, Sarangpur, Pune,
       Mahabaleswar, Rajkot, Junagadh, and Dwarika
      </p>
      </div>
      <div class="px-4 text-[#fff]">
        <h5 class="text-xl font-bold mb-6 text-yellow  ">
          <span className='border-b-2 border-[#fff]'>Popular Routes </span></h5>
        <ul class="list-none footer-links ">
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  
            hover:border-purple-800 hover:text-purple-800">Surat to Mumbai</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Surat to Ahmedabad</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Surat to Saputara</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Surat to Sarangpur</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Surat to Vadodara</a>
          </li><br/>
          <li class="py-1">
            <a class=" hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Surat to Dakor</a>
          </li><br/>
          <li class="py-1">
            <a class=" hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Surat to Daman</a>
          </li><br/>
          <li class="py-1">
            <a class=" hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Surat to Statue of unity</a>
          </li>
        </ul>
      </div>
      <div class="px-4 text-[#fff]">
        <h5 class="text-xl font-bold mb-6 text-yellow  ">
          <span className='border-b-2 border-[#fff]'>QUICK LINKS</span></h5>
        <ul class="list-none footer-links ">
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Home</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">About us</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Driver</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Tour</a>
          </li><br/>
          <li class="py-1">
            <a class="hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Blog</a>
          </li><br/>
          <li class="py-1">
            <a class=" hover:text-yellow font-[600]  hover:border-purple-800 hover:text-purple-800">Contact us</a>
          </li>
        </ul>
      </div>
      <div class="px-4 text-[#fff] col-span-2">
        <h5 class="text-xl font-bold mb-6 text-left text-yellow">
          
          <span className='border-b-2 border-[#fff]'>GET IN TOUCH</span></h5>
        <div class=" sm:justify-center xl:justify-start">
        
            <p className='flex py-1 hover:text-yellow font-[600]'> Email: contact@hindustanrides.com</p> 
            <p className='flex py-1 hover:text-yellow font-[600]'>Phone: +91 99254 03831 | Mr.Sanjay Sahu</p>
            <p className="flex py-1 hover:text-yellow font-[600]">Phone: +91 76000 60604 | Mr.Ravi Hirapara</p>
            <p className='flex py-1 hover:text-yellow font-[600]'>Address: 102, YogiArcade, Yogichowk, Surat, Gujarat-395010</p>
        
        <div className='flex gap-4 pt-6'>
          <ImFacebook size={20} fill="#ffa633" />
          <RiInstagramFill size={20} fill="#ffa633" />
          <GrLinkedinOption size={20} fill="#ffa633"/>
          <ImTwitter size={20} fill="#ffa633"/>
          <TfiYoutube size={20} fill="#ffa633"/>
          
        </div>
        
        </div>
      </div> 
  </div>
</footer>
  </>
}
