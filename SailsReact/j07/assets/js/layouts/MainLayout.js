import React from 'react';

class MainLayout extends React.Component{
    constructor(props) {
        super(props);
        this.displayName = 'MainLayout';
    }
    
    render() {
        return (
        	<div class="app_wrapper">
            <Header />
            <ContextNav />
            {/* Content main container*/}
            <section className="main_content">
                {this.props.children}
            </section>
            <Nav />
            </div>	
        )
    }
}