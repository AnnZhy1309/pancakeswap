import React from "react";
import { Link } from "react-router-dom";
import LivePools from "./LivePools";
import { useState } from "react";





function Pools() {
    const [sortOption, setSortOption] = useState("hot");

    const handleSort = (option) => {
      setSortOption(option);
    };

    function SortDropdown(props) {
        const [open, setOpen] = useState(false);
      
        const sortOptionText = {
          hot: "Hot",
          stake: "Total Staked",
          apr: "APR",
          earned: "Earned",
          latest: "Latest"
        };
      
        return (
          <li className="sort">
            <div className="sselected" onClick={() => setOpen(!open)}>
              <div className="sbox">
                <div className="stext">
                  {sortOptionText[sortOption]}
                </div>
                <img src="assets//down-arrow-filled.svg" alt="down-arrow" />
                {open && <SortDropdownMenu />}
              </div>
            </div>
          </li>
        );
      }
      

    function SortDropdownMenu(){


        return(
            <div className="sdropdown-menu">
            <ul>
                <li>
                    <div color="text" fontSize="16px" className="s-dropdown-item" onClick={() => handleSort("apr")}>APR</div>
                </li>
                <li>
                    <div color="text" fontSize="16px" className="s-dropdown-item" onClick={() => handleSort("earned")}>Earned</div>
                </li>
                <li>
                    <div color="text" fontSize="16px" className="s-dropdown-item" onClick={() => handleSort("stake")}>Total Staked</div>
                </li>
                <li>
                    <div color="text" fontSize="16px" className="s-dropdown-item" onClick={() => handleSort("latest")}>Latest</div>
                </li>
                <li>
                    <div color="text" fontSize="16px" className="s-dropdown-item" onClick={() => handleSort("hot")}>Hot</div>
                </li>
            </ul>
        </div>
        )
    }



  return(
    <div className="pools">
      <div className="earn-nav">
        <div className="enav-wrap">
          <div className="enav-svg1">
              <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 dPwWVs"><path d="M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"></path></svg>
          </div>
          <div className="enav-svg2">
              <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-231a1e38-0 dPwWVs"><path d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"></path></svg>
          </div>
          <div className="enav-elements">
              <div className="enav-element">
                  <div className="enav-element-btn">
                      <Link to="/">Farms</Link>
                  </div>
              </div>
              <div className="enav-element">
                  <div className="enav-element-btn">
                      <Link to="/">Pools</Link>
                      <div className="slcted"></div>
                  </div>
              </div>
              <div className="enav-element">
                  <div className="enav-element-btn">
                      <Link to="/">Liquid Staking</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="mwrap">
          <div className="banner">
                    <div className="bwrap1">
                        <div className="bwrap">
                            <div className="bsections">
                                <h1 scale="xxl"
                                    color="secondary"
                                    >Syrup Pools</h1>
                                <h2 scale="xxl"
                                    color="text"
                                    fontSize="16px"
                                >Just stake some tokens to earn.</h2>
                                <h2 scale="xxl"
                                    color="text"
                                    fontSize="16px"
                                >High APR, low risk.</h2>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
        <div className="content">
            <div className="controlboard">
                <div className="cbuttons">
                    <div className="viewstyle-buttons">
                        <button>
                            <img src="assets/boxview.svg" alt="" />
                        </button>
                        <button>
                            <img src="assets/listview.svg" alt="" />
                        </button>
                    </div>
                    <div className="list-switch-w">
                        <div className="list-switch">
                            <Link to="/pools"scale="sm" id="selected-a">
                                Live
                            </Link>
                            <span>
                                <Link to="/pools/history" id="unselected-a">
                                    Finished
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="isstaked">
                        <div className="stake-checkbox">
                            <input type="checkbox" scale="sm" name="stake" id="stake-checkbox" />
                            <div className="sliderr round"></div>
                        </div>
                        <div className="staked-text" color="text" fontSize="16px">Staked only</div>
                    </div>
                </div>
                <div className="csort">
                    <div className="sort-search">
                        <div className="sort-wrap">
                            <div className="sort-text">
                                Sort by
                            </div>
                            <SortDropdown />
                        </div>
                        <div className="search-wrap">
                            <div className="search-text">Search</div>
                            <div className="searchbox">
                                <input type="text" placeholder="Search Pools" scale="md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poolboard">
              <LivePools sortOption={sortOption}/>
            </div>
        </div>
        <div className="plogo">
                <img src="assets/3d-syrup-bunnies.png" alt="illustration" />
            </div>
      </div>
  </div>
  )
}

export default Pools