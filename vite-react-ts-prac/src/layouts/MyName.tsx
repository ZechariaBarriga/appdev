import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyName(){  
 const navigate = useNavigate()
 const myName = 'Zecharia Barriga'
 
 const yourName = () => {
  navigate("/SayMyName", {state: { myName }})
 }
   return (
    <>
      <div className='myNameContainer'>
        <p className='myNameTitle'>Hi! My name is {myName}</p>
        <button onClick={yourName}>Say my name...</button>
      </div>
      
    </>
  );
};

export default MyName;