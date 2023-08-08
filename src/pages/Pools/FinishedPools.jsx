import React from "react"
import FRow from "./FRow";
import CakeRow from "./CakeRow";
  

function FinishedPools({ sortOption }) {
    const poolsData = [
        {
            imgSrc: "https://tokens.pancakeswap.finance/images/0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65.png",
            name: "AXL",
            earned: 0,
            totalStaked: 62143,
            apr: 0.00,
            ending: null
        },
        {
            imgSrc: "https://tokens.pancakeswap.finance/images/0x3BC5AC0dFdC871B365d159f728dd1B9A0B5481E8.png",
            name: "SD",
            earned: 0,
            totalStaked: 43704,
            apr: 0.00,
            ending: null
        },
        {
            imgSrc: "https://tokens.pancakeswap.finance/images/0x04756126F044634C9a0f0E985e60c88a51ACC206.png",
            name: "CSIX",
            earned: 0,
            totalStaked: 1047471,
            apr: 0.00,
            ending: null
        },
        {
            imgSrc: "https://tokens.pancakeswap.finance/images/0xFfBa7529AC181c2Ee1844548e6D7061c9A597dF4.png",
            name: "CAPS",
            earned: 0,
            totalStaked: 257407,
            apr: 0.00,
            ending: null
        },
        {
            imgSrc: "https://tokens.pancakeswap.finance/images/0xD06716E1Ff2E492Cc5034c2E81805562dd3b45fa.png",
            name: "MGP",
            earned: 0,
            totalStaked: 1381,
            apr: 0.00,
            ending: null
        },
        {
            imgSrc: "https://tokens.pancakeswap.finance/images/0xf7DE7E8A6bd59ED41a4b5fe50278b3B7f31384dF.png",
            name: "RDNT",
            earned: 0,
            totalStaked: 1881239,
            apr: 0.00,
            ending: null
        },
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
          <div style={{ display: 'none' }}><CakeRow /></div>
          {sortedPools.map((pool, index) => (
            <FRow
              key={index}
              imgSrc={pool.imgSrc}
              name={pool.name}
              earned={pool.earned}
              totalStaked={pool.totalStaked}
              apr={pool.apr}
              ending={pool.ending}
            />
          ))}
        </div>
      );
    }
    
    export default FinishedPools;