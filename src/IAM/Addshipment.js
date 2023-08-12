import React, {  useState, useEffect, } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../IAM/addshipment.css";
import firebase from "firebase";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import HHP from "../Home/shiip.png"


function Addshipment() {


  const [all, setAll]= useState('')
    let nav = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [senderfullname, setSenderfullname]= useState('')
    const [sendercountry, setSendercountry]= useState('')
    const [senderphonenumber, setSenderphonenumber]= useState('')
    const [senderemail, setSenderemail]= useState('')

    const [receiverfullname, setReceiverfullname]= useState('')
    const [receivercountry, setReceivercountry]= useState('')
    const [receiverstate, setReceiverstate]= useState('')
    const [receiveraddress, setReceiveraddress]= useState('')
    const [receiverphonenumber, setReceiverphonenumber]= useState('')
    const [receiveremail, setReceiveremail]= useState('')
    
    const [goodspackage, setGoodspackage]= useState('')
    const [goodsstatus, setGoodsstatus]= useState('')
    const [goodscarrier, setGoodscarrier]= useState('')
    const [goodsweight, setGoodsweight]= useState('')
    const [goodsmood, setGoodsmood]= useState('')
    const [goodsqty, setGoodsqty]= useState('')
    const [goodspayment, setGoodspayment]= useState('')
    const [goodsdeparture, setGoodsdeparture]= useState('')
    const [goodsdeliverydate, setGoodsdeliverydate]= useState('')
    const [goodscomment, setGoodscomment]= useState('')
    const [goodsprogress, setGoodsprogress]= useState('')
    const [postcode, setPostcode]= useState('')

    
    useEffect(()=>{
      firebase.auth().onAuthStateChanged((user) => {
        if (!user){nav("/iam")}
      });
    })
    

    function getRandomNumber() {
      let min = 1000;
      let max = 1234567893;
     let a = Math.round(Math.random() * (max - min) + min);
     setAll(a)
  }

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
    // setIsOpen(true)
    firebase.firestore().collection('Tracking').doc('AA'+all+"GB").set({
      senderfullname: senderfullname,
      sendercountry: sendercountry,
      senderphonenumber: senderphonenumber,
      senderemail: senderemail,
      receiverfullname: receiverfullname,
      receivercountry: receivercountry,
      receiverstate: receiverstate,
      receiveraddress: receiveraddress,
      receiverphonenumber: receiverphonenumber,
      receiveremail: receiveremail,
      goodspackage: goodspackage,
      goodsstatus: goodsstatus,
      goodscarrier: goodscarrier,
      goodsweight: goodsweight,
      goodsmood: goodsmood,
      goodsqty: goodsqty,
      goodspayment: goodspayment,
      goodsdeparture: goodsdeparture,
      goodsdeliverydate: goodsdeliverydate,
      goodscomment: goodscomment,
      goodsprogress: goodsprogress,
      postcode: postcode,
      trackingcode: 'AA'+all+'GB',
      createdAt: new Date()
  })
  .then(() => {
      console.log("Document successfully written!");
      setIsOpen(true)
      alert('Shipment Added')
      nav("/iamhome")
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
  }
  useEffect(()=>{
     getRandomNumber();
  },[])
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
    <Nav.Link style={{color:"gold"}}  href="add">Add Shipment</Nav.Link>
    <Nav.Link  href="booking">Booking</Nav.Link>
    <Nav.Link  href="help">Help Center</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
        <div className='h'>
       <button  className='hbut'>Add Shipment</button>
        </div>

        <div className='tcode'>
    <h2>Tracking Code:</h2> 
    <h2 style={{marginLeft:"5%"}}> AA{all}GB</h2> 
        </div>
        <div style={{width:"100%", height:3, backgroundColor:'black', }}></div>

        <div className='details'>
          <h3>Sender Information</h3>
            Full name
          <input onChange={((e)=>setSenderfullname(e.target.value))} className='shipform'  type="name"  name="name"/>

          Country
          <input onChange={((e)=>setSendercountry(e.target.value))} className='shipform'  type="name"  name="name"/>
           
          Phone Number
          <input onChange={((e)=>setSenderphonenumber(e.target.value))} className='shipform'  type="number"  name="number"/>

          Email
          <input onChange={((e)=>setSenderemail(e.target.value))} className='shipform'  type="email"  name="email"/>
         
        </div>

        <div style={{width:"100%", height:1, backgroundColor:'black', marginTop:"5%"}}></div>

<div className='details'>
  <h3>Receiver Information</h3>
    Full name
  <input onChange={((e)=>setReceiverfullname(e.target.value))} className='shipform'  type="name"  name="name"/>

  Country
  <input onChange={((e)=>setReceivercountry(e.target.value))} className='shipform'  type="name"  name="name"/>

  State/city
  <input onChange={((e)=>setReceiverstate(e.target.value))} className='shipform'  type="name"  name="name"/>

  Home Address
  <input onChange={((e)=>setReceiveraddress(e.target.value))} className='shipform'  type="name"  name="name"/>
   
  Postcode
  <input onChange={((e)=>setPostcode(e.target.value))} className='shipform'  type="number"  name="number"/>

  Phone Number
  <input onChange={((e)=>setReceiverphonenumber(e.target.value))} className='shipform'  type="number"  name="number"/>

  Email
  <input onChange={((e)=>setReceiveremail(e.target.value))} className='shipform'  type="email"  name="email"/>
 
</div>

<div style={{width:"100%", height:1, backgroundColor:'black', marginTop:"5%"}}></div>

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



<div className='details'>
  <h3>Goods Information</h3>
  Package
  <input onChange={((e)=>setGoodspackage(e.target.value))} className='shipform'  type="text"  name="name"/>

  Status
  <input onChange={((e)=>setGoodsstatus(e.target.value))} className='shipform'  type="text"  name="name"/>

  Carrier
  <input onChange={((e)=>setGoodscarrier(e.target.value))} className='shipform'  type="text"  name="name"/>

  Weight
  <input onChange={((e)=>setGoodsweight(e.target.value))} className='shipform'  type="text"  name="name"/>
   
  Shipment Mode
  <input onChange={((e)=>setGoodsmood(e.target.value))} className='shipform'  type="text"  name="number"/>

  Qty
  <input onChange={((e)=>setGoodsqty(e.target.value))} className='shipform'  type="number"  name="text"/>

  Payment Mode
  <input onChange={((e)=>setGoodspayment(e.target.value))} className='shipform'  type="text"  name="text"/>
  
  Departure Time
  <input onChange={((e)=>setGoodsdeparture(e.target.value))} className='shipform'  type="date" placeholder='YYYY-MM-DD'  name="text"/>

  Expected Delivery Date
  <input onChange={((e)=>setGoodsdeliverydate(e.target.value))} className='shipform'  type="date" placeholder='YYYY-MM-DD'  name="text"/>

  Comments
  <input onChange={((e)=>setGoodscomment(e.target.value))} className='shipform'  type="text"  name="email"/>

  Shipping Progress
  <input onChange={((e)=>setGoodsprogress(e.target.value))} className='shipform'  type="number"  name="number"/>


 
</div>
 
 <div className='savekey'>
  <h5>please re-check information before saving </h5>
  <button className='hbut' onClick={SAVE} style={{color:"white", fontWeight:"bolder"}}>SAVE SHIPMENT</button>
 </div>
        </div>
  )
}

export default Addshipment