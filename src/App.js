import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import RankingPage from "./pages/RankingPage";
import AboutMePage from "./pages/AboutMePage";
import Page404 from "./pages/Page404";
import Layout from "./layout/Layout";
import "./assets/global.css"
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="ranking" element={<RankingPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="aboutme" element={<AboutMePage />} />
          <Route path="*" element={<Page404 />} />
           </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
