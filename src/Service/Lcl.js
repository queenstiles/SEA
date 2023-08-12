import React, {  useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import firebase from "firebase";
import "../Service/lcl.css";
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";


function LCL() {
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
        mood: 'LCL'

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
    <div className='lcl'>
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
    <h3>Less is more</h3>
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

         <h2>Less than Container Load (LCL)</h2>
         <p1 style={{marginBottom:"5%", padding: "5%", fontSize:20, }}>You may not always have shipments large enough to occupy an entire standard-sized cargo container, but the great news is that you no longer need to. Fast-way delivery Less-than-Container Load (LCL) service takes care of your small-volume shipment by consolidating it with other shipments, to ensure on-time departures.
At Fast-way delivery, we go all the way to ensure that our LCL solutions offer end-to-end flexibility, reliability, transparency and ease of operation.
Enjoy access to over 10,000 trade corridors across the world using our Fast-way delivery LCL network of services. Integrate, simplify, and connect your Fast-way delivery logistics with a single point of contact.</p1>
         <button onClick={()=>nav("/tracking")} style={{marginBottom:"5%", borderRadius:10, height:30, borderColor:'black', backgroundColor:"transparent"}}>Track Shippment</button>
</div>
<div className='bloxx2'>
         <h2>Book</h2>
         <p1 style={{marginBottom:"5%", padding: "5%"}}>
         Our LCL services are designed to simplify your logistics needs reliably and seamlessly, so you pay for and ship only what you need to.</p1>
         <div className='formx'>
         <input className='forminput'  onChange={((e)=>setName(e.target.value))}  type="text" placeholder='Name' name="tracking code input"/>
        <input className='forminput'   onChange={((e)=>setPhone(e.target.value))}  type="number" placeholder='Phone number' name="tracking code input"/>
        <input className='forminput'    onChange={((e)=>setLocation(e.target.value))} type="text" placeholder='Location' name="tracking code input"/>
        <textarea className='forminput'  onChange={((e)=>setDiscription(e.target.value))} name="body" placeholder='Item description'
                />
         </div>
         
         <button  onClick={SAVE}   style={{marginBottom:"5%", borderRadius:10, height:30, borderColor:'black', backgroundColor:"transparent"}}>Send Request</button>
</div>
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

export default LCL