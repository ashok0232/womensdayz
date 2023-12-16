import React, { useState } from 'react';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

export default function ContactUs() {
  const [showLogin, setShowLogin] = useState(true);

//   const toggleForm = () => {
//     setShowLogin(!showLogin);
//   };

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/> : <Signup setShowLogin={setShowLogin}/>}
      <hr />
      {/* <p onClick={toggleForm}>{showLogin ? 'Don\'t have an account? Sign up here.' : 'Already have an account? Log in here.'}</p> */}
      {/* Uncomment the line below when you want to include the OTP page */}
      {/* <OTP /> */}
    </>
  );
}
