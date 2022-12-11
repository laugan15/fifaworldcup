import React, { useEffect, useState } from "react";
import CardResult from "../componentMatchCard/CardResult";
import { getMatchesResult } from "../services/api";
import { v4 as uuidv4 } from 'uuid';


function setUpDict(someData) {
  const val = Object.values(someData[0])
  //var values = Object.keys(someData).map(function(key){
    //return someData[key];
//});
return val
}

  const GamesPage = () => {
    const [matches, setMatches] = useState([]);
  
    useEffect(() => {
      async function matchesResultFetch() {
        const data = await getMatchesResult();
        const newData = setUpDict(data)
        console.log("New Data: ",newData)
        setMatches(newData);
        console.log("typeOf: ", typeof newData )
        ;
      }
      matchesResultFetch();
    }, []);
  
      return (
        <div className="card-Games">
           <div className="TitleCardGames">
        <h1>-Results FifaWorldCup 2022-</h1></div>
           {matches.map((match) => (
            match.map((mat) => (
              <CardResult match={mat} key={uuidv4()}/>
            ))
              
            ))}
          
       
        </div>
      );
    };

export default GamesPage;