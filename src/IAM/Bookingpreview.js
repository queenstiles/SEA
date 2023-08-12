import React, { useEffect, useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import firebase from "firebase";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import HHP from "../Home/shiip.png"

function Bookingpreview() {
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

      function DELETE() {
        setIsOpen(true)
        firebase.firestore().collection('Booking').doc(data.phone).delete()
        .then(() => {
            setIsOpen(false)
           alert("Booking successfully deleted!");
           nav("/iamhome")
        }).catch((error) => {
            setIsOpen(false)
            alert("Error removing document: ", error);
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
<div className='tablediv'>
   <table className='table'>
<tr bgcolor='gray'>
  <th className='th' >Name</th>
  <th  className='th'>Phone Number</th>
  <th  className='th'>Email</th>
  <th  className='th'>Discription</th>
  <th  className='th'>Mode</th>
  <th  className='th'>Location</th>
 
</tr>


  <tr className='tr' bgcolor='lightgray' key={location.state.trackingcode}>
  <td className='td'>{location.state.name}</td>
  <td className='td'>{location.state.phone}</td>
  <td className='td'>{location.state.email}</td>
  <td className='td'>{location.state.discription}</td>
  <td className='td'>{location.state.mood}</td>
  <td className='td'>{location.state.location}</td>
  </tr>
 
   </table>
        </div>
        <button className='hbut' onClick={DELETE} style={{color:"white", marginTop:"3%", fontWeight:"bolder", backgroundColor:"red"}}>DELETE BOOKING REQUEST</button>
    </div>

  )
}

export default Bookingpreview