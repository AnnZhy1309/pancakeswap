import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import '../styles/lottery/Toggle.scss'

export function ToggleSwitch(){  
  const[toggle, setToggle] = useState(false);
  const handleToggleChange=()=>{
    setToggle(!toggle)
  }

  return(
    <div className="toggle-container" onClick={handleToggleChange}>
       <div className={`toggle-btn ${!toggle ? "disabled" : ""} `}>{toggle ? "Your History" : "All History"}</div>
       
    </div>
  )
}

export default ToggleSwitch;