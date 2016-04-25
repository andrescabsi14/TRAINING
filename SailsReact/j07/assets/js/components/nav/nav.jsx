import React from 'react'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Nav';
    }
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="title">Item</div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="title">Item</div>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Nav;
