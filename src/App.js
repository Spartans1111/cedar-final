// src/App.js
import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'; 
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

function App() {
  
  return (
    <div className="App">
     
      <BrowserRouter>
      <Scrolltop/>
      <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/homeinterior" element={<Homeinterior />} />
        <Route path="/livingservice" element={<Livingservice />} />
        <Route path="/officeservice" element={<Officeservice />} />
        <Route path="/customservice" element={<Customservice />} />
        <Route path="/modularservice" element={<Modularservice />} />
        <Route path="/diningroom" element={<Diningroom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/kidsroom" element={<Kidsroom />} />
        <Route path='/location' element={<Cochin />} />
        <Route path='/palakkad' element={<Palakkad />} />
        <Route path='/tiruvalla' element={<Tiruvalla />} />
        <Route path='/coimbatore' element={<Coimbatore />} />
     </Routes>
     <Footer/>
  </BrowserRouter>
     
      
    </div>
  );
}

export default App;

