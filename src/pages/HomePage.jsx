import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup"
import TheCountUp from "../components/CountUp";

function HomePage() {

    const [topSection, setTopSection] = useState("farms");
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
          setTopSection((prevSection) => (prevSection === "farms" ? "syrup" : "farms"));
        }, 7000);

        setIntervalId(id);
    
        return () => clearInterval(id);
      }, []);
    
      const handleTSectionButtonClick = () => {

        clearInterval(intervalId);
    
        setTopSection((prevSection) => (prevSection === "farms" ? "syrup" : "farms"));
    
        const id = setInterval(() => {
          setTopSection((prevSection) => (prevSection === "farms" ? "syrup" : "farms"));
        }, 7000);

        setIntervalId(id);
      };

    return(
        <div>
            <section className="part-1">
                <div className="part-1-container">
                    <div className="swiper-container">
                        <div className="swiper-body-1 slide-1">
                            <div className="swiper-content slide-1">
                                <p>PancakeSwap V3</p>
                                <p>"Claim $135K CAKE Airdrop & Exclusive NFT"
                                </p>
                                <a target="_blank" rel="&quot;noopener noreferrer" href="/assets/astronaut-bunny.webp" className="sc-bcdfb9f2-0 fQQnxa">
                                    <button className="learn-more-button">
                                        <div>Learn More</div>
                                        <svg viewBox="0 0 24 24" color="invertedContrast" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-4ba21b47-0 dBIaUm">
                                            <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                            <span className="half-coin-span1 slide-1">
                                    <img src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv3BgCoinDown.45ce8443.png&w=256&q=75" alt="half-coin" className="half-coin" />
                            </span>
                        </div>
                        <div className="swiper-body-2 slide-2">
                            <div className="swiper-content-left slide-2">
                                <h2 >Perpetual futures</h2>
                                <h2 >Up to 100x Leverage</h2>
                                <a href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=light&chain=bnbchain">
                                    <button>
                                        <div>
                                            Trade Now
                                        </div>
                                        <svg viewBox="0 0 24 24" color="invertedContrast" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 ietCJc"><path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path></svg>
                                    </button>
                                </a>
                            </div>
                            <div className="swiper-content-right">
                                <span>
                                    <img src="/assets/perpetual.webp" alt="PerpetualBanner"/>
                                    <img src="/assets/perpetualMobile.webp" alt="PerpetualBannerMobile"/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="part1SVGContainer">
                        <div className="part1SVGContainerChild">
                            <svg className='part1SvgDark' viewBox="0 0 1660 339" width="100%" color="text" xmlns="http://www.w3.org/2000/svg"><path d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z" fill="url(#paint0_linear_dark)"></path><defs><linearGradient id="paint0_linear_dark" x1="830" y1="83.5" x2="830" y2="338.5" gradientUnits="userSpaceOnUse"><stop stop-color="#08060B" stop-opacity="0.2"></stop><stop offset="0.545554" stop-color="#08060B" stop-opacity="0.5"></stop><stop offset="1" stop-color="#08060B"></stop></linearGradient></defs></svg>
                            <svg className='part1SvgLight' viewBox="0 0 1660 339" width="100%" color="text" xmlns="http://www.w3.org/2000/svg"><path d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z" fill="url(#paint0_linear_light)"></path><defs><linearGradient id="paint0_linear_light" x1="830" y1="84" x2="830" y2="339" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.48"></stop><stop offset="0.566389" stop-color="white" stop-opacity="0.35"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>
                        </div>
                    </div>
                    <div id="homepage-hero" >
                        <div id="homepage-hero-left">
                            <h2 className="homepage-hero-left-text-1">The moon is made of pancakes.</h2>
                            <h2 className="homepage-hero-left-text-2">Trade, earn, and win crypto on the most popular decentralized platform in the galaxy</h2>
                            <div className="homepage-hero-buttons">
                                <button id="connect-wallet-button" type="button">Connect Wallet</button>
                                <button id="trade-now-button" type="button">Trade Now</button>
                            </div>
                        </div>
                        <div id="homepage-hero-right">
                            <div className="homepage-hero-right">
                                <div>
                                    <img className="homepage-hero-right-moving-bunny-img" src="/assets/astronaut-bunny.webp" alt=""/>
                                    <img src="/assets/star-top-r@2x.webp" alt="fading-star-top"/>
                                    <img src="/assets/star-r@2x.webp" alt="fading-star-bot-right"/>
                                    <img src="/assets/fading-star-bot-left.webp" alt=""/>
                                </div>
                            </div>
                            <div className="homepage-hero-right-fading-little-star">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="part-2">
                <img src="/assets/svgexport-24.svg" alt="Purple bunny"/>
                <h2>Used by millions. </h2>
                <h2>Trusted with billions.</h2>
                <p>PancakeSwap has the most users of any decentralized platform, ever.</p>
                <p>And those users are now entrusting the platform with over $3.4 billion in funds.</p>
                <p><b>Will you join them?</b></p>
                <div className="cards-flex">
                    <div>
                        <figure>
                            <img src="/assets/svgexport-25.svg" alt=""/>
                            <figcaption>
                                <h3>
                                    1.6 million <strong className="purple">users</strong>
                                </h3>
                                <p>in the last 30 days</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div>
                        <figure>
                            <img src="/assets/svgexport-26.svg" alt=""/>
                            <figcaption>
                                <h3>
                                    22 million <strong className="green">trades</strong>
                                </h3>
                                <p>made in the last 30 days</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img src="/assets/svgexport-27.svg" alt=""/>
                            <figcaption>
                                <h3>
                                    $3.4 billion <strong className="pink">staked</strong>
                                </h3>
                                <p>Total Value Locked</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <div className="divisor">
                <svg viewBox="0 0 1660 48" preserveAspectRatio="none" color="text" width="1660" xmlns="http://www.w3.org/2000/svg" height="48" >
                    <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z" fill="var(--colors-background)"></path>
                </svg>
            </div>

            <section id="part-3" className="grid-desktop flex-col-mobile">
                <div className="main-part-3">
                    <div className="animated-imgs-wrapper">
                        <div className="animated-imgs">
                            <img src="/assets/BNB.webp" className="animated-img" alt="BNB Token" srcSet="/assets/BNB.webp 512w,
                            /assets/BNB@1.5x.webp 768w,
                            /assets/BNB@2x.webp 1024w" height="428"/>
                            <img src="/assets/BTC.webp" className="animated-img" alt="BTC Token" srcSet="/assets/BTC.webp 512w,
                            /assets/BTC@1.5x.webp 768w,
                            /assets/BTC@2x.webp 1024w" height="428"/>
                            <img src="/assets/CAKE.webp" className="animated-img" alt="CAKE Token" srcSet="/assets/CAKE.webp 512w,
                            /assets/CAKE@1.5x.webp 768w,
                            /assets/CAKE@2x.webp 1024w" height="428"/>
                        </div>
                    </div>
                    <div className="content">
                        <h2><strong>Trade</strong> anything. No registration, no hassle.</h2>
                        <p>Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</p>


                        <Link to="/">Trade now</Link>
                        <Link to="/">Learn <img src="/assets/svgexport-12.svg" alt=""/></Link>
                    </div>
                </div>
            </section>
            <section id="part-4">
                <div className="divisor">
                <svg viewBox="0 0 1660 48" preserveAspectRatio="none" color="text" width="1660" xmlns="http://www.w3.org/2000/svg" class="sc-4ba21b47-0 IIbzK" height="48" ><path d="M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z" fill="var(--colors-background)"></path></svg>
                </div>
                <div className="part-4-wrapper">
                    <div className="animated-imgs-wrapper">
                        <div className="animated-imgs">
                            <img src="/assets/pie.webp" className="animated-img" alt="" srcSet="/assets/pie.webp 512w,
                            /assets/pie@1.5x.webp 768w,
                            /assets/pie@2x.webp 1024w"/>
                            <img src="/assets/stonks.webp" className="animated-img" alt="" srcSet="/assets/stonks.webp 512w,
                            /assets/stonks@1.5x.webp 768w,
                            /assets/stonks@2x.webp 1024w"/>
                            <img src="/assets/folder.webp" className="animated-img" alt="" srcSet="/assets/folder.webp 512w,
                            /assets/folder@1.5x.webp 768w,
                            /assets/folder@2x.webp 1024w"/>
                        </div>
                    </div>
                    <div className="main-content">
                        <h2><strong>Earn</strong> passive income with crypto.</h2>
                        <p>PancakeSwap makes it easy to make your crypto work for you.</p>
                        <div className="links">
                            <Link to="/">Explore</Link>
                            <Link to="/">Learn <img src="/assets/svgexport-12.svg" alt=""/></Link>
                        </div>
                    </div>
                </div>

                <div className="flex5">
                    <div>
                        <div className="part5">
                            <div className="title5">
                                <h2>
                                    Top 
                                    <span style={{color: '#7645d9'}}>{topSection === "farms" ? (
                                        " Farms"
                                    ) : (
                                        " Syrup Pools"
                                    )}</span>
                                </h2>
                                <button onClick={() => {handleTSectionButtonClick()}} className="switch5">
                                    <img src="/assets/svgexport-31.svg" alt="switch"/>
                                </button>
                            </div>
                            <div className="content5">
                            <div className="farms">
                                <div className="farmsg">
                                    <div className={topSection === "farms" ? ("farmsg-box") : ("farmsg-box-h")}>
                                        <div className="fgbox-top">unshETH-USH LP v3</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={2038.160} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                    <div className={topSection !== "farms" ? ("farmsg-box") : ("farmsg-box-h")}>
                                        <div className="fgbox-top">Stake CAKE LP v3</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={4745.376} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                </div>
                                <div className="farmsg">
                                    <div className={topSection === "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">EQB-BNB LP v3</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={320.163} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                    <div className={topSection !== "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">Stake CAKE - Earn SABLE</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={23.345} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                </div>
                                <div className="farmsg">
                                    <div className={topSection === "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">SABLE-BNB LP</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={160.503} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                    <div className={topSection !== "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">Stake CAKE - Earn AXL</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={5.398} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                </div>
                                <div className="farmsg">
                                    <div className={topSection === "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">METIS-BNB LP</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={124.715} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                    <div className={topSection !== "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">Stake CAKE - Earn CSIX</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={4.545} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                </div>
                                <div className="farmsg">
                                    <div className={topSection === "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">SQUAD-CAKE LP</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={101.041} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                    <div className={topSection !== "farms" ? ("farmsg-boxb") : ("farmsg-boxb-h")}>
                                        <div className="fgbox-top">Stake CAKE - Earn xALGO</div>
                                        <div className="fgbox-mid">
                                            <div className="fgbox-mid-wrap">
                                                <span><CountUp end={4.483} duration={5} decimals={3}/>%</span>
                                            </div>
                                        </div>
                                        <div className="fgbox-bot">APR</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="part-6">
                <div className="main-part-6">
                    <div className="background-images-part-6">
                        <div className="lower-corner">
                            <div>
                                <img className="card-cake" src="/assets/card-cake.webp" alt="cake card"/>
                            </div>
                            <div>
                                <img className="card-green-arrow" src="/assets/card-green-arrow.webp" alt="green arrow card"/>
                            </div>
                            <div>
                                <img className="card-pink-arrow" src="/assets/card-pink-arrow.webp" alt="pink arrow card"/>
                            </div>
                            <div>
                                <img className="card-cake-2" src="/assets/card-cake-2.webp" alt="cake card 2"/>
                            </div>
                        </div>
                        <div className="upper-corner">
                            <div>
                                <img className="ball-2" src="/assets/ball-2.webp" alt="ball-2"/>
                            </div>
                            <div>
                                <img className="ball-4" src="/assets/ball-4.webp" alt="ball-4"/>
                            </div>
                            <div>
                                <img className="ball-6" src="/assets/ball-6.webp" alt="ball-6"/>
                            </div>
                            <div>
                                <img className="ball-7" src="/assets/ball-7.webp" alt="ball-7"/>
                            </div>
                            <div>
                                <img className="ball-9" src="/assets/ball-9.webp" alt="ball-9"/>
                            </div>
                        </div>
                        <div className="part-6-banner">
                            <h2><span>Win</span> millions in prizes</h2>
                            <div>
                                Provably fair, on-chain games.
                            </div>
                            <div>
                                Win big with PancakeSwap.
                            </div>
                            <div>
                                <div className="card-left-container">
                                    <div className="card-left-shadow">
                                        <div className="card-left">
                                            <div className="svg-card-left">
                                                <svg viewBox="0 0 24 24" width="36px" color="inverseContrast" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 gCNFrA"><path d="M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z"></path></svg>
                                            </div>
                                            <div className="card-left-content">
                                                <div>Prediction</div>
                                                <h2>$1.2 billion</h2>
                                                <div>in BNB + CAKE won so far</div>
                                                <div>Predict the price trend of BNB or CAKE to win</div>
                                            </div>
                                            <div className="card-left-button">
                                                <Link to="/">
                                                    <button>
                                                        <div>Play</div>
                                                        <svg viewBox="0 0 24 24" color="invertedContrast" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 bmGvXN"><path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path></svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-right-container">
                                    <div className="card-right-shadow">
                                        <div className="card-right">
                                            <div className="svg-card-right">
                                                <svg viewBox="0 0 24 24" color="white" width="36px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 iDcbEw"><path fillRule="evenodd" clipRule="evenodd" d="M1.4144 13.4824L9.36944 5.52736L10.0765 6.23446C10.3694 6.52736 10.8443 6.52736 11.1372 6.23446C11.4301 5.94157 11.4301 5.4667 11.1372 5.1738L10.4301 4.4667L12.7281 2.16869C13.5092 1.38764 14.7755 1.38764 15.5565 2.16869L16.6173 3.22943C16.8125 3.42465 16.8125 3.74115 16.6173 3.93637C15.641 4.91268 15.641 6.49559 16.6173 7.4719C17.5936 8.44821 19.1765 8.44821 20.1528 7.4719C20.348 7.27669 20.6645 7.27669 20.8597 7.4719L21.9205 8.53265C22.7015 9.3137 22.7015 10.58 21.9205 11.3611L19.6224 13.6592L18.9153 12.9521C18.6224 12.6592 18.1475 12.6592 17.8546 12.9521C17.5617 13.245 17.5617 13.7198 17.8546 14.0127L18.5617 14.7198L10.6068 22.6748C9.82574 23.4558 8.55941 23.4558 7.77836 22.6748L6.7177 21.6141C6.52244 21.4189 6.52244 21.1023 6.7177 20.907C7.69401 19.9307 7.69401 18.3478 6.7177 17.3715C5.74139 16.3952 4.15848 16.3952 3.18217 17.3715C2.9869 17.5667 2.67032 17.5667 2.47506 17.3715L1.4144 16.3108C0.633351 15.5298 0.633351 14.2634 1.4144 13.4824ZM13.2584 7.29521C12.9655 7.00232 12.4907 7.00232 12.1978 7.29521C11.9049 7.5881 11.9049 8.06298 12.1978 8.35587L12.9049 9.06298C13.1978 9.35587 13.6727 9.35587 13.9655 9.06298C14.2584 8.77009 14.2584 8.29521 13.9655 8.00232L13.2584 7.29521ZM15.0262 10.1236C15.3191 9.83075 15.794 9.83074 16.0869 10.1236L16.794 10.8307C17.0869 11.1236 17.0869 11.5985 16.794 11.8914C16.5011 12.1843 16.0262 12.1843 15.7333 11.8914L15.0262 11.1843C14.7333 10.8914 14.7333 10.4165 15.0262 10.1236Z"></path></svg>
                                            </div>
                                            <div className="card-right-content">
                                                <div>Lottery</div>
                                                <div><span>$<TheCountUp end={68026} duration={5}/></span></div>
                                                <div>in CAKE prizes this round</div>
                                                <div>Buy tickets with CAKE, win CAKE if your numbers match</div>
                                                <div className="card-right-button">
                                                    <Link to="/">
                                                        <button>
                                                            <div>Buy Tickets</div>
                                                            <svg viewBox="0 0 24 24" color="invertedContrast" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 bmGvXN"><path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path></svg>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="part-7">
                <div className="main-content">
                    <div className="main-text">
                        <h2><strong>CAKE</strong> makes our world go round.</h2>
                        <p>CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!</p>
                        <div className="links">
                            <Link to="/" className="button-alike">Buy CAKE</Link>
                            <Link to="/">Learn <img src="/assets/svgexport-12.svg" alt=""/></Link>
                        </div>
                    </div>
                    <div className="animated-imgs-wrapper">
                        <div className="animated-imgs">
                            <img src="/assets/bottom-right.webp" className="animated-img" alt="" srcSet="/assets/bottom-right.webp 512w,
                            /assets/bottom-right@1.5x.webp 768w,
                            /assets/bottom-right@2x.webp 1024w" height="512"/>
                            <img src="/assets/top-right.webp" className="animated-img" alt="" srcSet="/assets/top-right.webp 512w,
                            /assets/top-right@1.5x.webp 768w,
                            /assets/top-right@2x.webp 1024w" height="512"/>
                            <img src="/assets/coin.webp" className="animated-img" alt="" srcSet="/assets/coin.webp 512w,
                            /assets/coin@1.5x.webp 768w,
                            /assets/coin@2x.webp 1024w" height="512"/>
                            <img src="/assets/top-left.webp" className="animated-img" alt="" srcSet="/assets/top-left.webp 512w,
                            /assets/top-left@1.5x.webp 768w,
                            /assets/top-left@2x.webp 1024w" height="512"/>
                        </div>
                    </div>
                </div>
                <div className="data">
                    <div id="data-block-1" className="data-block">
                        <p>Circulating Supply</p>
                        <h3><TheCountUp end={187394871} duration={5}/></h3>
                    </div>
                    <div id="data-block-2" className="data-block">
                        <p>Market cap</p>
                        <h3>$<TheCountUp end={680} duration={5}/> million</h3>
                    </div>
                    <div id="data-block-3" className="data-block">
                        <p>Total supply</p>
                        <h3><TheCountUp end={383780561} duration={5}/></h3>
                    </div>
                    <div id="data-block-4" className="data-block">
                        <p>Burned to date</p>
                        <h3><TheCountUp end={780090834} duration={5}/></h3>
                    </div>
                    <div id="data-block-5" className="data-block">
                        <p>Max Supply</p>
                        <h3><TheCountUp end={750000000} duration={5}/></h3>
                    </div>
                    <div id="data-block-6" className="data-block">
                        <p>Current emissions</p>
                        <h3><TheCountUp end={9.9} duration={5}/>/block</h3>
                    </div>
                </div>
            </section>

            <section id="part-8">
                <div className="main-content-wrapper">
                    <div className="main-content">
                        <div className="animated-imgs-wrapper">
                            <div className="animated-imgs">
                                <img src="/assets/1-bottom.webp" className="animated-img" alt="" srcSet="/assets/1-bottom.webp 512w,
                                /assets/1-bottom@1.5x.webp 768w,
                                /assets/1-bottom@2x.webp 1024w"/>
                                <img src="/assets/1-left.webp" className="animated-img" alt="" srcSet="/assets/1-left.webp 512w,
                                /assets/1-left@1.5x.webp 768w,
                                /assets/1-left@2x.webp 1024w"/>
                                <img src="/assets/1-top.webp" className="animated-img" alt="" srcSet="/assets/1-top.webp 512w,
                                /assets/1-top@1.5x.webp 768w,
                                /assets/1-top@2x.webp 1024w"/>
                            </div>
                        </div>

                        <div className="main-text">
                            <h2>Start in seconds.</h2>
                            <p>Connect your crypto wallet to start using the app in seconds.</p>
                            <p><strong>No registration needed.</strong></p>
                            <Link to="/">Learn how to start <img src="/assets/svgexport-12.svg" alt=""/></Link>
                            <button>Connect Wallet</button>
                        </div>

                        <div className="animated-imgs-wrapper">
                            <div className="animated-imgs">
                                <img src="/assets/2-bottom.webp" className="animated-img" alt="" srcSet="/assets/2-bottom.webp 512w,
                                /assets/2-bottom@1.5x.webp 768w,
                                /assets/2-bottom@2x.webp 1024w"/>
                                <img src="/assets/2-top.webp" className="animated-img" alt="" srcSet="/assets/2-top.webp 512w,
                                /assets/2-top@1.5x.webp 768w,
                                /assets/2-top@2x.webp 1024w"/>
                                <img src="/assets/2-right.webp" className="animated-img" alt="" srcSet="/assets/2-right.webp 512w,
                                /assets/2-right@1.5x.webp 768w,
                                /assets/2-right@2x.webp 1024w"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage