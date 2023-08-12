import React, {  useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "../IAM/log.css";
import firebase from "firebase";
import { Audio } from 'react-loader-spinner'
import Modal from 'react-modal';

function Log() {
    let nav = useNavigate();
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')


function Login() {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    if(user){
      nav("/iamhome")
    }else{
      alert('incorrect emaill or password')
    }
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('incorrect emaill or password')
  });
}
  return (
    <div className='log' >
        <h2>IAM</h2>
      
        <input onChange={((e)=>setEmail(e.target.value))} className='iaminput'  type="email" placeholder='Email' name="email"/>
        <input onChange={((e)=>setPassword(e.target.value))} className='iaminput'  type="password" placeholder='Password' name="password"/>
        <button onClick={Login} className='buut'>Login</button>
        <button onClick={(()=>nav("/"))} className='buut'>Home</button>
    
        </div>
  )
}

export default Log