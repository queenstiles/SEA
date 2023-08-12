import React from 'react'
import "../About/about.css";
import { Link, useNavigate } from "react-router-dom";
import  ABUT from "../About/df.jpg";
import  ABUT2 from "../About/mmf.jpg";
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";



function About() {
  let nav = useNavigate();
  return (
    <div className='about' >
      <Navbar bg="color" variant="red" sticky="top" expand="lg">
  <Navbar.Brand>
    <img className="logo-image" src={HHP}/>
    <h6 className='logotext'>F.R.D.S</h6>
  </Navbar.Brand>
  <Navbar.Toggle style={{ marginRight:"5%"}}/>
  <Navbar.Collapse>
  <Nav className="move">
    
    <Nav.Link   href="/">Home</Nav.Link>
    <Nav.Link  href="service">Service</Nav.Link>
    <Nav.Link  href="tracking">Tracking</Nav.Link>
    <Nav.Link style={{color:"gold"}} href="about">About</Nav.Link>
    <Nav.Link href="contact">Contact</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
      <div className='div1'>
    <h1 className='text'>OUR JOURNEY</h1>
    <p className='text1'>Globa logistics underpins development and growth. An endless choreography of goods and services, it supports our economies, our partnerships, our ways of life. But when the connections become weak, so does our ability to grow, and thrive, together.
At Globa Delivery, our vision is to transform the flow of the foods, goods, data and materials that sustain people, businesses and economies the world over. To enable the exchange of ideas, culture and trust for a truly integrated world where value is created for everyone.</p>
    </div>
    {/* <div style={{width:"100%", height:1, backgroundColor:'black', marginTop:50, }}></div> */}

    <div className='boxz'>
      <div className='debox'>
      <p className=''>OUR MISSION</p>
      <h3 className='fwdtext22' style={{}}>
         We Deliver Exceptional Products and Services Around the World
         </h3>
         <p style={{padding:"1%"}}>It's a mindset and a promise. It’s our commitment to connect and simplify global logistics so it works better for businesses, society and our planet. And it's what it takes to make that happen.</p>
         <p style={{padding:"1%"}}> Global markets are evolving fast, and so are our customers’ requirements for seamless services that enable greater flexibility. The biggest challenge they face is outdated and siloed supply chain infrastructure.</p>
      </div>

      <div className='debox2'>

        <img className='imageshow'
         src={ABUT} alt=""/>
        </div>
    </div>

    <div className='boxz' style={{marginTop:"1%"}}>
      <div className='debox2'>

      <img className='imageshow'
         src={ABUT2} alt=""/>
      </div>

      <div className='debox' style={{padding:"7%"}}>
      {/* <p className=''>Pation</p> */}
      <h3 className='fwdtext22' style={{}}>
      We are committed to sustainable growth
         </h3>
         <p >Our purpose serves as the foundation and compass guiding our work towards a world where global trade distributes economic and social benefits, without negatively impacting individuals, communities or the environment.
This is why sustainability is integrated into our purpose. Because real shared value can only be delivered through logistics solutions that are digitised, integrated, decarbonised and democratised – so that global trade is inclusive and sustainable, and the benefits are felt by as many people as possible</p>
         <button onClick={()=>nav("/moreinfor")} style={{border:"none", backgroundColor:"transparent", marginBottom:"2%", fontWeight:"bolder"}} >Read More→</button>
        </div>
    </div>


    <div className='abs'>
      <h3 style={{marginTop:"3%"}}>Learn More About Shipment & Container Tracking</h3>
      <p1 style={{width:"80%",}}>Our service to the global integrator of container logistics. It’s not only about helping our customers source, manufacture and sell their products, it’s about empowering them to access and contribute to a fairer and more sustainable economy.</p1>
      <button onClick={()=>nav("/service")} style={{border:"none", backgroundColor:"transparent", marginBottom:"2%", fontWeight:"bolder"}} >Read More→</button>

    </div>

    <div className='bbbi'>
      
    </div>

   
   <div className='downbar'>
     <div className='downstyle'>
     <h6>About</h6>
     <h6>Contact</h6>
     <h6>Tell: &nbsp;&nbsp;&nbsp;&nbsp; <br/>+447983684122</h6>  
     <h6>Email: &nbsp;&nbsp;&nbsp;&nbsp; <br/>customercare@fastreliabledelivery.com</h6>  
     <h6>Address: &nbsp;&nbsp;&nbsp;&nbsp; <br/>Francois St San Francisco, CA 94158</h6> 
     © 2023 by F.R.D.S
     </div>
    </div>
    </div>
  )
}

export default About