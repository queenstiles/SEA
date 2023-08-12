import React, {  useState, useEffect} from 'react'
import { Link, useNavigate, useLocation} from "react-router-dom";
import { Oval } from 'react-loader-spinner'
import Modal from 'react-modal';
import firebase from "firebase";
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import HHP from "../Home/shiip.png"

function Help() {
    const [data, setData]= useState([])
    let location = useLocation();
    let nav = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);



    useEffect(()=>{
        let firebasedata=[]
       firebase.firestore().collection("contact")
       .orderBy("date", "desc")
       .get().then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
       firebasedata.push(doc.data())
        setData(firebasedata)
        console.log('wearehere', data)
     });
   
 });
     },[])


       const customStyles = {
        content: {
                width:"70%",
                height:500,
                position:"absolute",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          display:"flex",
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection:"column"
        },
      };

      function Delete(id) {
        setIsOpen(true);
        firebase.firestore().collection("contact").doc(data.name)
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
        <Nav.Link  href="booking">Booking</Nav.Link>
        <Nav.Link style={{color:"gold"}} href="help">Help Center</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
          
        <div>
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        appElement={document.getElementById('app')}
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
        Deleting please wait...  
      </Modal>
        </div>
        <div className='tablediv'>
   <table className='table'>
<tr bgcolor='gray'>
  <th  className='th'>Name</th>
  <th  className='th'>Country</th>
  <th  className='th'>Address</th>
  <th  className='th'>Email</th>
  <th  className='th'>Complain</th>
  <th  className='th'>Delete Complain</th>
</tr>

      {
     data.map((x, y)=>{
return(
  <tr className='tr' bgcolor='lightgray' key={y}>
  <td className='td'>{x.name}</td>
  <td className='td'>{x.country}</td>
  <td className='td'>{x.address}</td>
  <td className='td'>{x.email}</td>
  <td className='td'>{x.request}</td>
  <td className='td'><button  onClick={Delete} className='BUT' style={{backgroundColor:"red", color:"white", fontWeight:"bolder"}}>Delete Request</button></td>
  </tr>
)
     }) 
      }
 
   </table>
        </div>
        
    </div>
  )
}

export default Help