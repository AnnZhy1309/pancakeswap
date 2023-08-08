import React, {useState, useEffect} from "react"

const TradingReward = () => {
    const [max1200, setMax1200] = useState(false)
    const [max1080, setMax1080] = useState(false)
    const [max968, setMax968] = useState(false)
    const [max852, setMax852] = useState(false)
    const [max576, setMax576] = useState(false)
    const [max370, setMax370] = useState(false)
    const [TRSection5Page1, setTRSection5Page1] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            setMax1200(window.innerWidth <=1200); // ← breakpoint
        }
        // ↓ Add event listener to track window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize()

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setMax968(window.innerWidth <=968); // ← breakpoint
        }
        // ↓ Add event listener to track window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize()

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className="tradingReward">
            {/* --------------- Toolbar ----------------- */}
            <section className="toolbar">
                <div className="toolbarItemSelected">
                    <a href="#">CAKE Stakers</a>
                </div>
                <div className="toolbarItem">
                    <a href="#">Top Traders</a>
                </div>
                {/* <div className="toolbarItem">
                    <a href="#">Prediction (BETA)</a>
                </div>
                <div className="toolbarItem">
                    <a href="./lottery/lottery.html">Lottery</a>
                </div>
                <div className="toolbarItem">
                    <a href="#">Pottery (BETA)</a>
                </div> */}
            </section>
            {/* ---------------- Section 1 --------------- */}
            <section className="TRsection1">

                <div className="section1Container">

                    <div className="section1Left">
                        <div>Trading Reward</div>
                        <div>5% trading rebate to be earned!</div>
                        <div>Earn CAKE while trading your favorite tokens on PancakeSwap.</div>
                        <div>
                            <a href="#">
                                Start Trading
                            </a>
                            <a href="#">
                                How to Earn
                            </a>
                        </div>
                    </div>
                    <div className="section1Right">
                        <div className="section1MovingParts">
                            <img src="/assets/trading-reward-star1.png" alt="star1"/>
                            <img src="/assets/trading-reward-star2.png" alt="star2"/>
                            <img src="/assets/trading-reward-star3.png" alt="star3"/>
                            <img src="/assets/trading-reward-butter-1.png" alt="butter1"/>
                            <img src="/assets/trading-reward-butter-2.png" alt="butter-2"/>
                        </div>
                        <div className="section1RightImage">
                            <img src="/assets/trading-reward-banner-bunny.webp" alt="trading reward banner bunny"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------- Section 2 --------------*/}
            <section className="TRsection2">
                <div className="section2Container">
                    <h2 id="yourTradingReward">Your Trading Reward</h2>
                    <div className="section2BannerContainer">
                        <div className="section2Banner">
                            <h2>Connect wallet to view your trading volume and rewards</h2>
                            <button>Connect Wallet</button>
                        </div>
                    </div>
                    <div className="section2FloatingImages">
                        <img className="left-bunny" src="/assets/trading-reward-left-bunny.png" alt="left bunny"/>
                        <img className="right-bunny" src="/assets/trading-reward-right-bunny.png" alt="right bunny"/>
                        <img className="love-butter" src="/assets/trading-reward-love-butter.png" alt="love butter"/>

                    </div>

                </div>
            </section>

            {/* --------------- Section 3 -------------- */}
            <section className="TRsection3">
                <div className="section3Container">
                    <h2 className="section3Title">Current Reward Pool</h2>
                    <div className="section3Columns">
                        <div className="section3ColumnItem">
                            <h2>Starts</h2>
                            <h2>On May 18, 2023, 07:00</h2>
                        </div >
                        <div className="section3ColumnItem">
                            <h2>Ends</h2>
                            <h2>in 23d 5h 0m</h2>
                        </div>
                        <div className="section3ColumnItem">
                            <h2>Total volume generated</h2>
                            <h2>$16,715,421.900</h2>
                        </div>
                        <div className="section3ColumnItem">
                            <h2>Total reward to distribute</h2>
                            <h2>207 in CAKE</h2>
                        </div>
                        <div className="section3ColumnItem">
                            <h2>Number of eligible pairs</h2>
                            <div className="viewPairs">
                                <h2>18</h2>
                                <button className="viewPairsButton">View Pairs</button>
                            </div>
                        </div>
                        <div className="viewPairsButtonMobileContainer">
                            <button className="viewPairsButtonMobile">View Pairs</button>
                        </div>
                    </div>
                    <div className="section3AbsoluteImages">
                        <img src="/assets/trading-reward-pool-1.png" alt="pool-1"/>
                        <img src="/assets/trading-reward-pool-2.png" alt="pool-2"/>
                    </div>
                </div>
            </section>

            {/* --------------- Section 4 -------------- */}
            <section className="TRsection4">
                <div className="section4ContainerShadow">
                    <div className="section4Container">
                        <h2>How to Earn</h2>
                        <div className="section4Cards">
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 1</p>
                                    <img src="/assets/trading-reward-step1-1.webp" alt="step-1"/>
                                </div>
                                <h2>Look for eligible pairs</h2>
                                <p>Use the hot token list on the Swap page to check which pairs are eligible for trading rewards.</p>
                            </div>
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 2</p>
                                    <img src="/assets/trading-reward-step2-1.webp" alt="step-2"/>
                                </div>
                                <h2>Start trading</h2>
                                <p>Start trading any eligible pairs to earn rewards in CAKE. The more you trade, the more rewards you will earn from the current reward pool</p>
                            </div>
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 3</p>
                                    <img src="/assets/trading-reward-step3-1.webp" alt="step-3"/>
                                </div>
                                <h2>Track your volume and rewards</h2>
                                <p>Come back on this page to check your volume and rewards in real time.</p>
                            </div>
                            <div className="card">
                                <div className="section4CardTop">
                                    <p>Step 4</p>
                                    <img src="/assets/trading-reward-step4-1.webp" alt="step-4"/>
                                </div>
                                <h2>Claim your rewards</h2>
                                <p>After each period ends, come back to this page and claim your rewards from the previous periods.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section4LearnMore">
                    <button >
                        <span>Learn More</span>
                        <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 jCMRod"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                    </button>
                </div>
            </section>

            {/* --------------- Section 5 -------------- */}
            <section className="TRsection5">
                <div className="TRrewardsBreakdown">Rewards Breakdown</div>
                <div className="TRsection5Interval">May 18, 2023, 07:00 - Jun 20, 2023, 03:00</div>
                <div className="TRsection5Campaign">Campaign 20230518</div>
                <div className="TRsection5ContainerShadow">
                    <div className="TRsection5ContainerBackground">
                        <div className="TRsection5TableContainer">
                            <table>
                                <thead >
                                    <tr className={max968 ? "hidden" : ""}>
                                        <th className={max968 ? "hidden" : ""}>Trading Pair</th>
                                        <th className={max968 ? "hidden" : ""}>Your Volume</th>
                                        <th className={max968 ? "hidden" : ""}>Your Trading Fee</th>
                                        <th className={max968 ? "hidden" : ""}>Your Reward Earned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Row 1 */}
                                    <tr className="tableRowBodyOver967">
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-t.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-$.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>USDT-USDC LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.01%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5ETHContainer">
                                                        <svg viewBox="0 0 10 14" fill="none" width="10px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z" fill="white" ></path><path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z" fill="white"></path><path d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z" fill="white" ></path><path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z" fill="white"></path><path d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z" fill="white" ></path><path d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z" fill="white" ></path></svg>
                                                        <div className="TRsection5ETH">ETH</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={max968 ? "" : "hidden"}>Your Volume</div>
                                            <div>$0</div>
                                        </td>
                                        <td>
                                            <div className={max968 ? "" : "hidden"}>Your Trading Fee</div>
                                            <div>$0.00</div>
                                        </td>
                                        <td>
                                            <div className={max968 ? "" : "hidden"}>Reward Earned</div>
                                            <div className="TRsection5Cell4Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 2 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-d.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-$.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>DAI-USDC LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.01%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5ETHContainer">
                                                        <svg viewBox="0 0 10 14" fill="none" width="10px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z" fill="white" ></path><path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z" fill="white"></path><path d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z" fill="white" ></path><path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z" fill="white"></path><path d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z" fill="white" ></path><path d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z" fill="white" ></path></svg>
                                                        <div className="TRsection5ETH">ETH</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* row 3 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-cake.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-weth.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>CAKE-ETH LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5ETHContainer">
                                                        <svg viewBox="0 0 10 14" fill="none" width="10px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z" fill="white" ></path><path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z" fill="white"></path><path d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z" fill="white" ></path><path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z" fill="white"></path><path d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z" fill="white" ></path><path d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z" fill="white" ></path></svg>
                                                        <div className="TRsection5ETH">ETH</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 4 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-cake.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-$.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>CAKE-USDC LP</div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5ETHContainer">
                                                        <svg viewBox="0 0 10 14" fill="none" width="10px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z" fill="white" ></path><path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z" fill="white"></path><path d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z" fill="white" ></path><path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z" fill="white"></path><path d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z" fill="white" ></path><path d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z" fill="white" ></path></svg>
                                                        <div className="TRsection5ETH">ETH</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 5 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-t.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-weth.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>USDT-ETH LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.05%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5ETHContainer">
                                                        <svg viewBox="0 0 10 14" fill="none" width="10px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z" fill="white" ></path><path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z" fill="white"></path><path d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z" fill="white" ></path><path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z" fill="white"></path><path d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z" fill="white" ></path><path d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z" fill="white" ></path></svg>
                                                        <div className="TRsection5ETH">ETH</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Ropw 6 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-$.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-weth.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>USDC-ETH LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.05%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5ETHContainer">
                                                        <svg viewBox="0 0 10 14" fill="none" width="10px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z" fill="white" ></path><path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z" fill="white"></path><path d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z" fill="white" ></path><path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z" fill="white"></path><path d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z" fill="white" ></path><path d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z" fill="white" ></path></svg>
                                                        <div className="TRsection5ETH">ETH</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 7 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-b.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-weth.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>WBTC-ETH LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5ETHContainer">
                                                        <svg viewBox="0 0 10 14" fill="none" width="10px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z" fill="white" ></path><path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z" fill="white"></path><path d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z" fill="white" ></path><path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z" fill="white"></path><path d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z" fill="white" ></path><path d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z" fill="white"></path></svg>
                                                        <div className="TRsection5ETH">ETH</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 8 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-$.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-t.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>USDC-USDT LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.01%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 9 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-cake.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-bnb.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>CAKE-BNB LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 10 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-cake.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-t.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>CAKE-USDT LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 11 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                <div className="TRsection5IconContainer">
                                                    <div className="TRsection5LargeIconContainer">
                                                        <img src="/assets/trading-reward-icon-E.png" alt="icon1 large" />
                                                    </div>
                                                    <div className="TRsection5SmallIconContainer">
                                                        <img src="/assets/trading-reward-icon-bnb.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>BUSD-BNB LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.05%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 12 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-t.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-bnb.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>USDT-BNB LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.05%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 13 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-b.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-e.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>BTCB-BUSD LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.05%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 14 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-b.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-t.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>BTCB-USDT LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.05%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 15 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-b.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-eth.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>BTCB-ETH LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 16 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-b.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-bnb.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>BTCB-BNB LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 17 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <dir className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-eth.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-bnb.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>ETH-BNB LP</div>
                                                </dir>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.25%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 18 */}
                                    <tr>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                <div className="TRsection5Cell1Split">
                                                    <div className="TRsection5IconContainer">
                                                        <div className="TRsection5LargeIconContainer">
                                                            <img src="/assets/trading-reward-icon-$.png" alt="icon1 large" />
                                                        </div>
                                                        <div className="TRsection5SmallIconContainer">
                                                            <img src="/assets/trading-reward-icon-eth.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>USDC-ETH LP</div>
                                                </div>

                                                <div>
                                                    <div>
                                                        <div className="TRsection5Percent">
                                                            0.05%
                                                        </div>
                                                        <div className="TRsection5V3">
                                                            V3
                                                        </div>
                                                    </div>
                                                    <div className="TRsection5BNBContainer">
                                                        <svg viewBox="0 0 40 40" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 cmvskh"><path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" fill="#F1BA0D"></path></svg>
                                                        <div className="TRsection5BNB">BNB</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>$0</td>
                                        <td>$0.00</td>
                                        <td>
                                            <div className="TRsection5Cell1Container">
                                                $0.00
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="TRsection5Pagination">
                            <div onClick={() => setTRSection5Page1(true)}>
                                <svg className={TRSection5Page1 ? "TRsection5ArrowActive" : "TRsection5ArrowInactive"} viewBox="0 0 24 24" color={TRSection5Page1 ? "primary" : "textDisabled"} fill={TRSection5Page1 ? "primary" : "textDisabled"} width="20px" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"></path>
                                </svg>
                            </div>
                            <div className={TRSection5Page1 ? "" : "hidden"}>Page 1 of 2</div>
                            <div className={TRSection5Page1 ? "hidden" : ""}>Page 2 of 2</div>
                            <div onClick={() => setTRSection5Page1(false)}>
                                <svg className={TRSection5Page1 ? "TRsection5ArrowInactive" : "TRsection5ArrowActive"} viewBox="0 0 24 24" color={TRSection5Page1 ? "textDisabled" : "primary"} fill={TRSection5Page1 ? "textDisabled" : "primary"} width="20px" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TradingReward