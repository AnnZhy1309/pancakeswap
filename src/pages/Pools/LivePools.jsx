import React from "react"
import Row from "./Row";
import CakeRow from "./CakeRow";
  

function LivePools({ sortOption }) {
    const poolsData = [
        {
          imgSrc: "https://tokens.pancakeswap.finance/images/0xBdEAe1cA48894A1759A8374D63925f21f2Ee2639.png",
          name: "EDU",
          earned: 0,
          totalStaked: 5372663,
          apr: 9.92,
          ending: 30
        },
        {
          imgSrc: "https://tokens.pancakeswap.finance/images/0x91d6d6aF7635B7b23A8CED9508117965180e2362.png",
          name: "USH",
          earned: 0,
          totalStaked: 4093360,
          apr: 9.71,
          ending: 26
        },
        {
          imgSrc: "https://tokens.pancakeswap.finance/images/0x4C882ec256823eE773B25b414d36F92ef58a7c0C.png",
          name: "PSTAKE",
          earned: 0,
          totalStaked: 1569188,
          apr: 10.48,
          ending: 25
        },
        {
          imgSrc: "https://tokens.pancakeswap.finance/images/0x2dfF88A56767223A5529eA5960Da7A3F5f766406.png",
          name: "SID",
          earned: 0,
          totalStaked: 2669581,
          apr: 9.09,
          ending: 24
        }
    ];
  
    const sortPools = (pools, option) => {
        let sortedPools = [];
    
        switch (option) {
          case "stake":
            sortedPools = [...pools].sort((a, b) => b.totalStaked - a.totalStaked);
            break;
          case "hot":
            sortedPools = [...pools].sort((a, b) => b.ending - a.ending);
            break;
          case "apr":
            sortedPools = [...pools].sort((a, b) => b.apr - a.apr);
            break;
          case "earned":
            sortedPools = [...pools].sort((a, b) => b.earned - a.earned);
            break;
          case "latest":
            sortedPools = [...pools].sort((a, b) => b.ending - a.ending);
            break;
          default:
            sortedPools = pools;
        }
    
        return sortedPools;
      };
    
      const sortedPools = sortPools(poolsData, sortOption);
    
      return (
        <div className="poolcontent">
          {sortOption !== "latest" && <CakeRow />}
          {sortedPools.map((pool, index) => (
            <Row
              key={index}
              imgSrc={pool.imgSrc}
              name={pool.name}
              earned={pool.earned}
              totalStaked={pool.totalStaked}
              apr={pool.apr}
              ending={pool.ending}
            />
          ))}
          {sortOption === "latest" && <CakeRow />}
        </div>
      );
    }
    
    export default LivePools;