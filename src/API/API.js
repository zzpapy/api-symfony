// API/TMDBApi.js

const API_TOKEN = "1209c73f14597cc45c91696c34a854c7";

export function getArticles () {
    const url = 'http://localhost/800/articles'
    return fetch(url,{headers: {
      mode: 'no-cors',
        }})
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }
  





  



  