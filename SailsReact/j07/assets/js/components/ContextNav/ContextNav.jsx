import React from 'react'

class ContextNav extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ContextNav';
    }
    render() {
        return (
            // In context menu
            <nav>
                <div className="icon"></div>
                <ul>
                    <li>
                        <div className="icon"><i className="icon dot"></i></div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon"><i className="icon dot"></i></div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon"><i className="icon dot"></i></div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon"><i className="icon dot"></i></div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon"><i className="icon dot"></i></div>
                        <div className="title">Item</div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default ContextNav;



 
