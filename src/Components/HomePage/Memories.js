import React, { useEffect, useState } from 'react'

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
        <div className="flex flex-col items-center justify-center min-h-screen">
      <center className='text-3xl font-mont font-bold mb-8 my-font'>Best Of Our Memories</center>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.map((item, i) => (
            <div key={i} className="flex justify-center h-[300px]">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`http://193.203.162.218:4200/uploads/memories/${item.memoriesImg}`}
                  alt={`Memory ${i + 1}`}
                  className='object-cover object-top h-[300px] w-[330px]'
                />
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
}
