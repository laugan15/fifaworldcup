import React from 'react'
import { ContainerAboutMe,CardImgOfMe,CardList,HobieImg,HobieText, HobieDiv,Hobie,CardListContainer, CardContainerAboutMe } from './CardAboutMeStyle'
import image from "../assets/PicOfMe.png"
import image2 from "../assets/cook.jpeg"
import image3 from "../assets/music.jpeg"
import image4 from "../assets/moovie.jpeg"
import image5 from "../assets/party.jpeg"

const CardAboutMe = () => {
  return (
    <div> 
<ContainerAboutMe>
<CardContainerAboutMe>
<CardImgOfMe src={image}></CardImgOfMe>
<CardListContainer>
<CardList>
  <li>Name: Laurie Dayan</li>
  <li>Age: 24 Years Old</li>
  <li>City: Tel Aviv</li>
  <li>Nationality: Frensh</li>
  <li>Languages: Frensh / Hebrew / English</li>
</CardList>
</CardListContainer>
</CardContainerAboutMe>
<Hobie>
<HobieDiv>
    <HobieImg  src={image2}></HobieImg><br></br>
    <HobieText>Cooking</HobieText></HobieDiv>
    <HobieDiv> <HobieImg  src={image3}></HobieImg><br></br>
    <HobieText>Music</HobieText></HobieDiv>
    <HobieDiv><HobieImg  src={image4}></HobieImg><br></br>
    <HobieText>Moovie</HobieText></HobieDiv>   
    <HobieDiv><HobieImg  src={image5}></HobieImg><br></br>
    <HobieText>Party </HobieText>
</HobieDiv>     
</Hobie>
        </ContainerAboutMe>
    </div>
  )
}

export default CardAboutMe