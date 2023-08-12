import React, {  useState, useEffect} from 'react'
import "../Home/home.css";
import BackgroungImage from "../Home/nm.png";
import { Link, useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import Image1 from "../Home/slide/vvbbn.jfif";
import Image2 from "../Home/slide/fss.jfif";
import Image3 from "../Home/slide/vvx.jfif";
import Image4 from "../Home/slide/oo.jfif";
import Image5 from "../Home/slide/R.jfif";
import Image01 from "../Home/slide2/bc.jpg";
import Image02 from "../Home/slide2/jjk.jpg";
import Image03 from "../Home/slide2/oiy.jpg";
import Image04 from "../Home/slide2/qq.png";
import Image05 from "../Home/slide2/vbc.jpg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Ab from "../Home/ab.jpg"
import Abb from "../Home/vzx.jfif"
import Abd from "../Home/team.jpg"
import SkillBar from 'react-skillbars';
import firebase from "firebase";
import { Oval } from 'react-loader-spinner'
import Modal from 'react-modal';
import HHP from "../Home/shiip.png"
import {Nav,  Navbar, NavDropdown,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
// import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function Home() {
     let nav = useNavigate();
    const [track, setTrack] = useState('')
    const [trackinput, setTrackinput] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false);
    const [err, setErr] = useState(false);
    const [errc, setErrc] = useState(false);
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0.5,
      delay: 100,
    });

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


  
     const skills = [
      { type: 'Ocean ', level: 91 },
      { type: 'Air Freight', level: 84 },
      { type: 'Inland ', level: 94 },
      { type: 'Rail', level: 74 },
      { type: 'LCL', level: 95 },
    ];

    const images = [
        { url: Image1 },
        { url: Image2 },
        { url: Image3 },
        { url: Image4 },
        { url: Image5 },
      ];


      useEffect(()=>{
        AOS.init({duration: 100,});
        AOS.refresh();
        AOS.refreshHard();
      })
       
    
    

  return (
    <div className='home' >

<Navbar bg="color" variant="red" sticky="top" expand="lg">
  <Navbar.Brand>
    <img className="logo-image" src={HHP}/>
    <h6 className='logotext'>F.R.D.S</h6>
  </Navbar.Brand>
  <Navbar.Toggle style={{ marginRight:"5%"}}/>
  <Navbar.Collapse>
  <Nav className="move">
    
    <Nav.Link style={{color:"gold"}}  href="/">Home</Nav.Link>
    <Nav.Link  href="service">Service</Nav.Link>
    <Nav.Link  href="tracking">Tracking</Nav.Link>
    <Nav.Link href="about">About</Nav.Link>
    <Nav.Link href="contact">Contact</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
    <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
    {!err?
        <Oval
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{ display:"flex", alignItems:"center", justifyContent:"center"}}
        wrapperClass
      /> 
      :
      
      <div style={{display:"flex", alignItems: 'center', justifyContent: 'center', flexDirection:"column"}}>
  <h6 style={{color:"red", fontWeight:"bold", }}>incorrect tracking code</h6>
  <button onClick={()=>setIsOpen(false)} style={{margin:"5%", color:"black"}}>OK</button>
</div>}
      </Modal>
   
    <div className='headerdivtext' >
   
  <h3 className='tt'> Discover the safest self-driving <br/>    experience with Fast Reliable Delivery</h3>
  <h4 className='tt2'  style={{ fontFamily:"serif"}}>Logistics can be seen as complex but with a new perspective you will discover  <br/>  
  one of the most untapped potentials for  business growth in this decade.</h4>
  <h4 className='track' >Track Shipment</h4>
  <input style={{borderColor:errc? "red": "black"}}  onChange={((e)=>setTrackinput(e.target.value))} className="input" type="text" placeholder='Enter Tracking code/ID' name="tracking code input"/>
   </div>
   <div className='box'>
    <button onClick={Track} className='bot' style={{color:errc? "red": "black", marginBottom:"10%"}}>Track→</button>
   </div>
    
     <div className='servicebox'>
      <div style={{width:"100%"}}>
      <h5 style={{ fontSize:25, color:"white", }}>Transportation Service</h5>
      </div>
    
      <div className='sb1'  >
      <li style={{ }}>
        <Link style={{ color:'white', fontFamily:"serif"}}  to="/ocean">Ocean Transport</Link>
        </li>
        <li style={{ marginTop:"9%"  }}>
        <Link style={{ color:'white', fontFamily:"serif"}}  to="/air">Air Freight</Link>
        </li>
        <li style={{ marginTop:"9%"  }}>
        <Link style={{ color:'white', fontFamily:"serif"}}  to="/inland">Inland Transport</Link>
        </li>
        <li style={{ marginTop:"9%"  }}>
        <Link style={{ color:'white', fontFamily:"serif"}}  to="/rail">Intercontinental Rail</Link>
        </li>
        <li style={{ marginTop:"9%" }}>
        <Link style={{ color:'white', fontFamily:"serif"}}  to="/lcl">Less than Container Load (LCL)</Link>
        </li>
      </div>

      <div className='sb2'>
      <MobileView>
        <div className='op'>
        <SimpleImageSlider
        width={300}
        height={300}
        images={images}
        style={{borderRadius:20}}
        autoPlay={true}
      />
        </div>
         
          </MobileView>

          <BrowserView>
             <SimpleImageSlider
        width={600}
        height={400}
        images={images}
        style={{borderRadius:20}}
        autoPlay={true}
      />
          </BrowserView>
      </div>
      </div>


      <div className='ttrans'>
 <div className='sp'  style={{color:'white'}}>
    <h2 style={{ padding: "5%", color:"white", fontFamily:"sans-serif"}}>Supply Chain and Logistics</h2>
    <p1 style={{textAlign:"center", padding: "5%"}}>We are at the forefront of developing innovative supply chain solutions, fusing our global network and depth of expertise with pioneering digital innovations to enable our customers to stay ahead.</p1>
    <button onClick={()=>nav("/moreinfor")} className='readmore' >Read More→</button>
    </div>
       </div>


       
       <div className='servicebox11'>

      
        <h5 className='linw' >F.R.D.S.</h5>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <h3  style={{color:"white", fontFamily:"monospace", fontWeight:"bolder", margin:"5%"}}>
         <u>We Deliver Exceptional Products and Services Around the World</u>
         </h3>
         <h6 className='txtxt'>When it comes to setting up large-scale industrial projects which requires shipment of heavy equipment from multiple locations to a single, faraway destination, Fast Reliable Delivery service Project Logistics is your answer. When it comes to setting up large-scale industrial projects which requires shipment of heavy equipment from multiple locations to a single, faraway destination, Fast Reliable Delivery delivery service Project Logistics is your answer.</h6>
         <button onClick={()=>nav("/contact")} className='readmore' style={{ fontSize:15, marginTop:"6%"}}>Contact Us</button>
        </div>
        </div>

              <div className='sbox' style={{color:"black"}}>
      <div className='sbzx1'>
      <h4 style={{marginTop:"14%"}} >About us</h4>
      <h6 className='abtext'>
            We build long-term partnerships with our customers because we share their passion for transporting cargo safely, efficiently and sustainably around the world.
  <br/>There are many cogs in the wheels of global trade. What happens if something goes wrong? The COVID-19 pandemic has put global supply chains under untold pressure. We're proud of our people's resilience and flexibility, and of our ability to innovate and problem-solve for customers at this exceptional time.
            </h6>

            <button onClick={()=>nav("/about")} className='readmore' style={{fontSize:15, color:"black", }} >Read More→</button>
           
      </div>

      <div className='sbzx2'  >
        <div className='wq3'>
        <img  className="image-ab"
         src={Ab} alt=""/>
        </div>
      
      </div> 
      </div> 

       <div className='sbox' style={{color:"black"}}>
      <div className='sbzx1'>
      <h4 style={{marginTop:"14%", padding:"2%"}} >Global coverage and local expertise at your fingertips</h4>
      <p className='abtext'>
      Expand your local coverage, reach international markets and take your e-commerce presence to the next level.

