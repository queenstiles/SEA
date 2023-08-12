import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../Service/service.css";
import OOP from "../Service/OOP.jpg";
import OOP2 from "../Service/OOP2.jpg";
import OOP3 from "../Service/OOP3.jpg";
import OOP4 from "../Service/OOP4.webp";
import OOP5 from "../Service/OOP5.jpg";
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";


function Service() {
    let nav = useNavigate();
  return (
    <div className='servicess'>
        <Navbar bg="color" variant="red" sticky="top" expand="lg">
  <Navbar.Brand>
    <img className="logo-image" src={HHP}/>
    <h6 className='logotext'>F.R.D.S</h6>
  </Navbar.Brand>
  <Navbar.Toggle style={{ marginRight:"5%"}}/>
  <Navbar.Collapse>
  <Nav className="move">
    
    <Nav.Link   href="/">Home</Nav.Link>
    <Nav.Link style={{color:"gold"}}  href="service">Service</Nav.Link>
    <Nav.Link  href="tracking">Tracking</Nav.Link>
    <Nav.Link  href="about">About</Nav.Link>
    <Nav.Link  href="contact">Contact</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
    <div className='serv'>
        <h2 style={{color:'white', marginTop:"5%"}}> <i>Transportation Services</i></h2>
    </div>
    <div className='texx'>
    <Link style={{ color:'white', textAlign:"center", fontWeight:"bolder"}}  >Regardless of your industry, your commodity, or your key markets, Globa Delivery has solutions that offer both small and large businesses the opportunity to grow. We serve our customers with frequent departures on all major trade lanes and inland services for a true end-to-end experience.</Link>
    </div>
    <div className='disp'>
     
        
 <div className='blox1' >
<img  className="bloximage"
         src={OOP} alt=""/>
         <h2 className='h'> <u>Ocean Transport</u></h2>
         <p1 className="p" style={{marginBottom:"5%", padding: "5%",}}>As the world's best container shipping company, we move millions of containers every year and deliver to every corner of the globe.</p1>
         <button onClick={()=>nav("/ocean")} style={{marginBottom:"5%", borderRadius:0, height:30, borderColor:'black', backgroundColor:"transparent"}}>Get Started</button>
</div>
<div className='blox1'>
<img  className="bloximage"
         src={OOP2} alt=""/>
         <h2 className='h'> <u> Air Freight</u></h2>
         <p1 className='p' style={{marginBottom:"5%", padding: "5%"}}>Reduce the cost of transporting your urgent or time critical cargo with our Fastreliable Delivery Service Air Freight solutions. get started with Globa Delivery</p1>
         <button onClick={()=>nav("/air")} style={{marginBottom:"5%", borderRadius:0, height:30, borderColor:'black', backgroundColor:"transparent"}}>Get Started</button>
</div>

<div className='blox1' >
        <img  className="bloximage"
                 src={OOP3} alt=""/>
                 <h2 className='h'> <u>Inland Transport</u></h2>
                 <p1 className='p' style={{marginBottom:"5%", padding: "5%" }}>Logistics solutions that fit your specific business needs and drive your growth.</p1>
                 <button onClick={()=>nav("/inland")}  style={{marginBottom:"5%", borderRadius:0, height:30, borderColor:'black', backgroundColor:"transparent"}}>Get Started</button>
        </div>

        <div className='blox1'>
        <img  className="bloximage"
                 src={OOP4} alt=""/>
                 <h2 className='h'> <u>Intercontinental Rail</u></h2>
                 <p1 className='p' style={{marginBottom:"5%", padding: "5%"}}>As a dedicated service or as part of a multi modal solution, rail offers faster time-to-market than ocean at substantially lower cost than air freight.</p1>
                 <button onClick={()=>nav("/rail")} style={{marginBottom:"5%", borderRadius:0, height:30, borderColor:'black', backgroundColor:"transparent", }}>Get Started</button>
        </div>

        {/* style={{marginBottom:"20%"}} */}

        <div className='blox1'  >
        <img  className="bloximage"
                 src={OOP5} alt=""/>
                 <h2 className='h'> <u>Less than Container Load</u> (LCL)</h2>
                 <p1 className='p' style={{marginBottom:"5%", padding: "5%" }}>Our LCL services range from the co-ordination of single LCL shipments all the way to multi-country consolidation and provide you with fixed weekly sailing schedule with high transit-time reliability.</p1>
                 <button onClick={()=>nav("/lcl")} style={{marginBottom:"5%", borderRadius:0, height:30, borderColor:'black', backgroundColor:"transparent", }}>Get Started</button>
        </div>




            </div>
            <div className='downbar'>
     <div className='downstyle'>
     <h6>About</h6>
     <h6>Contact</h6>
     {/* <h6>Tell: &nbsp;&nbsp;&nbsp;&nbsp; <br/>+447983684122</h6>   */}
     <h6>Email: &nbsp;&nbsp;&nbsp;&nbsp; <br/>customercare@fastreliabledelivery.com</h6>  
     <h6>Address: &nbsp;&nbsp;&nbsp;&nbsp; <br/>Francois St San Francisco, CA 94158</h6> 
     © 2023 by F.R.D.S
     </div>
    </div>
    </div>
  )
}

export default Service