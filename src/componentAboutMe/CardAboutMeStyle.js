import styled from "@emotion/styled";


export const ContainerAboutMe = styled.div`

    width: 100%;
    height: 87vh;
    display: flex;
    margin-top:20%;
    align-item:center;
    flex-direction:column;
    @media (max-width: 700px) {
        padding-top:60px;
    }
     
    
    
`

export const CardContainerAboutMe = styled.div`

    width: 60vw;
    height: 26vh;
    border: 0.5px solid white;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding-left:15%;
    justify-content:space-between;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 10px 10px rgba(129, 129, 129, 0.33);
    transition: all .4s ease;
    &:hover {
    border-radius: 50% 20% / 10% 40%;;
    box-shadow: 10px 10px rgba(33, 33, 33, 0.7);
    transform: scale(1.06);
`

export const CardImgOfMe = styled.img`
    width: 11vw;
    height: 20vh;
    border-radius:50%;
    border:1px solid black;
    @media (max-width: 1000px) {
        width: 11vw;
        height: 16vh;
    }
    @media (max-width: 700px) {
        width: 12vw;
        height: 12vh;
    }
`
export const CardList = styled.ul`

display : inline;
color:white;
height:50%;
width:60vw;
padding-top:18px;
`


export const CardListContainer = styled.div`
width: 70%;
height: 25vh;
color:white;
font-size:1.7rem;
display:flex;
justify-content: flex-end;
@media (max-width: 1000px) {
    font-size: 1.4rem;
}

`

export const Hobie = styled.div`
width: 60vw;
height: 25vh;
display:flex;
padding-top:50px;
flex-direction:row;
justify-content: space-between;

`
export const HobieImg= styled.img`
border: 1px solid black;
border-radius:50%;
width: 15vh;
height : 15vh;

@media (max-width: 900px) {
    width: 10vh;
    height : 10vh;
}

`
export const HobieDiv = styled.div`
width: 20vw;
height: 25vh;
display:flex;
flex-direction:column;
color:white;
font-size:1.6rem;
align-item:center;
justify-content:center;
padding-right:17%;
@media (max-width: 900px) {
    width: 10vh;
    height : 10vh;
    font-size:1.2rem;
}
`
export const HobieText = styled.h4`
display:flex;
align-item:center;
margin-left:20px;
`