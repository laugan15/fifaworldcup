import styled from "@emotion/styled";

export const CardContainerNews = styled.div`
display: flex;
width : 100%;
height : 50vh;
justify-content : center;
`;

export const CardSpaceNews = styled.div`

display: flex;
width : 60%;
height : 40vh;
justify-content : center;
flex-direction: column;
color: white;
border : 1px solid black;
border-radius: 9px;
background: rgba(0, 0, 0, 0.8);
backdrop-filter: blur(5px); 
box-shadow: 10px 10px rgba(129, 129, 129, 0.33);
transition: all .4s ease;
 &:hover {
  transform: scale(1.06);
  border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
  box-shadow: 10px 10px rgba(0,0,0,.5);

`;

export const CardContainerImg= styled.div`

width:100%;
height:20vh;
display:flex;
align-item:center;
justify-content:center;

 


`;
export const CardNewsImage= styled.img`

width:110px;
height:110px;
display:flex;
align-item:center;
justify-content:center;
border-radius:9px;
border:1px solid black;
margin-bottom:10px;

`;

export const CardTitleNews= styled.h1`

display:flex;
text-align:center;
font-size:1.6rem;
justify-content: center;
padding-bottom:15px;
@media (max-width: 800px) {
  font-size:1.2rem;
}
`;

export const CardLink = styled.a`

display:flex;
align-item:center;
justify-content:center;
  `;
