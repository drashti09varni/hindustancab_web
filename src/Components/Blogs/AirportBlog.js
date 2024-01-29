import React from 'react';
import img from '../../Images/hindustanrides/mumbai-airport.jpg';
import {useLocation} from 'react-router-dom';

export default function AirportBlog() {
    const location = useLocation();
    const { data } = location.state;
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[1050px]'>
                <img src={`http://193.203.162.218:4200/uploads/blog/${data.blog_img}`} className='mt-[100px]' />
                <p className='text-yellow font-bold text-[35px] my-font tracking-wide py-3' >
                   {data.blog_name}
                    </p>
                <p>Are you planning a trip from <b>Surat to Mumbai</b> and looking for the most convenient and comfortable transportation option to the airport? Look no further!
                    <b>Hindustan Rides Taxi Services</b>,
                    based in Surat, Gujarat, offers a hassle-free and reliable solution for your travel needs.</p>
                <h1 className='font-bold'>Convenience at Your Fingertips</h1>
                <p>At <b>Hindustan Rides</b>, we understand the importance of a stress-free journey, especially when heading to the airport. Our Surat to Mumbai Airport Cab Rentals are designed to provide you with the utmost convenience and peace of mind.</p>
                <h1 className='font-bold'>Key Benefits of Choosing Our Cab Rentals:</h1>
                <ol className='list-decimal'>
          <li> <b>Punctuality:</b> We value your time and ensure that our cabs arrive promptly at your designated location in Surat.</li><br/>
          <li> <b>Comfort:</b> Our well-maintained fleet of vehicles, including comfortable sedans and spacious SUVs, guarantees a comfortable and relaxing ride.</li><br/>
          <li> <b>Experienced Drivers: </b> Our courteous and experienced drivers have in-depth knowledge of the Surat to Mumbai route, ensuring a smooth and safe journey.</li><br/>
          <li> <b>Flexible Booking: </b>Booking a cab with Hindustan Rides is a breeze. You can reserve your cab through our user-friendly website or mobile app, making the process convenient and efficient.</li><br/>
          <li> <b>Affordability: </b> We offer competitive rates for our Surat to Mumbai Airport Cab Rentals, providing excellent value for your money.</li><br/>
          <li> <b>Round-the-Clock Availability:</b> Our services are available 24/7, ensuring that you can book a cab whenever you need one, even for early morning or late-night flights.</li>
        </ol>
                <b><h1>Traveling with Confidence</h1></b>
                <p>When you choose Hindustan Rides for your airport transportation needs, you can travel with confidence, knowing that you will reach the Mumbai airport comfortably and on time. Our commitment to excellence and customer satisfaction is reflected in every aspect of our service.</p>
                <h1 className='font-bold'>How to Book Your Surat to Mumbai Airport Cab</h1>
                <p>Booking a cab with Hindustan Rides is a straightforward process:</p>
                <ol>
                    <li> <b>Visit Our Website:</b> Navigate to our user-friendly website from your computer or mobile device.</li><br/>
                    <li> <b>Select Your Ride:</b> Choose the vehicle that best suits your requirements and preferences.Select Your Ride: Choose the vehicle that best suits your requirements and preferences.</li><br/>
                    <li> <b>Enter Details:</b> Provide your pickup location in Surat, travel date, and any other necessary details.</li><br/>
                    <li> <b> Confirm Your Booking: </b>Review your booking details, including the fare estimate, and confirm your reservation.</li><br/>
                    <li> <b>Enjoy Your Ride:</b> Relax and prepare for a comfortable journey to the Mumbai airport with Hindustan Rides.</li>
                </ol>
                <h1 className='font-bold'>Experience the Difference</h1>
                <p>Experience the difference of traveling with Hindustan Rides Taxi Services. Our Surat to Mumbai Airport Cab Rentals are designed to make your airport commute stress-free and convenient. Whether you’re traveling for business or leisure, you can rely on us for a seamless experience.</p>
                <h1 className='font-bold'>Book Your Surat to Mumbai Airport Cab Today!</h1>
                <p>Don’t let transportation concerns add to the stress of your journey. Book your Surat to Mumbai airport cab with Hindustan Rides Taxi Services and enjoy a comfortable, reliable, and punctual ride to catch your flight with ease. Travel with confidence and convenience – that’s the Hindustan Rides promise!</p>
                <p>For bookings and inquiries, visit our website or contact us at [Your Contact Information].</p>
                <p>Safe travels!</p>
                <a className='font-bold'>Click Here For Book Taxi From Surat To Mumbai </a>
           </div>
        </div>
    )
}
