import React from 'react';
import ReactDOM from 'react-dom';
import nav from "../components/nav/nav.jsx";
// import header from "./components/header/header.js"
 
class App extends React.Component {
  render() {
    return <h1>World</h1>
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'));