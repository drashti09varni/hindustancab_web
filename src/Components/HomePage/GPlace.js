import React, { useRef } from 'react';
import Trip from './GPlace/Trip';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { BiSolidTimeFive } from 'react-icons/bi';
import Local from './GPlace/Local'

const GPlace = () => {
    const [openTab, setOpenTab] = React.useState(1);




    return (
        <div className="flex justify-center items-center ">
            <div className="w-full lg:mt-[0px] xlg:mt-[0px] xmd:mt-[0px] md:mt-[0px] xsm:mt-[0px] sm:mt-[0px] xl:mt-[112px] 2xl:mt-[112px]">
                <div className="relative flex flex-col break-words lg:w-[1100px]
                 xmd:w-[900px] md:w-[850px]  xsm:w-[650px] sm:w-[477px] xl:w-[90vw] 2xl:w-[90vw]  mb-6 mx-auto mt-[-20px] 
                 lg:rounded-none xmd:rounded-none md:rounded-none xsm:rounded-none sm:rounded-2xl">
                    <div className="px-4 py-5 flex-auto shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] 
                     rounded-xl lg:bg-[#fff] xmd:bg-[#fff]  md:bg-[#fff]  xsm:bg-[#fff] sm:bg-[#fff] xl:bg-[#fff] 2xl:bg-[#fff] ">
                   <ul
    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row px-5"
    role="tablist"
>
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
        <a
            className={
                "text-[15px] font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                    ? "text-[#000] bg-yellow  border border-yellow"
                    : " bg-white border border-yellow")
            }
            onClick={e => {
                e.preventDefault();
                setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
        >
            Trip
        </a>
    </li>
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center w-14">
        <a
            className={
                "text-[15px] font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                    ? "text-[#000] bg-yellow border border-yellow"
                    : "bg-white border border-yellow")
            }
            onClick={e => {
                e.preventDefault();
                setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
        >
            Local
        </a>
    </li>
</ul>

                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
                            <div className="px-2 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <Trip />
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <Local />
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             


            </div>
        </div>
           
    );
};

export default GPlace;
