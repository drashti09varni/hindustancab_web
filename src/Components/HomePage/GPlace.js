import React, {  useRef } from 'react';
import OneWay from './GPlace/OneWay';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { BiSolidTimeFive } from 'react-icons/bi';
import RoundTrip from './GPlace/RoundTrip';


const GPlace = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [subOpenTab, setSubOpenTab] = React.useState(1);
    const [secOpenTab, setSecOpenTab] = React.useState(1);
    
    const placeInputRef3 = useRef(null);
    const placeInputRef4 = useRef(null);
    const placeInputRef5 = useRef(null);

    
    return (
        <>
             <div className="flex justify-center items-center ">
                <div className="w-full">
                    <div className="relative flex flex-col break-words  lg:w-[1100px]
                     xmd:w-[900px] md:w-[850px]  xsm:w-[650px] sm:w-[454px] xl:w-[316px] 2xl:w-[350px]  mb-6 mx-auto mt-[-20px] 
                     lg:rounded-none xmd:rounded-none md:rounded-none xsm:rounded-none sm:rounded-2xl">
                        <div className="px-4 py-5 flex-auto shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] 
                         rounded-xl lg:bg-[#fff] xmd:bg-[#fff]  md:bg-[#fff]  xsm:bg-[#fff] sm:bg-[#fff] xl:bg-[#fff] 2xl:bg-[#fff] ">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className={subOpenTab === 1 ? "block" : "hidden"} >
                                       <OneWay />
                                    </div>
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>







        </>
    );
};

export default GPlace;

