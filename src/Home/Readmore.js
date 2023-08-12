import React from 'react'
import "../Home/readmore.css";
import { useNavigate } from "react-router-dom";
import ST from "../Home/sssttt.jpg";
import ST2 from "../Home/thee.jpg"; 
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function Readmore() {
    let nav = useNavigate();
  return (
    <div className='read'>
 <Navbar bg="color" variant="red" sticky="top" expand="lg">
  <Navbar.Brand>
    <img className="logo-image" src={HHP}/>
    <h6 className='logotext'>F.R.D.S</h6>
  </Navbar.Brand>
  <Navbar.Toggle style={{ marginRight:"5%"}}/>
  <Navbar.Collapse>
  <Nav className="move">
    
    <Nav.Link style={{color:"gold"}}  href="/">Home</Nav.Link>
    <Nav.Link  href="service">Service</Nav.Link>
    <Nav.Link  href="tracking">Tracking</Nav.Link>
    <Nav.Link href="about">About</Nav.Link>
    <Nav.Link href="contact">Contact</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
{/* <div style={{marginTop:"41%"}}></div> */}
   
    <div className='boxzs1' style={{marginTop:"30%"}} >
      <div style={{color:"transparent"}}>ghgd</div>
      <div style={{backgroundColor:"white", height:130}}>
      <h1 >Global Supply Chain Management</h1> 
    <h3>Get unprecedented control over your end-to-end supply chain.</h3>
      </div>

    <div className='inboxx' >
      <div className='a1'>
        <div style={{backgroundColor:"white"}}>
        <h5 style={{textAlign:"center", marginLeft:"3%"}}>Building solutions that meet  your diverse business needs</h5>
      <div style={{marginTop:"5%",margin:"3%"}}>
         <p1 style={{textAlign:"left", marginLeft:"3%", }}>As a Fast Reliable Delivery customer, you can get your global supply chain in sync by letting us handle the movement of goods from production to distribution to their final destinations. Moreover, the integrated supply chain management technology also allows us to tailor our services whenever you need it. We meet your needs and go beyond, taking care of your cargo and data flows. <br/>
         Amidst growing competition and rapidly changing market conditions, you need a lead logistics provider to manage your supply chain partners. F.R.D.S logistics services take away the complexity of supply chain from your routine so that you can focus better on your core business.</p1>
         </div>
         <div style={{marginTop:"5%",margin:"3%"}}>
         <p1 >&nbsp;Visibility to link with your logistics stakeholders to recognise issues and plan cost-effective solutions.</p1>
         </div>
        </div>
     
      </div>
      <div className='a2'>
      <img style={{marginTop:"2%"}}  className="STV"
         src={ST} alt=""/>
         <h4 style={{margin:"3%"}}><u>Supply Chain</u></h4>
         <div style={{marginTop:"5%",margin:"3%"}}>
         <p1>For Syngenta, a leading agriculture company, the goal was two-fold: commit to reducing their carbon footprint and help customers produce food more sustainably. We realised the need to become an integral part of their mission and merge into their eco-system.</p1>
          </div>
          <div style={{marginTop:"5%",margin:"3%"}}>
         <p1>The first-of-its-kind solution which covers your physical and digital logistics world to give you end-to-end transparency, control, and decision-making capabilities. Backed by our expert supply chain advice, welcome to a true paradigm shift in the supply chain industry.</p1>
          </div>
          <div style={{marginTop:"5%",margin:"3%"}}>
            <button onClick={()=>nav('/contact')}  style={{backgroundColor:"white", height:30, borderRadius:10}}>Contact Us</button>
                    </div>
                    <div style={{marginTop:"10%",marginTop:"10%"}}>
          <h3>Keep your supply chain flowing at a pace that suits your business</h3>
          </div>
          <div style={{marginTop:"5%",margin:"3%"}}>
<p1>          Ever-changing needs of customers require businesses to be resilient – and having access to strategically located warehouses go a long way in establishing strong global and regional footprints. With facilities that are capable of receiving, storing, processing and dispatching cargo, you can build flexibility and resilience into your supply chain.          </p1>         
 </div>
 <div style={{marginTop:"5%",margin:"3%"}}>
        <p1>Our logistics know-how can help your business find lean, quick and efficient methods for consolidation, deconsolidation and fulfilment of your goods. Manage your capacities with warehouse spaces that provide greater flexibility</p1> 
        </div>
        <div style={{marginTop:"10%",marginTop:"20%"}}>
          <h3>WHY FAST RELIABLE DELIVERY</h3>
          <div style={{marginTop:"5%",margin:"3%"}}>
<p1>You can enhance efficiency of your supply chain and get your products faster to market. Our scalable warehousing and distribution services can help you transport, fulfil, manage and power your logistics from end to end, and make your products easily accessible to your customers.</p1>         
 </div>
 <img  className="STV"
         src={ST2} alt=""/>
         <div style={{marginTop:"5%",margin:"3%"}}>
<p1>Our global footprint and extensive network means we have facilities ready to handle your supply chain, whether at origin or destination. By combining shipping with warehousing and distribution, you benefit from a seamless end-to-end solution with fewer logistic service providers. Complexity is reduced, and you gain speed, control and visibility.</p1> 
</div>
<div style={{marginTop:"5%",margin:"3%"}}>
<p1>A warehouse perfectly placed and connected to your sourcing areas can combine materials and goods pre-export, helping you optimise your landside movements and container loads.</p1>
</div>

<div style={{marginTop:"5%",margin:"3%"}}>
<p1>Our portfolio comprises bonded and non-bonded warehouses, facilities located within free trade zones, and others near/within ports for easy transfer to ship.</p1></div>
<div style={{marginTop:"5%",margin:"3%"}}>
<p1>We offer domestic and regional/international consolidation, including multi-country consolidation. Offered at several international hubs, including our major East-West transshipment hub at Tanjung Pelepas in Malaysia, these facilities offer multi-country consolidation and a host of product value-added services, within the free trade zone.</p1>        </div>
<div style={{marginTop:"5%",margin:"3%"}}>
 <button onClick={()=>nav("/tracking")} style={{ borderRadius:10, height:30, borderColor:'black', backgroundColor:"white"}}>Track Shippment</button>
 </div>
           
        </div>
          </div>
      </div>
    </div>
    <div className='downbar'>
     <div className='downstyle' >
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

export default Readmore;