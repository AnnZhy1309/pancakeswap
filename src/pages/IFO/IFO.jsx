const IFO = () => {
    return(
        <div id="ifo">
            <header>
                <div className="main-header-wrapper">
                    <nav className="select-section">
                        <button id="latest-select" className="selected">Latest</button>
                        <button id="finished-select">Finished</button>
                    </nav>
                    <div className="info-page">
                        <div className="info-page-wrapper">
                            <h1>IFO: Initial Farm Offerings</h1>
                            <div className="more-info">
                                <h2>Buy new tokens launching on BNB Smart Chain</h2>
                                <a href="#take-part">How does it work?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="ifo-latest-wrapper selected">
                <section id="ifo-main-section">
                    <div className='ifo-right-grid-container'>
                        <div className="stake">
                            <div className="box-header">
                                <div className="main-headings">
                                    <h3>Stake CAKE</h3>
                                    <p>Stake, Earn – And more!</p>
                                </div>
                                <div className="images">
                                    <img src="/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg" alt="" className="ps-img"/>
                                    <img src="/assets/autorenew.svg" className="autorenew-img" alt=""/>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="calculators">
                                    <div className="flexible">
                                        <p>Flexible APY:</p>
                                        <div className="numbers">
                                            <p><strong>1.93%</strong></p>
                                            <button><img src="/assets/calculator-button.svg" alt=""/></button>
                                        </div>
                                    </div>
                                    <div className="locked">
                                        <p>Locked APR:</p>
                                        <div className="numbers">
                                            <p>Up to <strong>41.35%</strong></p>
                                            <button><img src="/assets/calculator-button.svg" alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="start">
                                    <p>Start earning</p>
                                    <button>Connect Wallet</button>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="main-footer-wrapper">
                                    <div className="main-footer">
                                        <p>Auto/Locked</p>
                                        <img src="/assets/info-icon.svg" alt=""/>
                                    </div>
                                    <details>
                                        <summary>Details <img src="/assets/toggle-icon.svg" alt=""/></summary>
                                    </details>
                                </div>
                            </div>
                            <div className="details">
                                <div className="staked">
                                    <p className="dotted">Total staked:</p>
                                    <p>266,185,112 CAKE</p>
                                </div>
                                <div className="locked">
                                    <p>Total locked:</p>
                                    <p>196,757,436 CAKE</p>
                                </div>
                                <div className="lock-duration">
                                    <p className="dotted">Average lock duration:</p>
                                    <p>43 weeks</p>
                                </div>
                                <div className="performance">
                                    <p className="dotted">Performance Fee</p>
                                    <p>0~2%</p>
                                </div>
                                <div className="links">
                                    <a href="#">See Token Info <img src="/assets/svgexport-12.svg" alt=""/></a>
                                    <a href="#">View Tutorial <img src="/assets/svgexport-12.svg" alt=""/></a>
                                    <a href="#">View Contract <img src="/assets/link-2.svg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="token-vesting">
                            <div className="box-header">
                                <div className="main-headings">
                                    <h3>Token Vesting</h3>
                                    <p>You have no tokens available for claiming</p>
                                </div>
                                <img src="/assets/not-tokens.svg" alt=""/>
                            </div>
                            <div className="box-body">
                                <img src="/assets/question-icon.svg" alt=""/>
                                <p><strong>You have no tokens available for claiming</strong></p>
                                <p>Participate in our next IFO. and remember to lock your CAKE to increase your allocation!</p>
                                <a href="#take-part">How does it work? »</a>
                            </div>
                        </div>
                    </div>

                    <div className="coming-soon">
                        <div className="box-header">
                            <img src="" alt=""/>
                        </div>
                        <div className="box-body">
                            <div className="public-sale">
                                <div className="public-header">
                                    <h3>Public Sale</h3>
                                    <img src="/assets/info-icon.svg" alt=""/>
                                </div>
                                <div className="public-body">
                                    <img src="/assets/question-icon.svg" alt=""/>
                                    <p>Follow our social channels to learn more about the next IFO.</p>
                                </div>
                            </div>
                            <div className="private-sale">
                                <div className="private-header">
                                    <h3>Private Sale</h3>
                                </div>
                                <div className="private-body">
                                    <img src="/assets/question-icon.svg" alt=""/>
                                    <p>Follow our social channels to learn more about the next IFO.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="take-part">
                    <div id="take-part-wrapper">
                            <h2>How to Take Part in the Public Sale</h2>
                        <div className="take-part-steps">
                            <div className="one">
                                <div className="step">
                                    <p className="activated">1</p>
                                    <div className="step-line activated"></div>
                                </div>
                                <div className="description">
                                    <h3>Activate your Profile</h3>
                                    <p>You'll need an active PancakeSwap Profile to take part in an IFO!</p>
                                    <button>Connect Wallet</button>
                                </div>
                            </div>
                            <div className="two">
                                <div className="step">
                                    <p>2</p>
                                    <div className="step-line double"></div>
                                </div>
                                <div className="description">
                                    <h3>Lock CAKE in the CAKE pool</h3>
                                    <p className="less">The maximum amount of CAKE you can commit to the Public Sale equals the number of your iCAKE. Lock more CAKE for longer durations to increase the maximum CAKE you can commit to the sale.</p>
                                    <p className="less"><strong>How does the number of iCAKE calculated?</strong></p>
                                    <p>Missed this IFO? You will enjoy the same amount of iCAKE for future IFOs if your locked-staking position is not unlocked.</p>
                                </div>
                            </div>
                            <div className="three">
                                <div className="step">
                                    <p>3</p>
                                    <div className="step-line double"></div>
                                </div>
                                <div className="description">
                                    <h3>Commit CAKE</h3>
                                    <p>Please note that CAKE in the fixed-term staking positions will remain locked and can not be used for committing to IFO sales. You will need a separate amount of CAKE in your wallet balance to commit to the IFO sales.</p>
                                </div>
                            </div>
                            <div className="four">
                                <div className="step">
                                    <p>4</p>
                                    <div className="step-line"></div>
                                </div>
                                <div className="description">
                                    <h3>Claim your tokens and achievement</h3>
                                    <p>After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE tokens will be returned to your wallet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="details">
                    <div className="details-section-wrapper">
                        <img src="/assets/ifo-bunny (1).png" alt=""/>
                        <div className="details-section">
                            <h3>Details</h3>
                            <details>
                                <summary>
                                    <p>What's the difference between a Public Sale and Private Sale?</p>
                                    <p>Details <img src="/assets/toggle-icon.svg" alt=""/></p>
                                </summary>
                                <div className="open">
                                    <p>In the current IFO format. There is a brand new Private Sale. To participate, participants will have to meet certain requirements presented on the IFO card. Each eligible participant will be able to commit any amount of CAKE up to the maximum commit limit, which is published along with the IFO voting proposal. The Private Sale has no participation fee.</p>
                                    <p>In the Public Sale, everyone with an active PancakeSwap profile can commit. However the maximum amount of CAKE users can commit, is equal to the number of iCAKE they have.</p>
                                    <p>Learn more about iCAKE <a href="">here</a></p>
                                    <p>And there's a fee for participation: see below.</p>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    <p>Which sale should I commit to? Can I do both?</p>
                                    <p>Details <img src="/assets/toggle-icon.svg" alt=""/></p>
                                </summary>
                                <div className="open">
                                    <p>You can choose one or both at the same time!</p>
                                    <p>We recommend you to check if you are eligible to participate in the Private Sale first. In the Public Sale, if the amount you commit is too small, you may not receive a meaningful amount of IFO tokens.</p>
                                    <p>Just remember you need an active PancakeSwap Profile in order to participate.</p>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    <p>How much is the participation fee?</p>
                                    <p>Details <img src="/assets/toggle-icon.svg" alt=""/></p>
                                </summary>
                                <div className="open">
                                    <p>There's only a participation fee for the Public Sale: there's no fee for the Private Sale.</p>
                                    <p>The participation fee decreases in cliffs, based on the percentage of overflow from the “Public Sale” portion of the IFO.</p>
                                    <p>Note: Fees may vary between different IFOs. To learn more about the participation fees, please refer to the details in the IFO proposal (vote) for the specifics of the IFO you want to take part in.</p>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    <p>Where does the participation fee go?</p>
                                    <p>Details <img src="/assets/toggle-icon.svg" alt=""/></p>
                                </summary>
                                <div className="open">
                                    <p>The CAKE from the participation fee will be burnt as part of the weekly token burn.</p>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    <p>How can I get an achievement for participating in the IFO?</p>
                                    <p>Details <img src="/assets/toggle-icon.svg" alt=""/></p>
                                </summary>
                                <div className="open">
                                    <p>You need to contribute a minimum of about 10 USD worth of CAKE to either sale.</p>
                                    <p>You can contribute to one or both, it doesn't matter: only your overall contribution is counted for the achievement.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="last">
                                    <p>What is the difference between an IFO and a cIFO?</p>
                                    <p>Details <img src="/assets/toggle-icon.svg" alt=""/></p>
                                </summary>
                                <div className="open">
                                    <p>cIFOs are a new subtype of IFOs, designed to reward our loyal community, and also introduce our community to projects with slightly smaller raises.</p>
                                    <p>Learn more about cIFO <a href="#">here</a></p>
                                </div>
                            </details>
                        </div>
                    </div>
                    <a href="#">Apply to run an IFO! <img src="/assets/svgexport-12.svg" alt=""/></a>
                </section>
            </div>
        </div>
    )
}

export default IFO