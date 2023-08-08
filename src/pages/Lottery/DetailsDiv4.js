import TheCountUp from "../../components/CountUp"

export function DetailsDiv4(){
    return(
        <div id="div4prizepot">
        <div id="prizepot1">
            <h4>Prize Pot</h4>
            <h2>~$<TheCountUp end={34747} duration={0.5}/></h2>
            <p><TheCountUp end={22761} duration={0.5}/> CAKE</p>
        </div>
        <div id="prizepot2">
            <p>Total players this round: 140</p>
        </div>
        <div id="prizepot3">
            <p>Match the winning number in the same order to share prizes.</p>
        </div>
         <div className="match" id="match1">
            <h3>Match first 1</h3>
            <h2><TheCountUp end={455} duration={0.5}/> CAKE</h2>
            <p>~$<TheCountUp end={694} duration={0.5}/></p>
            <p><TheCountUp end={5.29} duration={0.5}/> CAKE each</p>
            <p>86 Winning Tickets</p>
         </div>
         <div className="match" id="match2">
            <h3>Match first 2</h3>
            <h2><TheCountUp end={683} duration={0.5}/> CAKE</h2>
            <p>~$<TheCountUp end={1042} duration={0.5}/></p>
            <p><TheCountUp end={113.8} duration={0.5}/> CAKE each</p>
            <p>6 Winning Tickets</p>
         </div>
         <div className="match" id="match3">
            <h3>Match first 3</h3>
            <h2><TheCountUp end={1138} duration={0.5}/> CAKE</h2>
            <p>~$<TheCountUp end={1735} duration={0.5}/></p>
            <p><TheCountUp end={569.02} duration={0.5}/> CAKE each</p>
            <p>2 Winning Tickets</p>
         </div>
         <div className="match" id="match4">
            <h3>Match first 4</h3>
            <h2><TheCountUp end={2276} duration={0.5}/> CAKE</h2>
            <p>~$<TheCountUp end={3474} duration={0.5}/></p>
            <p>0 Winning Tickets</p>
         </div>
         <div className="match" id="match5">
            <h3>Match first 5</h3>
            <h2><TheCountUp end={4552} duration={0.5}/> CAKE</h2>
            <p>~$<TheCountUp end={6947} duration={0.5}/></p>
            <p>0 Winning Tickets</p>
         </div>
         <div className="match" id="match6">
            <h3>Match first 6</h3>
            <h2><TheCountUp end={9104} duration={0.5}/> CAKE</h2>
            <p>~$<TheCountUp end={13894} duration={0.5}/></p>
            <p>0 Winning Tickets</p>
         </div>
         <div className="match" id="match7">
            <h3>Burn</h3>
            <h2><TheCountUp end={4552} duration={0.5}/> CAKE</h2>
            <p>~$<TheCountUp end={6947} duration={0.5}/></p>
         </div>
    </div>
    )
}