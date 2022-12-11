import React, { useEffect, useState } from "react";
import CardNews from "../componentNews/CardNews";
import { getNews } from "../services/api";
 
  const NewsPages = () => {
    const [news, SetNews] = useState([]);
  
    useEffect(() => {
      async function FetchNews() {
        const data = await getNews();
        SetNews(data);
      }
      FetchNews();
    }, []);
  
      return (
        <div className="Page-News">
        <div className="TitleCardNews">
        <h1>-News FifaWorldCup 2022-</h1></div>
           {news.map((newss) => (
                <CardNews newss={newss} />
            ))}
        </div>
      );
    };

export default NewsPages;