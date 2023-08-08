import CountUp from "react-countup"

function CakeRow(){
    return(
        <div className="row">
            <div className="column1">
              <div className="imgContainer">
                <img src="assets//svgexport-6.svg" className="coinImg" alt="" />
                <img src="assets/green-reflesh.svg" className="cycle" alt="" />
              </div>
              <div className="desc">
                <div className="header">Stake CAKE</div>
                <div className="headerDesc">Stake, Earn - And more!</div>
              </div>
            </div>
            <div className="column3">
              <div className="desc">
                <div className="header">CAKE Staked</div>
                <div className="headerDesc">
                  <div className="subMainDesc">0.0</div>
                  <div className="subDesc">0 USD</div>
                </div>
              </div>
            </div>
            <div className="column4">
              <div className="desc">
                <div className="header">Flexible APY</div>
                <div className="headerDesc">
                  <div className="subMainDesc"><CountUp end={0.85} duration={1.5} decimals={2}/>%</div>
                  <img src="assets/calculator.svg" className="descImg" alt="" />
                </div>
              </div>
            </div>
            <div className="column5">
              <div className="desc">
                <div className="header">Locked APR</div>
                <div className="headerDesc">
                  <div className="subMainDesc">Up to <CountUp end={18.22} duration={1.5} decimals={2}/>%</div>
                  <img src="assets/calculator.svg" className="descImg" alt="" />
                </div>
              </div>
            </div>
            <div className="column6">
              <div className="desc">
                <div className="header">Total staked</div>
                <div className="headerDesc">
                  <div className="subMainDesc"><CountUp end={229069913} duration={2}/> CAKE</div>
                </div>
              </div>
            </div>
            <div className="column7">
              <div className="desc">
                <div className="header">Details</div>
                <div className="headerDesc">
                  <img src="assets/down-arrow-blue.svg" alt="" />
                </div>
              </div>
            </div>
        </div>
    )
}


export default CakeRow