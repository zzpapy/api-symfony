import React from 'react';
import logo from './logo.svg';
import { Route, Switch,Router } from "react-router-dom";
import Login from './Components/Login.js';
import {getArticles} from './API/API.js'

class App extends React.Component {
  
  // const listItems = articles.map((article) =>
  // <li>{article.title}</li>
// );
async componentDidMount() {
  let articles = await getArticles()
  console.log(articles)
}


render() {
  
  return (
    <Login />
  )
}
}

export default App;
