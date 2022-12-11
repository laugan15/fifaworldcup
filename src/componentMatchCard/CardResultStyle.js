import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  width : 100%;
  height : 30vh;
  padding-top: 20px;
  justify-content : center;
 
`;



export const CardSpace = styled.div`
  display: flex;
  width : 65%;
  height : 20vh;
  align-items: center;
  justify-content : center;
  flex-direction: column;
  color: white;
  border : 1px solid black;
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  box-shadow: 10px 10px rgba(129, 129, 129, 0.33);
  transition: all .4s ease;
  &:hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
    box-shadow: 10px 10px rgba(0,0,0,.5);
    transform: scale(1.06);
`;

export const CardImgFirstTeam = styled.img`
  width : 6vw;
  height : 6vh;
  margin-right :60%;
  border: 1.5px solid black;
  border-radius:50%;



`;

export const CardImgContainer = styled.div`
  width : 30%;
  height : 10vh;
  flex-direction:row;
  display:flex;
  align-item:center;
  justify-content:center;
  margin-top:20px;



`;

export const CardImgSecondTeam = styled.img`
  width : 6vw;
  height : 6vh;
  margin-left :60%;
  border: 1.5px solid black;
  border-radius:50%;

`;


export const CardTeamName = styled.h1`
  width : 50%;
  height : 8vh;
  display:flex;
  align-item:center;
  justify-content:center;
  margin-bottom:10px;
  @media (max-width: 800px) {
    font-size:1.4rem;
    padding-top:10px;
    
}
`;

export const CardResults = styled.h2`
  width : 7vw;
  height : 7vh;
  display:flex;
  align-item:center;
  justify-content:center;
  color:white;
  @media (max-width: 800px) {
    font-size:1.4rem;
    
}

`;