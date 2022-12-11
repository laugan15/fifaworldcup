import React from "react";
import { Header, NavbarLinksWrapper, NavbarLinkItem, ImageLogo } from "./LayoutStyle";
import { Link, useLocation } from "react-router-dom";
import image from "../assets/logofifa.png";

const navbarLinks = [
  { path: "/", label: "Home" },
  { path: "/games", label: "Games" },
  { path: "/ranking", label: "Ranking" },
  { path: "/news", label: "News" },
  { path: "/aboutme", label: "About Me" },
];

const Navbar = () => {
  const location = useLocation();

  return (
 
    <Header>
       
      <NavbarLinksWrapper>
        <ImageLogo src={image}></ImageLogo>
        {navbarLinks.map((link, index) => (
          <NavbarLinkItem active={location.pathname === link.path} key={index}>
            <Link to={link.path}>{link.label}</Link>
          </NavbarLinkItem>
        ))}
      </NavbarLinksWrapper>
    </Header>
  );
};

export default Navbar;