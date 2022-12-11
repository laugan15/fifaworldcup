import React from 'react'
import { CardLink, CardSpaceNews, CardTitleNews,CardNewsImage,CardContainerImg, CardContainerNews } from "./CardNewsStyle"

const CardNews = ({newss}) => {
    console.log("NEWS",newss)
  return (
    <> 
    <CardContainerNews>
        <CardSpaceNews>
            <CardContainerImg>
            <CardNewsImage src={newss.Image}>

            </CardNewsImage>
            </CardContainerImg>
                <CardTitleNews> NEWS :  {newss.Title}</CardTitleNews>
            <CardLink href={newss.NewsLink}> 
                LINK 
            </CardLink>
        </CardSpaceNews>
    </CardContainerNews>
     </>
  )
}

export default CardNews