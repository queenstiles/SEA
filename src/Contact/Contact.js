import React, {  useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../Contact/contact.css";
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase";


function Contact() {
    let nav = useNavigate();
    const [address, setAddress]= useState('')
    const [email, setEmail]= useState('')
    const [name, setName]= useState('')
    const [request, setRequest]= useState('')
    const [country, setCountry]= useState('')

    function Send() {
        if(name && email && address && request && country){
          firebase.firestore().collection("contact").doc(name).set({
            name: name,
            country: country,
            address: address,
            email: email,
            request: request,
            date: Date()
        })
        .then(() => {
            alert("Request sent successfully");
            nav("/")
          
        })
        .catch((error) => {
           alert("Error writing document: ", error);
        });
        }else{
          alert("all fields required")
        }
        
      }

  return (
    <div>  
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
    <Nav.Link  href="about">About</Nav.Link>
    <Nav.Link style={{color:"gold"}} href="contact">Contact</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
    <div>
        <h2 style={{marginLeft:"10%", fontSize:"290%", marginTop:"10%"}}>Contact Us</h2>
        <div style={{width:"50%", marginLeft:"10%"}}>
        <p1 >Information is key to make decisions on the go. That’s why, our dedicated team of experts are here for you. Do reach out to us, should you need any intel from your cargo status to our solutions, and we’ll be happy to help you out.</p1>
        </div>
        <div style={{width:"50%", marginLeft:"10%", marginTop:"10%"}}>
        <p1>We’re only a click away!</p1>
    </div>
     <div style={{marginLeft:"3%", display:"flex", justifyContent: 'center',  flexDirection:"column",  marginTop:"2%"}}>
        <input  onChange={((e)=>setName(e.target.value))}  className='loginput22'  type="name" placeholder='Full Name' name="name"/> 
        <input  onChange={((e)=>setCountry(e.target.value))} className='loginput22'  type="country" placeholder='Country' name="country"/>
        <input  onChange={((e)=>setAddress(e.target.value))} className='loginput22'  type="address" placeholder='Address' name="address"/>
        <input onChange={((e)=>setEmail(e.target.value))}  className='loginput22'  type="email" placeholder='Email' name="email"/>
        <textarea name="body"
        className='loginput22'
        style={{height:50}}
           placeholder='What can we do for you?'
           onChange={((e)=>setRequest(e.target.value))}
            />
              <button onClick={Send}  style={{ marginBottom:"5%", height:30, width:"20%", backgroundColor:'black', color:"white"}}>Send</button>
       
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

export default Contact