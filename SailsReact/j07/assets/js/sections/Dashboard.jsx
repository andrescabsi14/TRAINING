import React from 'react'
import ContextNav from "../components/ContextNav/ContextNav.jsx"
import Header from "../components/Header/Header.jsx"
import Nav from "../components/Nav/Nav.jsx"
import Notes from "../components/Notes/Notes.jsx"


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dashboard';
    }
    
    render() {
        return (
            <div className="dashboard">
                <Header />
                <ContextNav />
                {/* Content main container*/}
                <section className="main_content">
                    <Notes notes={this.props.data} />
                </section>
                <Nav />
            </div>
        )
    }
}

export default Dashboard;

