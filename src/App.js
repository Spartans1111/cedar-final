import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async';
import Header from '../src/components/header/header'; 
import Home from '../src/components/Home/home';
import About from '../src/components/about/about';
import Service from '../src/components/service/service';
import Footer from '../src/components/footer/footer';
import Packages from '../src/components/packages/packages';
import Contact from '../src/components/contact/contact';
import Gallery from '../src/components/gallery/gallery';
import Scrolltop from './components/scrolltop/scrolltop';
import Officeservice from './components/service/officeservice';
import Customservice from './components/service/customservice';
import Livingservice from './components/service/livingservice';
import Homeinterior from './components/service/homeinterior';
import Modularservice from './components/service/modularservice';
import Kidsroom from './components/service/kidsroom';
import Bedroom from './components/service/bedroom';
import Diningroom from './components/service/diningroom';
import Cochin from './components/location/Cochin';
import Palakkad from './components/location/Palakkad';
import Tiruvalla from './components/location/Tiruvalla';
import Coimbatore from './components/location/Coimbatore';
import Privacy from './components/Home/privacyPolicy/privacy';
import Termsandcondition from './components/Home/privacyPolicy/termsandcondition';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Scrolltop/>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-cedar-interiors" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/2bhk-3bhk-interior-packages" element={<Packages />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/home-interiors" element={<Homeinterior />} />
            <Route path="/living-room-interiors" element={<Livingservice />} />
            <Route path="/office-interiors" element={<Officeservice />} />
            <Route path="/custom-interior-units" element={<Customservice />} />
            <Route path="/modular-kitchens" element={<Modularservice />} />
            <Route path="/dining-room-interiors" element={<Diningroom />} />
            <Route path="/bedroom-interiors" element={<Bedroom />} />
            <Route path="/kids-room-interiors" element={<Kidsroom />} />
            <Route path='/interior-designers-cochin' element={<Cochin />} />
            <Route path='/interior-designers-palakkad' element={<Palakkad />} />
            <Route path='/interior-designers-tiruvalla' element={<Tiruvalla />} />
            <Route path='/interior-designers-coimbatore' element={<Coimbatore />} />
            <Route path='/privacypolicy' element={<Privacy />} />
            <Route path='/terms&condition' element={<Termsandcondition />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
