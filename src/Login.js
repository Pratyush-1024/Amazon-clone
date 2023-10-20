import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const firebaseConfig = {
  apiKey: "AIzaSyCuguqgcvLYYCN2dRKGtIWX7IGuCU-P_yg",
  authDomain: "clone-4889d.firebaseapp.com",
  projectId: "clone-4889d",
  storageBucket: "clone-4889d.appspot.com",
  messagingSenderId: "818721765997",
  appId: "1:818721765997:web:45ac63719e2e6397aa1d64",
  measurementId: "G-74D57FDQWM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {

    const navigate = useNavigate();

    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');


    const login = async (event) => {
        event.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate('/');
        } catch (error) {
          alert(error.message);
        }
      }
      

      const register = async (event) => {
        event.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/');
        } catch (error) {
          alert(error.message);
        }
      }
      

  return (
    <div className='login'>
        
        <div className='login__formDetails'>
        <h1>Sign In</h1>
        
        <form action="#" method="post">

      
        <label for="email" className='login__label'>Email:</label>
        <input value={email} onChange={event=>setEmail(event.target.value)} type="email" id="email" name="email" required className='login__inp'/><br></br>

        <label htmlFor="password" className='login__label'>Password:</label>
        <input value={password} onChange={event=>setPassword(event.target.value)} className='login__inp' type="password" id="password" name="password" required/><br /><br />

        <input type="submit" value="Sign In" onClick={login} className='login__signInButton'/>
    </form>

    <div className='login__paragraph'>
    <p>
        By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.
    </p>
    </div>
   

    <button onClick={register} className='login__signUpButton'>Create your Amazon Account</button>
    </div>
    </div>
  )
}

export default Login
