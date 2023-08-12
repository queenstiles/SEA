import React, {  useState, useEffect} from 'react'
import '../IAM/iamhome.css';
import Addshipment from './Addshipment';
import { useNavigate } from "react-router-dom";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import firebase from "firebase";
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import HHP from "../Home/shiip.png"

function Booking() {
    let nav = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData]= useState([])


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


      useEffect(()=>{
        let firebasedata=[]
       firebase.firestore().collection("Booking")
       .orderBy("createdAt", "desc")
       .get().then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
       firebasedata.push(doc.data())
        setData(firebasedata)
     });
   
 });
     },[])


useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if (!user){nav("/iam")}
    });
  })


  return (
    <div className='iamhome' >
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
     
       <button className='hbut'>Booking</button> 
        </div>
        

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
      <div className='tablediv'>
   <table className='table'>
<tr bgcolor='gray'>
  <th  className='th'>Name</th>
  <th  className='th'>Phone Number</th>
  <th  className='th'>Email</th>
  <th  className='th'>Location</th>
  <th  className='th'>Open</th>
</tr>

      {
     data.map((x, y)=>{
return(
  <tr className='tr' bgcolor='lightgray' key={y}>
  <td className='td'>{x.name}</td>
  <td className='td'>{x.phone}</td>
  <td className='td'>{x.email}</td>
  <td className='td'>{x.location}</td>
  <td className='td'><button onClick={()=> nav("/bookingpreview" , { state: x})} className='BUT'>Open Request</button></td>
  </tr>
)
     }) 
      }
 
   </table>
        </div>
        </div>
  )
}

export default Booking