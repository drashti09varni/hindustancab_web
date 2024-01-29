import { useState } from "react";
import thumb1 from '../../Images/hindustanrides/videos/thumb-1.jpg';
import thumb2 from '../../Images/hindustanrides/videos/thumb-2.jpg';
import thumb3 from '../../Images/hindustanrides/videos/thumb-3.jpg';
import thumb4 from '../../Images/hindustanrides/videos/thumb-4.jpg';
import thumb5 from '../../Images/hindustanrides/videos/thumb-5.webp';
import thumb6 from '../../Images/hindustanrides/videos/thumb-6.jpg';
import thumb7 from '../../Images/hindustanrides/videos/thumb-7.jpeg';
import thumb8 from '../../Images/hindustanrides/videos/thumb-8.jpg';
import thumb9 from '../../Images/hindustanrides/videos/thumb-9.jpeg';
import { FaCirclePlay } from "react-icons/fa6";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <div className="container mx-auto my-12 ">
        < center> <h1 className="my-font text-4xl my-5 mb-14">Little Glimpse Of Hindustan Rides</h1></center>
        <div className="flex lg:flex-row  xlg:flex-row xmd:flex-row md:flex-row xsm:flex-row sm:flex-col xl:flex-col  2xl:flex-col items-center justify-center ">

          <ul className="flex flex-col lg:h-[500px] xlg:h-[500px] xmd:h-[500px] md:h-[500px] xsm:h-[500px] sm:h-[300px] xl:h-[260px] 2xl:h-[300px] 
          lg:w-[380px] xlg:w-[380px]  xmd:w-[380px] md:w-[351px] xsm:w-[351px] sm:w-[480px] xl:w-[400px]   2xl:w-[400px] overflow-y-auto overflow-x-hidden 
          lg:order-1 xlg:order-1 xmd:order-1 md:order-1 xsm:order-1 sm:oder-2 xl:order-2 2xl:order-2">
            <li className="">
              <a onClick={() => setOpenTab(1)}
                className={` ${openTab === 1 ? "bg-[#a3a3a3] text-white w-[350px] " : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `}>
                <div className="flex">
                  <div className="h-[56px]  w-[96px] relative">
                    <img src={thumb1} className="h-[56px]  w-[96px] ml-[-2px]" />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[60px] " size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5 font-bold">DJ PARTY @ GOA</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(2)}
                className={` ${openTab === 2 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `}>
                <div className="flex">
                  <div className=" h-[56px]  w-[96px] relative">
                    <img src={thumb2} className=" h-[56px]  w-[96px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5 font-bold">Scuba diving under water</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(3)}
                className={` ${openTab === 3 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className=" h-[56px]  w-[96px] relative">
                    <img src={thumb3} className=" h-[56px]  w-[96px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-0 font-bold">Casino dinner with bally show</p>
                </div>
              </a>
            </li>
            <li>
            <a onClick={() => setOpenTab(4)}
                className={` ${openTab === 4 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className=" h-[56px]  w-[96px] relative">
                    <img src={thumb4} className=" h-[56px]  w-[96px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5 font-bold">Banana rides advanture	</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(5)}
                className={` ${openTab === 5 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className=" h-[56px]  w-[96px] relative">
                    <img src={thumb5} className=" h-[56px]  w-[96px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5 font-bold">Jetski rides advanture</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(6)}
                className={` ${openTab === 6 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className=" h-[56px]  w-[96px] relative">
                    <img src={thumb6} className=" h-[56px]  w-[96px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5 font-bold">Dudhsagar Waterfall</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(7)}
                className={` ${openTab === 7 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-[60px] w-[120px]  relative">
                    <img src={thumb7} className="h-[60px] w-[120px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-2 font-bold">Brand New Innova Crysta MT 2.4 VX 2023</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(8)}
                className={` ${openTab === 8 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className=" h-[56px]  w-[96px] relative">
                    <img src={thumb8} className=" h-[56px]  w-[96px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5 font-bold">Mahabaleshwar Sight Seen</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(9)}
                className={` ${openTab === 9 ? "bg-[#a3a3a3] text-white w-[350px]" : "hover:bg-[#bfbfbf] text-white w-[350px]"} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className=" h-[56px]  w-[96px] relative">
                    <img src={thumb9} className=" h-[56px]  w-[96px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-2 font-bold">Swiming advanture at arebian sea</p>
                </div>
              </a>
            </li>
          </ul>

          <div className="bg-white lg:order-2 xlg:order-2 xmd:order-2 md:order-2 xsm:order-2 sm:order-1 xl:order-1 2xl:order-1">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                src="https://www.youtube.com/embed/ey4LD_iWNAU?si=XjNsAJK2t9TUt-Zb"
                frameborder="0"
                allowfullscreen
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
              ></iframe>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 2"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/6ZGtBQkYYkU"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/duQsmayFsZM"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 4 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/0t6pSPDbRJ4"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 5 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/owBx79hcdiU"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 6 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/o3vtcf2l920"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 7 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/60DFeOX05bE"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 8 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/75Gwlpjirlg"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 9 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                className="lg:w-[760px] lg:h-[415px] xlg:w-[760px] xlg:h-[415px] xmd:w-[600px] xmd:h-[390px] md:w-[600px] md:h-[390px] xsm:w-[445px] xsm:h-[390px]
                sm:w-[480px] sm:h-[390px]  xl:w-[360px] xl:h-full 2xl:w-[290px] 2xl:h-full"
                src="https://www.youtube.com/embed/n3thpYzdh64"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
