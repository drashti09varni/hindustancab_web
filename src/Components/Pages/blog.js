import React, { useState, useEffect } from 'react';
import img from '../../Images/hindustanrides/2_AMWW628_1_1800x1800.webp';
import BgImage from '../../Images/hindustanrides/How_To_Start_A_Blog_-_article_image.jpg';
import { TiArrowRight } from "react-icons/ti";
import { useNavigate ,Link } from "react-router-dom";


export default function Blog() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const fatchData = async () => {
    try {
      const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getBlogs";
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      const response = await fetch(addRecordEndpoint, options);
      const jsonResponse = await response.json();
      setData(jsonResponse?.data)
    } catch (err) {

    }
  }

  const handleClick = (item) => {
    navigate('/online-booking', {
      state: {
          data: item,
      },
  });
  }
  useEffect(() => {
    fatchData();
  }, []);
  return <>
    <div className="content">
      <div className="photos">
        <div className="thumbnails">
          <img src={BgImage} className='object-bottom' />
          <div className="black"></div>
          <div className="title font-mont font-[700] ">
            <div className='text-[#ffa633]'>Blogs</div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid content lg:grid-cols-3 xmd:grid-cols-3 md:grid-cols-3 xsm:grid-cols-2 sm:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-6 w-full lg:px-52 xmd:px-16 md:px-16 xsm:px-12 sm:px-8 xl:px-5 py-10 2xl:px-3">
      {data?.map((item) => (
        <div className="relative mx-auto w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" key={item.id}>
          <a onClick={() => {handleClick(item)}} className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-58">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <img src={`http://193.203.162.218:4200/uploads/blog/${item.blog_img}`} alt={item.blog_name} />
                </div>
              </div>

              <div className="mt-4">
                <h2 className="font-medium text-[20px] text-gray-800 text-center">
                  {item.blog_name}
                </h2>
                <div className='px-5 py-5'>
                  <p className="mt-2 text-[15px] text-[#000] font-[600]">
                    {item.blog_description}
                  </p>
                </div>
                <div className='text-center flex items-center justify-center'>
                 <button className="mr-2 text-yellow font-bold" onClick={() => {handleClick(item)}}>READ MORE</button>
                  <TiArrowRight fill='#ffa633' size={25} />
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </>

};
