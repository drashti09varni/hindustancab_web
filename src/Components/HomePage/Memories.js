import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function Memories() {
    const [data, setData] = useState([]);
    const fatchData = async () => {

        try {
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getmemories";
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
   
 
    <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
  <div class="container mx-auto">
    <center className='my-font text-4xl py-5'>Best of our Memories
    </center>
    <div class="grid lg:grid-cols-4 xlg:grid-cols-4 xmd:grid-cols-3 xsm:grid-cols-3 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-1">
    {data.length > 0 ? (
            data.slice(0, 8).map((item,i) => (
      <div class="w-full  p-4" key={i}>
        <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div class="relative pb-48 overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover object-top"  src={`http://193.203.162.218:4200/uploads/memories/${item.memoriesImg}`}/>
        </div>
      </a>
      </div>))):""}
     
    </div>
    <div class="flex justify-center">
      <Link to='/gallery'><button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
      bg-yellow border-2 border-yellow hover:bg-[#fff] hover:border-2 hover:border-yellow">View More</button></Link>
    </div>
    
  </div>
</div>

    </>
}
