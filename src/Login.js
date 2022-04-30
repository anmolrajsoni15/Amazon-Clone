import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) =>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    // auth.signIn(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((e)=>alert(e.message));  
  }
  const register = (event) =>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    // auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((e)=>alert(e.message)); 
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
      </Link>
      <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type='email'/>
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type='password'/>
          <button type='submit' onClick={login} className='login__signInButton'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;