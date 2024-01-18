import React, { useEffect, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from 'antd';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Local() {
    const navigate = useNavigate();

    const [formCity, setFormCity] = useState();
    const [handleCity, setHandleCity] = useState();
    const [fatchCity, setFatchCity] = useState();
    const [redirect, setRedirect] = useState(false);




    const [selectedTime, setSelectedTime] = useState();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const calculateDistance = (e) => {
        const day = selectedDate?.getDate();
        const month = selectedDate?.getMonth() + 1; 
        const year = selectedDate?.getFullYear() % 100;
        const paddedDay = day < 10 ? `0${day}` : day;
        const paddedMonth = month < 10 ? `0${month}` : month;
        const paddedYear = year < 10 ? `0${year}` : year;
        const Date = `${paddedDay}/${paddedMonth}/${paddedYear}`;
        const hours = selectedTime?.$d?.getHours();
        const minutes = selectedTime?.$d?.getMinutes();
        const seconds = selectedTime?.$d?.getSeconds();

        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = String(hours % 12 || 12).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        const Time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
        const selectCity = handleCity.city_name;
        const filteredCities = formCity.filter(item => item.city_name === selectCity);
        console.log(filteredCities);

        setRedirect(true)
        navigate('/car-list/local', {
            state: {
                data: filteredCities,
                city: selectCity,
                date: Date,
                time: Time
            },
        });
    }


    const handleChange = (e) => {
        setHandleCity({
            ...handleCity,
            city_name: e.target.value,
        });
    }
    const fatchData = async () => {

        try {
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/getcardetail";

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }

            const response = await fetch(addRecordEndpoint, options);
            const jsonResponse = await response.json();

            setFormCity(jsonResponse?.result)

        } catch (err) {
            console.log(err)
        }
    }

    const handlefatchCity = async () => {

        try {
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/allDropCity";

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }

            const response = await fetch(addRecordEndpoint, options);
            const jsonResponse = await response.json();
            setFatchCity(jsonResponse?.data);

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fatchData();
        handlefatchCity();
    }, []);
    return <>
<div className="flex justify-center items-center ">
                                <div className="w-full px-5 py-5">
                                    <div className="grid lg:grid-cols-4 xlg:grid-cols-4 xmd:grid-cols-4 md:grid-cols-4 
                                        xsm:grid-cols-2 sm:grid-cols-2  xl:grid-cols-1 2xl:grid-cols-1 gap-3">
                                        <div className="relative">
                                            <span className="material-icons absolute left-0 top-3 flex items-center pl-2 text-gray-500">
                                                <HiLocationMarker fill='#127384' size={20} className='' />
                                            </span>
                                            <select className="pl-8 pr-2 py-3 rounded-lg w-full border-[#dadada] border bg-[#fff]">
                                                <option value="">Select Pickup City</option>
                                                <option value="surat">Surat</option>
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <span className="material-icons absolute left-0 top-3 flex items-center pl-2 text-gray-500">
                                                <HiLocationMarker fill='#127384' size={20} className='' /></span>
                                            <select className="pl-8 pr-2 py-3 rounded-lg w-full border-[#dadada] border bg-[#fff]" onChange={handleChange}>
                                                <option value="">Select Local Package</option>
                                                {fatchCity?.map((items, i) => (
                                                    <option value={items.drop_city} key={items.id}>{items.drop_city}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-span-1 relative">
                    <span className="material-icons absolute z-96 left-0 top-3 flex items-center pl-2 text-[#000]">
                        <MdDateRange fill='#127384' size={20} className='mt-[2px]' /></span>

                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText='Select a date'
                        className="pl-8 z-0 pr-2 py-6 border-0 rounded-lg w-[100%] 
                        lg:border xmd:border md:border xsm:border sm:border xl:border 2xl:border border-[#dadada]"
                    />

                </div>


                                        {/* <div className="relative">
                                            <FaClock className="absolute left-2 top-1/2 " />
                                            <TimePicker
                                                format="h:mm a"
                                                showNow={false}
                                                use12Hours
                                                value={selectedTime}
                                                onChange={handleTimeChange}
                                                showSecond={false}
                                                hideDisabledOptions
                                                minuteStep={5}
                                                className="pl-8 pr-2 py-3 border rounded-lg w-full border-[#dadada]"
                                            />
                                        </div> */}
                                        <button
                                            className="float-right border border-yellow text-[#000] bg-yellow mt-[2px] py-2 text-[18px] font-mont  
                    my-3 rounded font-[700] hover:bg-[#fff] hover:border-[#000] hover:border"
                                            onClick={() => { calculateDistance() }} >
                                            Search Cab
                                        </button>
                                    </div>
                                </div>
                            </div>

    </>
}
