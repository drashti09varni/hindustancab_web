import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Home from './Components/HomePage/HeroImage';
import About from './Components/Pages/Aboutus';
import Driver from './Components/Pages/Drive';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import ContactUs from './Components/Pages/ContactUs';
import TripCarList from './Components/Pages/trip-car-list';
import LocalCarList from './Components/Pages/local-car-list';
import BookingForm from './Components/Pages/BookingForm';
import Tours from './Components/HomePage/Tours';
import Blog from './Components/Pages/blog';
import AirportBlog from './Components/Blogs/AirportBlog';
import Gallery from './Components/Pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/driver' element={<Driver />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/car-list/trip' element={<TripCarList />} />
          <Route path='/car-list/local' element={<LocalCarList />} />
          <Route path='/booking-form' element={<BookingForm  />} />
          <Route path='/tours' element={<Tours  />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/online-booking' element={<AirportBlog />} />
          <Route path='/gallery' element={<Gallery />}/>

        </Routes>
        <ToastContainer closeButton={false} position="bottom-right" />
        <Footer />
      </Router>
    </>
  );
}

export default App
