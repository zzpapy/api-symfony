// API/TMDBApi.js

const API_TOKEN = "1209c73f14597cc45c91696c34a854c7";

export function getArticles () {
    const url = 'http://localhost:8000/api/articles/'
    return fetch(url)
    .then((response) => response)
    .catch((error) => console.error(error))
  }
  
  





  



  