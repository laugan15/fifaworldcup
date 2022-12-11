import React, { useEffect, useState } from "react";
import CardRanking from "../componentRanking/CardRanking";
import { getRankingStatistics } from "../services/api";
 
  const RankingPage = () => {
    const [ranking, SetRanking] = useState([]);
  
    useEffect(() => {
      async function RankingStatFetch() {
        const data = await getRankingStatistics();
        SetRanking(data);
      }
      RankingStatFetch();
    }, []);
  
      return (
        <div className="Page-Ranking">
          <div className="TitleCard">
          <h1>-Group Phase Ranking FifaWorldCup-</h1></div>
           {ranking.map((rank) => (
            <CardRanking rank={rank}  />
          ))}
        </div>
      );
    };

export default RankingPage;