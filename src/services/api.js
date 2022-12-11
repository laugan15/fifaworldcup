const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e4b45fda5msh46f3540cc5f5928p13e17ajsnd7965487a8b4',
		'X-RapidAPI-Host': 'football98.p.rapidapi.com'
	}
};
  const END_POINT = "https://football98.p.rapidapi.com/fifaworldcup/results";

  const END_POINT_RANKING = "https://football98.p.rapidapi.com/fifaworldcup/table";

  const END_POINT_NEWS = "https://football98.p.rapidapi.com/fifaworldcup/news";
  
  


  
  export const getMatchesResult = async () => {
    try {
      const res = await fetch(`${END_POINT}`, options);
      const  matches  = await res.json();
      console.log("MATCHES",matches)
      return matches;
     
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
  
  export const getRankingStatistics = async () => {
    try {
      const res = await fetch(`${END_POINT_RANKING}`, options);
      const ranking = await res.json();
      return ranking;
     
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
  

  export const getNews = async () => {
    try {
      const res = await fetch(`${END_POINT_NEWS}`, options);
      const news = await res.json();
      return news;
     
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
  