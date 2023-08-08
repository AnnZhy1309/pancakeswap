import { useState } from "react";
import { AllHistory } from "./AllHistory";
import { YourHistoryTable } from "./YourHistory";

export function SwitchHistory() {
  const [history1, setHistory1] = useState(true);
  const [active, setActive] = useState(false);

  const handleClick1 = (result) => {
    setHistory1(() => result);
    setActive(!active);
  };

  return (
    <div id="div4switching">
      <div id="div4buttons">
      <button
        id="allhistory"
        className={active ? "active-button" : "inactive-button"}
        onClick={() => handleClick1(true)}>
        <b>All History</b>
      </button>
      <button 
        id="yourhistory"
        className={active ? "inactive-button" : "active-button"} 
        onClick={() => handleClick1(false)}>
        <b>Your History</b>
      </button>
      </div>
      <br></br>
      {history1 ? <AllHistory /> : <YourHistoryTable />}
    </div>
  );
}