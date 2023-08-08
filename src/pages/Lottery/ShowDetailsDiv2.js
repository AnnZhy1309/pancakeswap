import {useState} from 'react';
import { DetailsDiv2 } from './DetailsDiv2';

export default function ShowDetailsDiv2() {
  const [isShown, setIsShown] = useState(false);
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setIsShown(current => !current);
    setActive(!active);
  }
      

  return ( 
    <div>
      {isShown && <DetailsDiv2 />}
      <button className="details" id="detailsDiv2"onClick={handleClick}>{ active ? "Hide" : "Details"}<img alt="" src={active ? "assets/detailsarrowup.svg" : "assets/detailsarrowdown.svg"}/></button>
      
    </div>
  );
}