import React, { useState } from 'react';
import '../SayMyName.css';
import lmao from './lmao.png'
import { useLocation } from 'react-router-dom';

function SayMyName(){  

 const [sayMyName, setSayMyName] = useState("");
 const location = useLocation();
 const { myName } = location.state || {};

 const isNameMatch = (sayMyName: string) => {
    console.log(myName)
    return sayMyName === myName;
    
 }
   return (
    <>
      <div className="input-container">
        <input
          className='custom-input'
          type='text' 
          id='inputSayMyName' 
          value={sayMyName} 
          onChange={(t) => setSayMyName(t.target.value)}
        />
      </div>

      {isNameMatch(sayMyName) && (
        <div className="image-container">
          <img src={lmao} alt="Image" />
        </div>
      )}
    </>
    
  );
};

export default SayMyName;