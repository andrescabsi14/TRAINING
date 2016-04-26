import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from "../sections/Dashboard.jsx"
import config from "../config"
import $ from "jquery"
import Router from './router';


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = { data: [] }
    }

    loadNotes () {
        let notesEndpoint = config.api.url + config.api.notes
        fetch(notesEndpoint)
        .then(response => response.json())
        .then(data => this.setState({ data: data }))
        .catch(err => console.error(this.props.url, err.toString()))
    }

    componentDidMount () {
        this.loadNotes()
        
    }
   

    
    render() {
        return (
            <Dashboard data={this.state.data} />
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))

// https://css-tricks.com/learning-react-router/