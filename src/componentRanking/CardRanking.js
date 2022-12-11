import React from 'react'
import { CardContainerRanking, CardSpaceRanking, CardImgSquadLogo, CardPosition, CardName, CardNumberOfPoint, CardFailedMatches } from './CardRankingStyle'

const CardRanking = ({rank}) => {
 
    return (
  <> 
    <CardContainerRanking>
      <CardSpaceRanking>
        <CardImgSquadLogo src={rank.SquadLogo}/>
        <CardPosition>POSITION :  {rank.Position}</CardPosition>
        <CardName> SQUAD NAME :  {rank.Name}</CardName>
        <CardNumberOfPoint> POINTS : {rank.Points}</CardNumberOfPoint>
        <CardFailedMatches>GAMES FAILED : {rank.Loosed}</CardFailedMatches>
      </CardSpaceRanking>
    </CardContainerRanking>
  </>
    )
  }
  
  export default CardRanking