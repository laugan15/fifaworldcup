import styled from "@emotion/styled";

export const Header = styled.nav`
  width: 100vw;
  height: 60px;
  background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 36%, rgba(12,18,83,1) 84%);
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 13px -7px #e7e7e7e7, -3px 3px 15px -2px rgba(0, 0, 0, 0);
`;

export const NavbarLinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 100px) {
    justify-content:space-between;
  
`;

export const NavbarLinkItem = styled.li`

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-bottom: 0.1px solid #a8861e;
  }
`;

export const MainContainer = styled.main`

  min-height: 570px;
  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const ImageLogo = styled.img`
  height:7vh;
  width : 10vw;
  margin-right: 60%;

  @media (max-width: 1200px) {
    margin-right: 10%;
    height:8vh;
    width : 12vw;
  }
`;

