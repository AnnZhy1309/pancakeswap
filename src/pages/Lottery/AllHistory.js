import ShowDetails from "./ShowDetails"

export function AllHistory(){
    return(
        <div id="allhistorytable">
        <div id="tabletop">
           <div id="tabletoplineleft">
              <div id="tabletopline">
                  <h2 id="round">Round</h2>
                  <input pattern="^[0-9]+$" inputmode="numeric" id="round-id" name="round-id" scale="lg" class="sc-c22a9310-0 sc-82817dc1-0 hKHSKn lobcTU" value="877"/>
               </div>
               <div id="tabletopline2">
                   "Drawn"
                   "Apr 23, 2023, 2:00 AM"
               </div>  
            </div>
            <div id="tabletoplineright">
                  <button className="arrow"><img src="assets/arrowleft.svg" alt=" "/></button>
                  <button className="arrow"><img src="assets/arrowright.svg" alt=" "/></button>
                  <button className="arrow"><img src="assets/arrowright2.svg" alt=" "/></button>
           </div>
        </div>
        <div id="tablecenter">
               <div id="tablecentercontent">
                   <div id="tablecentercontentline1">
                       <h2 id="winningnumbers">Winning Number</h2>
                   
                           <div id="tablecentercontentline2">
                           <div id="ballswithnumbers">
                           <div>
                               <img src="assets/ball1.svg" className="ballnumber" alt=""/>
                           </div>
                           <div >
                               <img src="assets/ball2.svg"className="ballnumber" alt=""/>
                           </div>
                           <div >
                               <img src="assets/ball3.svg"className="ballnumber" alt=""/>
                           </div>
                           <div >
                               <img src="assets/ball4.svg"className="ballnumber" alt=""/>
                           </div>
                           <div >
                               <img src="assets/ball5.svg"className="ballnumber" alt=""/>
                           </div>
                           <div >
                               <img src="assets/ball6.svg"className="ballnumber" alt=""/>
                           </div>
                           </div>
                        </div>  
                   </div>
               </div>
         </div>
           <div class="tablebottom">
           <button className="details" id="detailsDiv4" >Details<img src="assets/detailsarrowdown.svg" alt=""/></button>
           </div>
  </div>
    )
}