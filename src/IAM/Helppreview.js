import React, { useEffect, useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import firebase from "firebase";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import HHP from "../Home/shiip.png"

function Helppreview() {
    let location = useLocation();
    let nav = useNavigate();
    const [data, setData]= useState('')
    const [modalIsOpen, setIsOpen] = useState(false);


    useEffect(()=>{
        setData(location.state)
      })

      useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
          if (!user){nav("/iam")}
        });
      })

      function Delete(id) {
        setIsOpen(true);
        firebase.firestore().collection("contact").doc(location.state.name)
        .delete().then(() => {
          
        alert("successfully deleted!");
        setIsOpen(false);
        nav('/iamhome')
      }).catch(() => {
          alert("Error deleting items! ");
          setIsOpen(false);
      });
      
       }
  return (
    <div >

<Navbar bg="color" variant="red" sticky="top" expand="lg">
  <Navbar.Brand>
    <img className="logo-image" src={HHP}/>
    <h6 className='logotext'>F.R.D.S</h6>
  </Navbar.Brand>
  <Navbar.Toggle style={{ marginRight:"5%"}}/>
  <Navbar.Collapse>
  <Nav className="move">
    
    <Nav.Link   href="iamhome">All Shipment</Nav.Link>
    <Nav.Link   href="add">Add Shipment</Nav.Link>
    <Nav.Link style={{color:"gold"}} href="booking">Booking</Nav.Link>
    <Nav.Link  href="help">Help Center</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
        <div className='h'>
     
       <button className='hbut'>Help Information</button> 
        </div>
          
        <div style={{marginLeft:"4%"}}>
        <h5 style={{ textAlign:"start" }}>Name: {location.state.name} {location.state.lastname}</h5>
          <h5 style={{textAlign:"start",}}>Country: {location.state.country}</h5>
           <h5 style={{textAlign:"start",}}>Address: {location.state.address}</h5>
         <h5 style={{textAlign:"start",}}>Email: {location.state.email}</h5>
           <h5 style={{textAlign:"start",}}>Request: {location.state.request}</h5>

    </div>
    <button className='hbut' onClick={Delete} style={{color:"white", marginTop:"3%", fontWeight:"bolder", backgroundColor:"red"}}>DELETE BOOKING REQUEST</button>

    </div>
  )
}


export default Helppreview