import React from 'react'
import { LinkButton, LinkButton2, LinkButton3} from './Button'

const CardHomePage = () => {
  return (
    <div className='Card-Home'>
        <h1>Welcome To FIFA WORLD CUP Games And Ranking ! </h1>
        <LinkButton to="/Games"> Games Result </LinkButton>
        <LinkButton2 to="/Ranking">Team Ranking </LinkButton2>
        <LinkButton3 to="/News">Announcement</LinkButton3>
    </div>
  )
}

export default CardHomePage

