import React, { useEffect, useState } from 'react'
import BgImage from '../../Images/Aboutus/cab_banner-aboutUs.webp';
import { Link } from "react-router-dom";

export default function Tours() {
    const [data, setData] = useState([]);
    const fatchData = async () => {

        try {
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/gettour";

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const response = await fetch(addRecordEndpoint, options);
            const jsonResponse = await response.json();
            setData(jsonResponse?.data);

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fatchData();
    }, []);

    return <>
        <div className="content">
            <div className="photos">
                <div className="thumbnails">
                    <img src={BgImage} />
                    <div className="black"></div>
                    <div className="title font-mont font-[700] ">
                        <div className='font-mont font-[700]'>Tour packages</div>
                        <div className='flex space-x-3 text-[15px] font-[500]'>
                            <Link to="/"><p>Home</p></Link> <p>&gt;</p> <p>About Us</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div>

            <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4 space-x-8">
                    {data?.map((item, i) => {
                        return <>
                            <div class="my-1 px-1">
                                <article class="overflow-hidden rounded-lg shadow-img w-[350px]">
                                    <div class="p-8">
                                        <img src={`http://193.203.162.218:4200/uploads/${item.tourImg}`} className='rounded-lg '/>
                                        <div className='text-center mt-3 font-[600] text-[20px]'>{item.tour_name}</div>
                                    </div>
                                </article>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    </>
}