Besides our capabilities in North America and Europe, we have strong e-commerce logistics partner networks in West-Central Asia, China, and Southeast Asia.
            </p>

            <button onClick={()=>nav("/moreinfor")} className='readmore' style={{fontSize:15, color:"black", }} >Read More→</button>
           
      </div>

      <div className='sbzx2'  >
        <div className='wq3'>
        <img  className="image-ab"
         src={Abb} alt=""/>
        </div>
      
      </div> 
      </div>  




      <div className='blackbox'>
            <div className='boxcover'>
                <p style={{marginTop:50, padding:"10%"}}>WHY Fast Reliable Delivery</p>
                <h3 style={{padding:"5%"}}>A different approach, using a new method of delivery.</h3>
                <p style={{padding:"4%"}}>True industry-leading customer experience isn’t a vision. It’s a passion. A passion for our customers whose business is dependent on moving the right products to the right market at the right time.</p>
                <button onClick={()=>nav("/moreinfor")} className='readmore' style={{fontSize:16, color:"white",  }} >Read More→</button>
            </div>
          </div>



          <div className='bdo' style={{color:"black", padding:"4%"}}>
         <h5 style={{ padding:"2%"}}>Team Work</h5>
         <p style={{ padding:"2%"}}>we are determined to make your customs process simple in an increasingly complex marketplace. By getting to know your business on a professional level, and you personally, we can implement the best possible solution.</p>  
    
      <div className='rate' style={{backgroundColor:"black", borderRadius:10}}>
      <h3 style={{color:"white"}}>Our Professional Experience & Skills</h3>
      <SkillBar 
      
      
      skills={skills} height={30}
       />
                    
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

export default Home