import React, { useEffect, useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePicker } from 'antd';
import { FaClock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function OneWay() {
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
        // const radians = (degrees) => {
        //     return degrees * (Math.PI / 180);
        // };

        // const haversine = (lat1, lng1, lat2, lng2) => {
        //     const earthRadius = 6371; // Earth's radius in kilometers

        //     const dLat = radians(lat2 - lat1);
        //     const dLon = radians(lng2 - lng1);
        //     console.log(dLat);
        //     console.log(dLon);

        //     const a =
        //         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        //         Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //     const distance = earthRadius * c;

        //     return distance;
        // };



        // if (lat1 && lng1 && lat2 && lng2) {
        //     // Calculate distance
        //     const calculatedDistance = haversine(parseFloat(lat1), parseFloat(lng1), parseFloat(lat2), parseFloat(lng2)).toFixed(2);
        //     const averageSpeed = 60; // 60 km/h, adjust this as needed

        //     const travelTimeHours = calculateTime(calculatedDistance, averageSpeed);
        //     console.log(travelTimeHours.toFixed(2))
        const day = selectedDate?.getDate();
        const month = selectedDate?.getMonth() + 1; // Adding 1 to month because it's zero-based.
        const year = selectedDate?.getFullYear() % 100;
        const paddedDay = day < 10 ? `0${day}` : day;
        const paddedMonth = month < 10 ? `0${month}` : month;
        const paddedYear = year < 10 ? `0${year}` : year;
        const Date = `${paddedDay}/${paddedMonth}/${paddedYear}`;

        //     const hours = selectedTime?.$d?.getHours();
        //     const minutes = selectedTime?.$d?.getMinutes();
        //     const seconds = selectedTime?.$d?.getSeconds();

        //     // Determine AM or PM
        //     const amOrPm = hours >= 12 ? 'PM' : 'AM';

        //     // Ensure that the hours, minutes, and seconds have two digits
        //     const formattedHours = String(hours % 12 || 12).padStart(2, '0'); // Convert 0 to 12 for 12-hour format
        //     const formattedMinutes = String(minutes).padStart(2, '0');
        //     const formattedSeconds = String(seconds).padStart(2, '0');

        //     // Create the hh:mm:ss AM/PM string
        //     const Time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;

        //     // Create an object with all three values and push it to the results array
        //     console.log(distance);
        //     console.log(Date);
        //     console.log(Time);

        //     const tripInfo = {
        //         distance: calculatedDistance,
        //         formattedDate: Date,
        //         formattedTime: Time,
        //     };
        //     setTripData([...tripData, tripInfo]);


        //     navigate('/car-list/one-way', {
        //         state: {
        //             distance: calculatedDistance,
        //             formattedDate: Date,
        //             formattedTime: Time,
        //             travelTime: travelTimeHours.toFixed(2),
        //             address_first: place1,
        //             address_sec: place2
        //         },
        //     });

        // }
        const hours = selectedTime?.$d?.getHours();
        const minutes = selectedTime?.$d?.getMinutes();
        const seconds = selectedTime?.$d?.getSeconds();

        // Determine AM or PM
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        // Ensure that the hours, minutes, and seconds have two digits
        const formattedHours = String(hours % 12 || 12).padStart(2, '0'); // Convert 0 to 12 for 12-hour format
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        // Create the hh:mm:ss AM/PM string
        const Time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;


        const selectCity = handleCity.city_name;
        console.log(formCity);
        console.log(selectCity);

        // Use Array.filter to get all items where city_name matches selectCity
        const filteredCities = formCity.filter(item => item.city_name === selectCity);
        console.log(filteredCities);

        setRedirect(true)
            navigate('/car-list/one-way', {
                state: {
                    data: filteredCities,
                    city: selectCity,
                    date: Date,
                    time: Time
                },
            });
    }

    // const calculateTime = (distance, speed) => {
    //     // Calculate time in hours
    //     const timeHours = distance / speed;
    //     return timeHours;
    // };

    // const handleChangeCity = (e) => {
    //     console.log(e.target.value);
    //     console.log(e.target.id);
    // }

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
            const addRecordEndpoint = "http://193.203.162.218:4200/api/v1/allCity";

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
            <div className="grid lg:grid-cols-5 xmd:grid-cols-5 md:grid-cols-5 xsm:grid-cols-5 gap-3 px-10 py-5">

                <div className="col-span-1 relative">
                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                        <HiLocationMarker fill='#127384' size={20} className='mt-[-9px]'/>
                    </span>
                    <select className=" pl-8 pr-2 py-3  rounded-lg w-full placehoder:font-bold 
                    lg:border xmd:border md:border xsm:border sm:border xl:border 2xl:border border-[#dadada]" >
                        <option value="" >Select Pickup City</option>
                        <option value="surat">Surat</option>
                    </select>
                 </div>

                <div className="col-span-1 relative">
                    <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                        <HiLocationMarker fill='#127384' size={20} className='mt-[-9px]'/></span>
                    <select className="pl-8 pr-2 py-3  rounded-lg w-full 
                    placehoder:font-bold lg:border xmd:border md:border xsm:border sm:border xl:border 2xl:border
                     border-[#dadada]"  onChange={handleChange}>
                        <option value=""> Select Drop City</option>
                        {fatchCity?.map((items, i) => {
                            return <option value={items.city_name} id={items.id}>{items.city_name}</option>

                        })}

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

                <div className="relative">
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
                        className="pl-8 pr-2 py-3 border rounded-lg w-full  lg:border xmd:border md:border xsm:border 
                        sm:border xl:border 2xl:border border-[#dadada]"
                    />
                </div>

                <button className="float-right border border-yellow text-[#000] bg-yellow mt-[2px] py-2 text-[18px] font-mont  
                my-3 rounded font-[700] hover:bg-[#fff] hover:border-[#000] hover:border" onClick={() => { calculateDistance() }} >
                    Search Cab
                </button>

            </div>
    </div>
    </>
}
