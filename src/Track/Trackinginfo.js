import React, { useEffect, useState} from 'react'
import "../Track/trackingcode.css";
import Stepper from 'react-stepper-horizontal';
import QRCode from "react-qr-code";
import { useNavigate, useLocation } from "react-router-dom";
import firebase from "firebase";
import Barcode from 'react-barcode';


function Trackinginfo() {
  let location = useLocation();
    let nav = useNavigate();
    const [data, setData]= useState('')

  //   useEffect(()=>{
  //     firebase.firestore().collection("Tracking")
  //     .where("trackingcode", "==", "AA"+488960615+'GB')
  //     .onSnapshot((querySnapshot) => {
  //      querySnapshot.forEach((doc) => {
  //       setData(doc.data())
  //         //  setData(cities)
  //          console.log(data)
  //      });
  //     //  console.log('this is my code', data.receiveraddress)
  //  });
  //   },[])

  useEffect(()=>{
    setData(location.state)
    if(!location.state){
      nav("/")
    }
  })

  
  return (
    <div className='trackingcode'>
   
      <div className='getinfo'>
        <h4>{data.goodscomment}</h4>
        {/* <Stepper 
        className="ch"
        
        activeStep={2}>
  <Step style={{color:"green"}}   label="Children Step 1" />
  <Step label="Children Step 2" />
  <Step active={true}  label="Children Step 3" />
        </Stepper> */}


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
    
    <div style={{ height: "20%",  width: "100%",  marginTop:"4%", padding:"2%"}}>

<Barcode value={data.trackingcode} width={1.6} height={50}
     /> 

</div>
<h4 className='SD2' style={{fontWeight:"bolder", marginTop:"1%"}}>TRACKING DETAILS</h4>
<div style={{width:"100%", height:1, backgroundColor:'black', }}></div>

<h5 ><u>Shipper details</u></h5>



<div className='tablediv'>
   <table className='table'>
<tr bgcolor='gray'>
  <th className='th' >Full Name</th>
  <th  className='th'>Country</th>
  <th  className='th'>Phone Number</th>
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
<h5 ><u>Receiver details</u></h5>

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
</div>

<div style={{width:"100%", height:1, backgroundColor:'black', }}></div>


<h5 ><u>Shipment Details</u></h5>

<div>
<table className='table' key={location.state.trackingcode}>
  <tr className='tr' bgcolor='lightgray' >
    <th>Origin</th>
    <td className='td'>{location.state.sendercountry}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Package</th>
    <td className='td'>{location.state.goodspackage}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Status</th>
    <td className='td'>{location.state.goodsstatus}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Destination</th>
    <td className='td'>{location.state.receivercountry}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Carrier</th>
    <td className='td'>{location.state.goodscarrier}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Weight</th>
    <td className='td'>{location.state.goodsweight}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Shipment Mode</th>
    <td className='td'>{location.state.goodsmood}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Carrier Reference No</th>
    <td className='td'>PARCEL/NUM/8794</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Product</th>
    <td className='td'>COMMODITY</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Qty</th>
    <td className='td'>{location.state.goodsqty}</td>
  </tr>

  <tr className='tr' bgcolor='lightgray' >
    <th>Payment Mode</th>
    <td className='td'>{location.state.goodspayment}</td>
  </tr>
  
  <tr className='tr' bgcolor='lightgray' >
    <th>Comments</th>
    <td className='td'>{location.state.goodscomment}</td>
  </tr>

  </table>
</div>

      </div>

  )
}

export default Trackinginfo;