import React from 'react'

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Note';
    }
    render() {
        return (
            <li className="item active">
                My first note in this app
                <div className="context">
                    <div className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></div>
                    <div className="close"><i className="fa fa-times" aria-hidden="true"></i></div>
                </div>
            </li>
        )
    }
}

export default Note;
