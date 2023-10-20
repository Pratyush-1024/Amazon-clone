import React from 'react'
import './Address.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Address({ setEnteredAddress ,setEnteredName}) {

  const navigate = useNavigate();

    const [address,setAddress]=useState('');
    const [name,setName]=useState('');

    const addAddressAndName = (event) => {
      event.preventDefault();
      try{
        setEnteredAddress(address);
      setEnteredName(name);
      navigate('/');
    }catch(error){
      alert(error.message)
    }
  }

    

  return (


    <div className='page-container'>

<h2>Add a new Address</h2>
  <form>
  <div className='form-container'>
    <div >
      <label for="address" className='address__label'>Address:</label>
      <input type="text" className='address__inp' id="address" name="address" value={address} required onChange={(event)=>{setAddress(event.target.value)}}/>
    </div>
    <div>
      <label for="name" className='address__label'>Name:</label>
      <input type="text" id="name" name="name" className='address__inp' value={name} required onChange={(event)=>{setName(event.target.value)}}/>
    </div>
    <div className='label__div'>
      <input className='address__labelCheck' type="checkbox" id="isDefault" name="isDefault"/>
      <label className='address__inpCheck' for="isDefault">Make this my default address</label>
    </div>
    <div className='address__buttonDiv'>
    <button className='address__button' type="button" onClick={addAddressAndName}>Add Address</button>
    </div>
    </div>
  </form>
    </div>
  );
}



export default Address