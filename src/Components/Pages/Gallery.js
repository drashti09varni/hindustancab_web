import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getmemories";
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            };
            const response = await fetch(addRecordEndpoint, options);
            const jsonResponse = await response.json();

            setData(jsonResponse?.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
            <div className="container mx-auto">
                <center className='my-font text-4xl py-5'>Best of our Memories</center>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((item, i) => (
                        <div key={i} className="p-4">
                                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                    <div className="relative pb-48 overflow-hidden">
                                        <img className="absolute inset-0 h-full w-full object-cover object-top"
                                            src={`http://193.203.162.218:4200/uploads/memories/${item.memoriesImg}`}
                                            alt={`Memory ${i + 1}`}
                                        />
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
