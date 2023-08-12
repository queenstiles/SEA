import React, { useEffect, useState} from 'react'
import "../Track/trackingcode.css";
import Stepper from 'react-stepper-horizontal';
import { useNavigate, useLocation } from "react-router-dom";
import firebase from "firebase";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';
import Barcode from 'react-barcode';


function Trackingpreview() {
  let location = useLocation();
    let nav = useNavigate();
    const [data, setData]= useState('')
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

      function Update() {
        setIsOpen(true)
    firebase.firestore().collection('Tracking').doc(data.trackingcode).update({
      senderfullname: !senderfullname? location.state.senderfullname: senderfullname,
      sendercountry: !sendercountry? location.state.sendercountry: sendercountry,
      senderphonenumber: !senderphonenumber? location.state.senderphonenumber: senderphonenumber,
      senderemail: !senderemail? location.state.senderemail: senderemail,
      receiverfullname: !receiverfullname? location.state.receiverfullname: receiverfullname,
      receivercountry: !receivercountry? location.state.receivercountry: receivercountry,
      receiverstate: !receiverstate? location.state.receiverstate: receiverstate,
      receiveraddress: !receiveraddress? location.state.receiveraddress: receiveraddress,
      receiverphonenumber: !receiverphonenumber? location.state.receiverphonenumber: receiverphonenumber,
      receiveremail: !receiveremail? location.state.receiveremail: receiveremail,
      goodspackage: !goodspackage? location.state.goodspackage: goodspackage,
      goodsstatus: !goodsstatus? location.state.goodsstatus: goodsstatus,
      goodscarrier: !goodscarrier? location.state.goodscarrier: goodscarrier,
      goodsweight: !goodsweight? location.state.goodsweight: goodsweight,
      goodsmood: !goodsmood? location.state.goodsmood: goodsmood,
      goodsqty: !goodsqty? location.state.goodsqty: goodsqty,
      goodspayment: !goodspayment? location.state.goodspayment: goodspayment,
      goodsdeparture: !goodsdeparture? location.state.goodsdeparture: goodsdeparture,
      goodsdeliverydate: !goodsdeliverydate? location.state.goodsdeliverydate: goodsdeliverydate,
      goodscomment: !goodscomment? location.state.goodscomment: goodscomment,
      goodsprogress: !goodsprogress? location.state.goodsprogress: goodsprogress,
      trackingcode: location.state.trackingcode,
      postcode: !postcode? location.state.postcode: postcode
  })
  .then((y) => {
      console.log("Document successfully written!");
      setIsOpen(true)
      alert('Shipment Updataed')
      nav("/iamhome")
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
      }

  useEffect(()=>{
    setData(location.state)
  })

  function DELETE() {
    setIsOpen(true)
    firebase.firestore().collection('Tracking').doc(data.trackingcode).delete()
    .then(() => {
        setIsOpen(false)
       alert("Shipment successfully deleted!");
       nav("/iamhome")
    }).catch((error) => {
        setIsOpen(false)
        alert("Error removing document: ", error);
    });
  }

  
  return (
    <div className='trackingcode'>
   
      <div className='getinfo'>
        <h4>{data.goodscomment}</h4>
       

<div>
      <Stepper
       steps={ [{title: data.goodsdeparture}, {title: 'in transit'}, {title: 'out of delivery'}, {title: data.goodsdeliverydate}] } 
       activeStep={data.goodsprogress} 
       activeColor="green"
       completeColor="green"
       defaultColor="gray"
       activeTitleColor= "green"
       />
    </div>
    <div style={{width:"100%", height:3, backgroundColor:'black', marginTop:"7%"}}></div>
    
    <div style={{ height: "20%",  width: "100%",  marginTop:"7%", padding:"2%"}}>
  
    <Barcode value={data.trackingcode} width={1.6} height={50}
     /> 
  
</div>
<h4 style={{marginRight:"60%"}}>Tracking details</h4>
<div style={{width:"100%", height:1, backgroundColor:'black', }}></div>
<h5 style={{fontFamily:"revert"}}><u>Shipper details</u></h5>



<div className='tablediv'>
   <table className='table'>
<tr bgcolor='gray'>
  <th className='th' >Full Name</th>
  <th  className='th'>Country</th>
  <th  className='th'>Phone Number:</th>
  <th  className='th'>Email:</th>
 
</tr>


  <tr className='tr' bgcolor='lightgray' key={location.state.trackingcode}>
  <td className='td'>{location.state.senderfullname}</td>
  <td className='td'>{location.state.sendercountry}</td>
  <td className='td'>{location.state.senderphonenumber}</td>
  <td className='td'>{location.state.senderemail}</td>
  </tr>
 
   </table>
        </div>
        <div style={{width:"100%", height:1, backgroundColor:'black', }}></div>
        <h5 style={{fontFamily:"revert"}}><u>Receiver details</u></h5>

        <div className='tablediv'>
   <table className='table'>
<tr bgcolor='gray'>
  <th className='th' >Full Name</th>
  <th  className='th'>Country</th>
  <th  className='th'>State</th>
  <th  className='th'>Address</th>
  <th  className='th'>Postcode</th>
  <th  className='th'>Phone Number:</th>
  <th  className='th'>Email:</th>
 
</tr>


  <tr className='tr' bgcolor='lightgray' key={location.state.trackingcode}>
  <td className='td'>{location.state.receiverfullname}</td>
  <td className='td'>{location.state.receivercountry}</td>
  <td className='td'>{location.state.receiverstate}</td>
  <td className='td'>{location.state.receiveraddress}</td>
  <td className='td'>{location.state.postcode}</td>
  <td className='td'>{location.state.receiverphonenumber}</td>
  <td className='td'>{location.state.receiveremail}</td>
  </tr>
 
   </table>
        </div>
        <div style={{width:"100%", height:1, backgroundColor:'black', }}></div>
        <h5 style={{fontFamily:"revert"}}><u>Shipment Details</u></h5>


        <div className='tablediv'>
   <table className='table'>
<tr bgcolor='gray'>
  <th className='th' >Origin</th>
  <th  className='th'>Package</th>
  <th  className='th'>Status</th>
  <th  className='th'>Destination</th>
  <th  className='th'>Carrier</th>
  <th  className='th'>Weight</th>
  <th  className='th'>Shipment Mode</th>
  <th  className='th'>Carrier Reference No</th>
  <th  className='th'>Product</th>
  <th  className='th'>Qty</th>
  <th  className='th'>Payment Mode</th>
  <th  className='th'>Comments</th>
 
</tr>


  <tr className='tr' bgcolor='lightgray' key={location.state.trackingcode}>
  <td className='td'>{location.state.sendercountry}</td>
  <td className='td' >{location.state.goodspackage}</td>
  <td className='td'>{location.state.goodsstatus}</td>
  <td className='td'>{location.state.receivercountry}</td>
  <td className='td'>{location.state.goodscarrier}</td>
  <td className='td'>{location.state.goodsweight}</td>
  <td className='td'>{location.state.goodsmood}</td>
  <td className='td'>PARCEL/NUM/8794</td>
  <td className='td'>COMMODITY</td>
  <td className='td'>{location.state.goodsqty}</td>
  <td className='td'>{location.state.goodspayment}</td>
  <td className='td'>{location.state.goodscomment}</td>
  </tr>
 
   </table>
        </div>
        <h2 className='hbut' style={{color:"white", fontWeight:"bolder", width:"100%", backgroundColor:"black", height:50}}>UPDATE SHIPMENT</h2>
        <div style={{width:"100%", height:3, backgroundColor:'black', }}></div>


        <div className='details' style={{width:"70%"}}>
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

<div className='details' style={{width:"70%"}} >
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



<div className='details' style={{width:"70%"}}>
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
<div className='savekey' style={{width:"100%",}}>
  <h5>please re-check information before saving </h5>
  <button className='hbut' onClick={Update} style={{color:"white", fontWeight:"bolder"}}>UPDATE SHIPMENT</button>
  <button className='hbut' onClick={DELETE} style={{color:"white", marginTop:"3%", fontWeight:"bolder", backgroundColor:"red"}}>DELETE SHIPMENT</button>
 </div>


        </div>
        </div>
  )
}

export default Trackingpreview