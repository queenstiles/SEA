import React, {  useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import firebase from "firebase";
import "../Service/inland.css";
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function Inland() {
    let nav = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData]= useState([])
    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [location, setLocation]= useState('')
    const [discription, setDiscription]= useState('')

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    function SAVE() {
      setIsOpen(true)
      firebase.firestore().collection('Booking').doc(phone).set({
        name: name,
        phone: phone,
        location: location,
        discription: discription,
        createdAt: new Date(),
        mood: 'Inland'

    })
    .then((y) => {
        console.log("Document successfully written!");
        setIsOpen(true)
        alert('your request has been sent!!')
        nav("/service")
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    }
  return (
    <div className='inland'>
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
    <h3 style={{padding:"2%"}} >Logistics solutions that fit your specific business needs and drive your growth.</h3>
    <div className='dispp'>
    <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle={{ display:"flex", alignItems:"center", justifyContent:"center"}}
  wrapperClass
/>
      </Modal>
        
<div className='bloxx1' >

         <h2>​Inland Transport</h2>
         <p1 style={{marginBottom:"5%", padding: "5%", fontSize:20, }}>Your cargo journeys rarely begin or end at the ports. As a leading logistics integrator with an unrivalled global network, we offer end-to-end shipping solutions that are second-to-none. Fastreliable Delivery Service landside transportation connects key service hub points and major container ports with each other and the rest of the world. With rail coverage, trucking, barge and depots, you don’t need to transact with multiple suppliers or coordinate several handovers. Experience the comfort of end-to-end deliveries with just a single partner, and make your supply chain work to your competitive advantage.</p1>
<i style={{marginBottom:"5%",}}>Every supply chain is unique, and so are your business requirements. We understand it, which is why we are committed to being an integrator of end-to-end logistics services. This implies offering different solutions that can cater to your every individual supply chain need..</i>
         <button onClick={()=>nav("/tracking")} style={{marginBottom:"5%", borderRadius:10, height:30, borderColor:'black', backgroundColor:"transparent"}}>Track Shippment</button>
</div>
<div className='bloxx2'>
         <h2>Book</h2>
         <p1 style={{marginBottom:"5%", padding: "5%"}}>Our Inland Delivery  are designed to address your broader logistics concerns. They are scalable according to your cargo, routes, business process or market changes.</p1>
         <div className='formx'>
         <input className='forminput'  onChange={((e)=>setName(e.target.value))}  type="text" placeholder='Name' name="tracking code input"/>
        <input className='forminput'   onChange={((e)=>setPhone(e.target.value))}  type="number" placeholder='Phone number' name="tracking code input"/>
        <input className='forminput'    onChange={((e)=>setLocation(e.target.value))} type="text" placeholder='Location' name="tracking code input"/>
        <textarea className='forminput'  onChange={((e)=>setDiscription(e.target.value))} name="body" placeholder='Item description'
                />
         </div>
         
         <button onClick={SAVE}  style={{marginBottom:"5%", borderRadius:10, height:30, borderColor:'black', backgroundColor:"transparent"}}>Send Request</button>
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

export default Inland