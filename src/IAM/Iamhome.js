import React, {  useState, useEffect} from 'react'
import '../IAM/iamhome.css';
import Addshipment from './Addshipment';
import { Link, useNavigate } from "react-router-dom";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import firebase from "firebase"; 
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import HHP from "../Home/shiip.png"


function Iamhome() {
    let nav = useNavigate();
    const [all, setAll]= useState('')
    const [add, setAdd]= useState('')
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
      firebase.auth().onAuthStateChanged((user) => {
        if (!user){nav("/iam")}
      });
    })

    useEffect(()=>{
       let firebasedata=[]
      firebase.firestore().collection("Tracking")
      .orderBy("createdAt", "desc")
      .get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebasedata.push(doc.data())
       setData(firebasedata)
    });
  
});
    },[])

    const ll = data.map(item=>{
      console.log(item)
      return(
        <div onClick={()=> nav("/trackinpreview" , { state: item})} key={item.trackingcode} style={{backgroundColor:"gray", color:"white", height:70, flexDirection:"row", display:"flex", marginTop:"1%"}}> 
        <div  style={{ marginLeft:"5%"}}>
        <h5 style={{ marginLeft:"5%",  width:"100%"}}> ID: <br/> {item.trackingcode}</h5>
        </div>
        <div style={{marginLeft:"5%"}}>
        <h5 style={{ marginLeft:"5%",  width:"100%"}}> Sender Name: <br/> {item.senderfullname}</h5>
        </div>

        <div style={{marginLeft:"5%"}}>
        <h5 style={{ marginLeft:"5%", width:"100%"}}> Status: <br/> {item.goodsstatus}</h5>
        </div>
        
          
        </div>
        
      )
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
    
    <Nav.Link  style={{color:"gold"}} href="iamhome">All Shipment</Nav.Link>
    <Nav.Link   href="add">Add Shipment</Nav.Link>
    <Nav.Link  href="booking">Booking</Nav.Link>
    <Nav.Link  href="help">Help Center</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
   
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
  <th className='th' >ID</th>
  <th  className='th'>Name</th>
  <th  className='th'>Location</th>
  <th  className='th'>Delivery Date</th>
  <th  className='th'>Receiver Email</th>
  <th  className='th'>Update Shipment</th>
</tr>

      {
     data.map((x, y)=>{
return(
  <tr className='tr' bgcolor='lightgray' key={y}>
  <td className='td'>{x.trackingcode}</td>
  <td className='td'>{x.senderfullname}</td>
  <td className='td'>{x.receivercountry}</td>
  <td className='td'>{x.goodsdeliverydate}</td>
  <td className='td'>{x.receiveremail}</td>
  <td className='td'><button onClick={()=> nav("/trackinpreview" , { state: x})} className='BUT'>Edit Shipment</button></td>
  </tr>
)
     }) 
      }
 
   </table>
        </div>
        </div>
  )
}

export default Iamhome