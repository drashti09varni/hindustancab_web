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
        <div className="flex flex-row space-x-20 items-center justify-center ">

          <ul className="flex flex-col max-h-[500px] max-w-[380px] overflow-y-auto overflow-x-hidden">
            <li>
              <a onClick={() => setOpenTab(1)}
                className={` ${openTab === 1 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 ml-2 text-gray-600 `}>
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb1} className="h-14 w-24 ml-[-8px]" />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[60px] " size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5">DJ PARTY @ GOA</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(2)}
                className={` ${openTab === 2 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `}>
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb2} className="h-14 w-24 " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5">SCUBA DIVING UNDER WATER</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(3)}
                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb3} className="h-14 w-24 " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5">Casino dinner with bally show</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(4)}
                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb4} className="h-14 w-24 " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5">Banana rides advanture	</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(5)}
                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb5} className="h-14 w-24 " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5">Jetski rides advanture</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(6)}
                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb6} className="h-14 w-24 " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5">Dudhsagar Waterfall</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(7)}
                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-[60px] w-[120px]  relative">
                    <img src={thumb7} className="h-[60px] w-[120px] " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-2">Brand New Innova Crysta MT 2.4 VX 2023</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(8)}
                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb8} className="h-14 w-24 " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-5">Mahabaleshwar Sight Seen</p>
                </div>
              </a>
            </li>
            <li>
              <a onClick={() => setOpenTab(9)}
                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 `} >
                <div className="flex">
                  <div className="h-14 w-24 relative">
                    <img src={thumb9} className="h-14 w-24 " />
                    <FaCirclePlay className="absolute mt-[-25px] ml-[70px] opacity-80" size={20} fill="white" />
                  </div>
                  <p className="ml-2 mt-2">Swiming advanture at arebian sea</p>
                </div>
              </a>
            </li>
          </ul>

          <div className="p-3 bg-white ">

            <div className={openTab === 1 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/ey4LD_iWNAU?si=XjNsAJK2t9TUt-Zb"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 2"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/6ZGtBQkYYkU"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/duQsmayFsZM"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 4 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/0t6pSPDbRJ4"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 5 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/owBx79hcdiU"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 6 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/o3vtcf2l920"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 7 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/60DFeOX05bE"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 8 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
                src="https://www.youtube.com/embed/75Gwlpjirlg"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className={openTab === 9 ? "block" : "hidden"}>
              <iframe
                title="YouTube Video 1"
                width="760"
                height="415"
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