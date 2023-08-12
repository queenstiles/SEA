import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import firebase from './firebase';
import { app } from './firebase';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Service from './Service/Service';
import OceanT from './Service/OceanT';
import Air from './Service/Air';
import Inland from './Service/Inland';
import Rail from './Service/Rail';
import LCL from './Service/Lcl';
import Tracking from './Track/Tracking';
import Trackinginfo from './Track/Trackinginfo';
import Log from './IAM/Log';
import Iamhome from './IAM/Iamhome';
import Addshipment from './IAM/Addshipment';
import Updateshipment from './IAM/Updateshipment';
import Trackingpreview from './IAM/Trackingpreview';
import Booking from './IAM/Booking';
import Bookingpreview from './IAM/Bookingpreview';
import Readmore from './Home/Readmore';
import './App.css';
import Help from './IAM/Help';
import Helppreview from './IAM/Helppreview';


function App() {
  return (
    
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='about' element={<About/>}/> 
    <Route path='contact' element={<Contact/>}/> 
    <Route path='service' element={<Service/>}/> 
    <Route path='ocean' element={<OceanT/>}/> 
    <Route path='air' element={<Air/>}/> 
    <Route path='inland' element={<Inland/>}/> 
    <Route path='rail' element={<Rail/>}/> 
    <Route path='lcl' element={<LCL/>}/> 
    <Route path='tracking' element={<Tracking/>}/> 
    <Route path='trackingcode' element={<Trackinginfo/>}/>  
    <Route path='iam' element={<Log/>}/> 
    <Route path='iamhome' element={<Iamhome/>}/> 
    <Route path='add' element={<Addshipment/>}/>
    <Route path='update' element={<Updateshipment/>}/> 
    <Route path='trackinpreview' element={<Trackingpreview/>}/> 
    <Route path='booking' element={<Booking/>}/> 
    <Route path='bookingpreview' element={<Bookingpreview/>}/> 
    <Route path='moreinfor' element={<Readmore/>}/> 
    <Route path='help' element={<Help/>}/> 
    <Route path='helpPreview' element={<Helppreview/>}/> 
  
  </Routes>
  );
}

export default App;
