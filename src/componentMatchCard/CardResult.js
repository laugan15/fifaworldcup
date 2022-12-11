import React from 'react'
import { CardContainer, CardSpace, CardImgFirstTeam, CardImgContainer, CardImgSecondTeam, CardTeamName, CardResults } from './CardResultStyle'

const CardResult = ({match}) => {
  const elements = match
  console.log("OBJ ", elements)
  // console.log(elements.homeLogo)
  // console.log(elements.homeTeamScore)
  

  return (
  <CardContainer>
    <CardSpace>
      <CardImgContainer>
      <CardImgFirstTeam src={elements.homeLogo}/>
      <CardImgSecondTeam src={elements.awayLogo}/>
      </CardImgContainer>
      <CardTeamName>{elements.homeTeam}-{elements.awayTeam}</CardTeamName>
      <CardResults>{elements.homeTeamScore}-{elements.awayTeamScore} </CardResults>
    </CardSpace>
  </CardContainer>


  )
}

export default CardResult