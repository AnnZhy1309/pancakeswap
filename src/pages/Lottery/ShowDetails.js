import {useEffect, useState} from 'react';
import { DetailsDiv4 } from './DetailsDiv4';

export default function ShowDetails() {
  const [isShown, setIsShown] = useState(false);
  const [active, setActive] = useState(false);
  const div = document.querySelector('#div4')
  
  const handleClick = () => {
    setIsShown(current => !current);
    setActive(!active);
  } 

  return ( 
    <div>
      <div id='showdetails'>
      {isShown && <DetailsDiv4 />}
      <button className="details" id="detailsDiv4" onClick={handleClick}>{ active ? "Hide" : "Details"}<img src={active ? "assets/detailsarrowup.svg" : "assets/detailsarrowdown.svg"} alt=""/></button>
      </div>
    </div>
  );
}