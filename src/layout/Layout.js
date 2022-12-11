import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import {MainContainer } from "./LayoutStyle";
import FooterBar from "./FooterBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <FooterBar />
    </>
  );
};

export default Layout;
