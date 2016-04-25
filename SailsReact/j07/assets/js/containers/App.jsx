import React from 'react'
import ReactDOM from 'react-dom'
import ContextNav from "../components/ContextNav/ContextNav.jsx"
import Header from "../components/Header/Header.jsx"
import Nav from "../components/Nav/Nav.jsx"
import Notes from "../components/Notes/Notes.jsx"

 
class App extends React.Component {
  render() {
    return (
    	<div>
    		<Header />
    		<ContextNav />
    		{/* Content main container*/}
    		<section className="main_content">
    			<Notes />
    		</section>	
    		<Nav />
    	</div>
    )
  }
}
 
ReactDOM.render(<App />, document.getElementById('app'))