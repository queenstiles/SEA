import React, {  useState, useEffect} from 'react'
import {useNavigate, useLocation } from "react-router-dom";
import "../Track/tracking.css";
import firebase from "firebase";
import { Oval } from 'react-loader-spinner'
import Modal from 'react-modal';
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function Tracking() {

  const [modalIsOpen, setIsOpen] = useState(false);
    let nav = useNavigate();
    const [trackinput, setTrackinput] = useState('')
    const [data, setData]= useState('')
    const [err, setErr] = useState(false);
    const [errc, setErrc] = useState(false);

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

    function Track() {
      setErrc(false)
      setErr(false)
      if(!trackinput){
        setErrc(true)
        if(errc){
          alert('enter a vaild tracking ID')
        }
      }else{
        setIsOpen(true)
        firebase.firestore().collection("Tracking").doc(trackinput)
        .get().then((doc) => {
          if (doc.exists) {
            setIsOpen(false)
            nav("/trackingcode" , { state: doc.data() })
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              // setIsOpen(false)
              setErr(true)
              setErrc(true)
          }
      }).catch((error) => {
        setIsOpen(false)
          alert("Error getting document:", error);
      });
      }
     }
     
  return (
    <div className='tracking'>
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
    <Nav.Link style={{color:"gold"}}  href="tracking">Tracking</Nav.Link>
    <Nav.Link  href="about">About</Nav.Link>
    <Nav.Link  href="contact">Contact</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>

<div>
<h2 className='shl' style={{fontFamily:"revert", marginTop:"2%"}}>Shipment & Container Tracking</h2>
        <div className='trans1'>
        <div className=''>
          <h3 style={{padding:"5%", fontFamily:"revert"}}>Enter your tracking code.</h3>
          <div>
          <input style={{borderColor:errc? "red": "black"}} onChange={((e)=>setTrackinput(e.target.value))} className="input22" type="text" placeholder='Enter Tracking code/ID' name="tracking code input"/>
          </div>
    <button style={{color:errc? "red": "black"}} onClick={Track } className='bott'>Track→</button>
   </div>
   <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <Oval
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle={{ display:"flex", alignItems:"center", justifyContent:"center"}}
  wrapperClass
/>
      </Modal>
   <h5><u>What is a shipment or container number?</u></h5>
   <h6 style={{margin:"3%", fontFamily:"revert"}}>A container number is a unique number made up of 4 letters  and 8-10 numbers printed on your booking forms and on the top right of every container door.</h6>
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

export default Tracking