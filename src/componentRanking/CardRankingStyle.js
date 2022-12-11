import styled from "@emotion/styled";

export const CardContainerRanking = styled.div`
  display: flex;
  width : 100%;
  height : 50vh;
  justify-content : center;

`;

export const CardSpaceRanking = styled.div`
  display: flex;
  width : 60%;
  height : 40vh;
  align-items: center;
  justify-content : center;
  flex-direction: column;
  color: white;
  border : 1px solid black;
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 10px 10px rgba(129, 129, 129, 0.33);
  transition: all .4s ease;
  backdrop-filter: blur(5px); 
   &:hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
    box-shadow: 10px 10px rgba(0,0,0,.5);
    transform: scale(1.06);

`;

export const CardImgSquadLogo = styled.img`
  width : 5vw;
  height : 5vh;
  display:flex;
  align-items: center;
  justify-content : center;

`;
export const CardPosition = styled.h1`

  display:flex;
  align-item:center;
  justify-content:center;
  
    
}
`;

export const CardName = styled.h1`

  display:flex;
  align-item:center;
  justify-content:center;
  margin-bottom:10px;
 
`;

export const CardNumberOfPoint = styled.h3`
  
  display:flex;
  align-item:center;
  justify-content:center;

`;
export const CardFailedMatches = styled.h4`

  display:flex;
  align-item:center;
  justify-content:center;


`;

