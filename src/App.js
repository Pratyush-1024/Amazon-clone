import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Address from './Address';
import { useState } from 'react';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [enteredAddress, setEnteredAddress] = useState('');
  const [enteredName,setEnteredName]=useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]); 



  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<div><Login /></div>} />
          <Route path="/address" element={<div>
            <Header enteredAddress={enteredAddress} />
            <Address setEnteredAddress={setEnteredAddress}
            setEnteredName={setEnteredName} /></div>} />
          <Route
            path="/checkout"
            element={
              <div>
                <Header enteredAddress={enteredAddress} />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header enteredAddress={enteredAddress}
                enteredName={enteredName} />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
