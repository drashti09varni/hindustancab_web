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
        <div>
            <center className='text-[30px] font-mont font-[700]'> Best Of Our Memories </center>
            <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">

                    {data?.map((item,i) => {
                        
                        return<>
                        <div class="my-1 px-1 w-[200px] md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                            <article class="overflow-hidden rounded-lg shadow-lg">
                                <img src={`http://193.203.162.218:4200/uploads/memories/${item.memoriesImg}`}  />
                            </article>
                        </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    </>
}
