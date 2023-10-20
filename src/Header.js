
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { useState,useEffect } from 'react';
import { app, auth } from './firebase'; 


function Header({ enteredAddress ,enteredName}) {
  const [{ basket,user_address,user_name},dispatch] = useStateValue();

  const login= ()=>{
    if(auth.currentUser){ 
      auth.signOut();
    }
  }




  

  return (
    <div className="header">
      <div className="header__part">
        <Link to={'/'}>
          <img
            className="header__logo"
            src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg"
            alt="amazon-logo"
          />
        </Link>
      </div>
      <span>
        <LocationOnIcon className="header__locationIcon" style={{ fontSize: '19px' }} />
      </span>
      <div className="header__part">
        <Link to={'/address'} className="link">

          <div>
            <span className='small'>Hello {enteredName}</span>
          </div>
          <div>
            <span className="header__address bold">Deliver at {enteredAddress}</span>
          </div>
        </Link>
      </div>
      <div className="header__searchDiv">
        <input type="text" placeholder="Search an item" className="header__searchBar" />
        <SearchIcon className="header__searchIcon" style={{ height: '47.15px', width: '40px' }} />
      </div>
      <div className="header__partLast">
        <Link to={!auth.currentUser && '/login'} className="header__link1 link"> 
          <div onClick={login}>
            <span className='small'>Hello {auth.currentUser?.email},</span> 
          </div>
          <div>
            <span className="bold">
            {auth.currentUser?'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <Link to={'/checkout'} className="header__link2 link">
          <div>
            <span className='small'>Returns</span>
          </div>
          <div>
            <span className="bold">& Orders</span>
          </div>
        </Link>
        <Link to={'/checkout'} className="header__link3 link" style={{ marginBottom: '7px' }}>
          <div>
            <span>
              <ShoppingCartOutlinedIcon className="header__cart" style={{ paddingTop: '7px' }} />
            </span>
          </div>
          <div>
            <span className='bold' style={{ marginLeft: '5px' }}>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
