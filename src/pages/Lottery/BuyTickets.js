import { useState } from "react";
import { Lottery } from "./Lottery";

export function BuyTickets(){
    const [isOpen, setIsOpen] = useState(false);
     

  return (
    <div><button className="buttom" onClick={() => setIsOpen(true)}><b>Buy Tickets</b></button>
      {isOpen && (
       <div className="buyTickets">
        <div className="buyTickets2">
          <div className="buyTickHeader">
            <h2>Buy Tickets</h2>
            <button className="closeCross" onClick={() => setIsOpen(false)}><img src="assets/cross.svg" alt=''/></button>
          </div>
          <div className="buyTickCenter">
           <div className="tickLine1">
            <p>
              Buy:
            </p>
             <div>
              <p> Tickets  </p>
              <button className="smallTicket" onClick={() => setIsOpen(false)}>
                  <img src="assets/buyTicketsTicket.svg" aly=""/>
              </button>
             </div>
           </div>
           <div className="tickLine2">
            <div className="innerTable">
              <p>
                0
              </p>
              <p>
                ~0.00 CAKE
              </p>
            </div>
           </div>
           <br/>
           <div className="tickLine3">
              <p className="tickLine3left">
                Cost (CAKE)
              </p>
              <p className="tickLine3right">
                0 CAKE
              </p>
           </div>
           <div className="tickLine4">
              <div className="tickLine4left">
                <p>
                  0%
                </p>
                <p>
                  Bulk discount
                </p>
                <img src="assets/questionMark.svg"/>
              </div>
              <p className="tickLine4right">
                ~0 CAKE
              </p>
           </div>
              <hr/>
           <div className="tickLine5">
              <p>You pay</p>
              <p>~0 CAKE</p>
           </div>  
         
           <button class="buttom"><b>Connect Wallet</b></button>

           <p className="textBelow">
           "Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.
           </p>
         </div>
        </div>
       </div> 
        )}                     
    </div>
  );
}